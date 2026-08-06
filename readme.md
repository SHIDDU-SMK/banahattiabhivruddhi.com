# Banahatti Abhivruddhi – Praja Soudha Movement Website

## Simple Google login for the Committee Editor

The editor is hidden until the authorised Google account signs in.

**Authorised Gmail account:** `shiddu@gmail.com`

This version uses **Google Sign-In through Firebase Authentication**. There is no OTP to type and no separate password. Click **Sign in with Google**, choose `shiddu@gmail.com`, and the editor opens.

### One-time setup

1. Open Firebase Console and create a project.
2. Add a **Web app** to the project.
3. Open **Authentication → Sign-in method** and enable **Google**.
4. Open **Authentication → Settings → Authorized domains** and add the domain where this website will be hosted.
5. Copy the Firebase configuration shown for the web app.
6. Open `script.js` and replace:

```js
const FIREBASE_CONFIG = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_FIREBASE_APP_ID"
};
```

### Access behaviour

- Only `shiddu@gmail.com` is accepted.
- Any other Google account is immediately signed out and denied access.
- The Committee Editor becomes visible only after successful sign-in.
- Use the **Sign out** button when finished.

### Important limitation

New photo/video posts are currently stored in IndexedDB on the signed-in browser only. They are not visible to visitors using other phones or computers. Public multi-device publishing requires cloud storage/database and server-side security rules.

An authenticator-app code cannot be implemented securely inside a static HTML/JavaScript website because the secret would be exposed in the website code. Google login is the simpler and safer option for this version.

## Other edits

- Replace WhatsApp and phone placeholders in `script.js`.
- Edit `siteData.initialPosts` for permanent public posts.
- Photos are stored under `assets/`.
