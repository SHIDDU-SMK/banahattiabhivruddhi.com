$KEEP = "shiddugmail"

$ME = gh api user --jq '.login'
Write-Host "Authenticated as: $ME"

# Organizations
$ORGS = gh api user/orgs --paginate --jq '.[].login'

foreach ($org in $ORGS) {
    Write-Host ""
    Write-Host "Processing organization: $org"

    # Organization members
    $members = gh api "orgs/$org/members" --paginate --jq '.[].login'

    foreach ($user in $members) {
        if ($user -ne $KEEP) {
            Write-Host "Removing organization member: $user from $org"

            gh api `
              --method DELETE `
              "orgs/$org/members/$user"
        }
    }

    # Outside collaborators
    $outside = gh api "orgs/$org/outside_collaborators" --paginate --jq '.[].login' 2>$null

    foreach ($user in $outside) {
        if ($user -ne $KEEP) {
            Write-Host "Removing outside collaborator: $user from $org"

            gh api `
              --method DELETE `
              "orgs/$org/outside_collaborators/$user"
        }
    }
}

# Personal repositories
$repos = gh repo list $ME --limit 1000 --json nameWithOwner --jq '.[].nameWithOwner'

foreach ($repo in $repos) {
    Write-Host ""
    Write-Host "Checking repository: $repo"

    $collaborators = gh api "repos/$repo/collaborators" --paginate --jq '.[].login' 2>$null

    foreach ($user in $collaborators) {
        if (($user -ne $KEEP) -and ($user -ne $ME)) {
            Write-Host "Removing collaborator: $user from $repo"

            gh api `
              --method DELETE `
              "repos/$repo/collaborators/$user"
        }
    }
}

Write-Host ""
Write-Host "Completed."