# Banahatti Abhivruddhi – Praja Soudha Movement Website

## Committee editor authentication

The photo/video/update editor is hidden until the authorised account signs in.

**Authorised email:** `shiddu@gmail.com`

Authentication uses Supabase email OTP / magic-link login. No password is stored in the website.

### One-time setup

1. Create a Supabase project.
2. In Supabase, open **Authentication → Providers → Email** and enable email OTP/magic-link login.
3. Under **Authentication → URL Configuration**, add the website's final public URL to the allowed redirect URLs.
4. Open `script.js` and replace:

```js
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
```

Use the Project URL and public anon key found in **Project Settings → API**.

### Access behaviour

- Only `shiddu@gmail.com` is accepted by the website editor.
- A login code or secure sign-in link is sent to that inbox.
- Any other authenticated Supabase account is automatically signed out and denied access.
- The editor becomes visible only after successful authentication.

### Important security note

The client-side email check protects the editor interface, but server-side security must also be enforced before public cloud publishing is added. When posts are moved to Supabase Database/Storage, enable Row Level Security and write policies that permit insert/update/delete only when `auth.jwt()->>'email' = 'shiddu@gmail.com'`.

The present version stores newly added posts in IndexedDB on the signed-in browser only. They are not automatically visible on other devices.

## Other edits

- Replace WhatsApp and phone placeholders in `script.js`.
- Edit `siteData.initialPosts` for permanent public posts.
- Photos are stored under `assets/`.


## Terms and Conditions pages
- `terms-en.html` — English Terms and Conditions
- `terms-kn.html` — Kannada Terms and Conditions
- Both pages are linked in the website footer.


## Bilingual content
The homepage now shows the main public content in both English and simple Kannada. Movement updates also include Kannada summaries for the built-in posts.
