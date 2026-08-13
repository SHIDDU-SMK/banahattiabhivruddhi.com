$KEEP = "shiddugmail"

$ME = gh api user --jq '.login'

Write-Host "Authenticated as: $ME"
Write-Host "Keeping only: $KEEP"
Write-Host ""

$ORGS = gh api user/orgs --paginate --jq '.[].login'

foreach ($org in $ORGS) {

    Write-Host ""
    Write-Host "======================================"
    Write-Host "Processing organization: $org"
    Write-Host "======================================"

    # --------------------------------------------
    # Remove organization members
    # --------------------------------------------

    $members = gh api "orgs/$org/members" --paginate --jq '.[].login' 2>$null

    foreach ($user in $members) {

        if ($user -ne $KEEP) {

            Write-Host "Removing organization member: $user"

            gh api `
                --method DELETE `
                "orgs/$org/members/$user"
        }
    }

    # --------------------------------------------
    # Remove outside collaborators
    # --------------------------------------------

    $outside = gh api "orgs/$org/outside_collaborators" --paginate --jq '.[].login' 2>$null

    foreach ($user in $outside) {

        if ($user -ne $KEEP) {

            Write-Host "Removing outside collaborator: $user"

            gh api `
                --method DELETE `
                "orgs/$org/outside_collaborators/$user"
        }
    }

    # --------------------------------------------
    # Check EVERY repository under organization
    # --------------------------------------------

    $orgRepos = gh repo list $org `
        --limit 1000 `
        --json nameWithOwner `
        --jq '.[].nameWithOwner'

    foreach ($repo in $orgRepos) {

        Write-Host ""
        Write-Host "Checking repository: $repo"

        $collaborators = gh api `
            "repos/$repo/collaborators?affiliation=all" `
            --paginate `
            --jq '.[].login' 2>$null

        foreach ($user in $collaborators) {

            if ($user -ne $KEEP) {

                Write-Host "Removing $user from $repo"

                gh api `
                    --method DELETE `
                    "repos/$repo/collaborators/$user" 2>$null
            }
        }
    }
}

# ============================================
# PERSONAL REPOSITORIES
# ============================================

Write-Host ""
Write-Host "Processing personal repositories..."

$personalRepos = gh repo list $ME `
    --limit 1000 `
    --json nameWithOwner `
    --jq '.[].nameWithOwner'

foreach ($repo in $personalRepos) {

    Write-Host ""
    Write-Host "Checking repository: $repo"

    $collaborators = gh api `
        "repos/$repo/collaborators?affiliation=all" `
        --paginate `
        --jq '.[].login' 2>$null

    foreach ($user in $collaborators) {

        if (($user -ne $KEEP) -and ($user -ne $ME)) {

            Write-Host "Removing $user from $repo"

            gh api `
                --method DELETE `
                "repos/$repo/collaborators/$user" 2>$null
        }
    }
}

Write-Host ""
Write-Host "======================================"
Write-Host "COMPLETED"
Write-Host "Only $KEEP should retain user access"
Write-Host "======================================"