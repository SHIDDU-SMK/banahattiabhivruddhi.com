/*
  BANAHATTI PRAJA SOUDHA MOVEMENT WEBSITE
  ---------------------------------------
  1. Replace the WhatsApp and phone numbers below.
  2. Edit the initialPosts list for posts visible to every website visitor.
  3. Add your Firebase web-app configuration below.
  4. Google sign-in is restricted to shiddu@gmail.com.
  5. Posts are still stored in this browser using IndexedDB. Public multi-device
     publishing requires cloud database/storage with server-side access rules.
*/
const AUTHORIZED_EDITOR_EMAIL = "shiddu@gmail.com";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAYWEeL1wwZIaTBYXedYewlRq9z3Fbe_9E",
  authDomain: "banahattiabhivruddhi.firebaseapp.com",
  projectId: "banahattiabhivruddhi",
  storageBucket: "banahattiabhivruddhi.firebasestorage.app",
  messagingSenderId: "761371982615",
  appId: "1:761371982615:web:03b4763122b4c21b7a5552",
  measurementId: "G-TMBFE8NV43"
};

const siteData = {
  whatsappNumber: "919880281879",
  phoneNumber: "+919880281879",
  ticker: "Saturday, 8 August 2026 · 9:00 AM: Mega procession from Shri Kadasiddeshwar Temple to Chennamma Circle. Saradi hunger Satyagraha begins thereafter.",
  initialPosts: [
    {
      id: "whatsapp-status-1",
      type: "Announcement",
      date: "2026-08-06",
      title: "WhatsApp group shows town-wide support for the movement",
      text: "The Banahatti Praja Soudha Horata Samiti's group discussion reflects strong participation from citizens, traders, youth volunteers, social organisations, senior citizens, media representatives and public representatives. Members have appealed for a peaceful, democratic and non-political campaign and pledged to continue until the demand is fulfilled.",
      mediaKind: "",
      mediaUrl: "",
      link: "",
      local: false
    },
    {
      id: "official-news-1",
      type: "Paper Cut",
      date: "2026-08-06",
      title: "Samyukta Karnataka reports major Praja Soudha struggle",
      text: "The report states that Banahatti has called for a complete bandh on Saturday. A mega protest procession will begin at 9:00 AM from Shri Kadasiddeshwar Temple, travel through the town’s main roads and reach Chennamma Circle, where the Saradi hunger Satyagraha will begin.",
      mediaKind: "image",
      mediaUrl: "assets/praja-soudha-committee-meeting.jpg",
      link: "https://samyuktakarnataka.in/districts/baglkot/a-major-struggle-for-the-construction-of-the-prajasoudha-in-banahatti-itself/",
      local: false
    },
    {
      id: "official-1",
      type: "Announcement",
      date: "2026-08-06",
      title: "Complete Banahatti bandh in support of Praja Soudha",
      text: "Shops, weaving industries, banks, private and public transport, school vehicles, the weekly market and most commercial and public activities are expected to support the bandh. Ambulance and fire-service movement will be permitted.",
      mediaKind: "image",
      mediaUrl: "assets/media-facebook.svg",
      link: "https://samyuktakarnataka.in/districts/baglkot/a-major-struggle-for-the-construction-of-the-prajasoudha-in-banahatti-itself/",
      local: false
    },
    {
      id: "official-2",
      type: "Announcement",
      date: "2026-08-06",
      title: "Mega procession route and time announced",
      text: "The peaceful procession is scheduled for Saturday, 8 August 2026 at 9:00 AM. It will start from Shri Kadasiddeshwar Temple, pass through the main roads of Banahatti and conclude at Chennamma Circle.",
      mediaKind: "image",
      mediaUrl: "assets/media-instagram.svg",
      link: "https://samyuktakarnataka.in/districts/baglkot/a-major-struggle-for-the-construction-of-the-prajasoudha-in-banahatti-itself/",
      local: false
    },
    {
      id: "official-3",
      type: "Announcement",
      date: "2026-08-06",
      title: "Saradi hunger Satyagraha begins at Chennamma Circle",
      text: "After the procession, leaders of different organisations, citizens and movement participants will formally begin the Saradi hunger Satyagraha. The committee says the struggle will continue until the Praja Soudha is constructed in Banahatti.",
      mediaKind: "image",
      mediaUrl: "assets/media-paper-2.svg",
      link: "https://samyuktakarnataka.in/districts/baglkot/a-major-struggle-for-the-construction-of-the-prajasoudha-in-banahatti-itself/",
      local: false
    }
  ]
};

const DB_NAME = "banahattiAbhivruddhiDB";
const DB_VERSION = 1;
const STORE_NAME = "movementPosts";
let activeFilter = "All";
let localPosts = [];
let previewUrl = "";
let modalObjectUrl = "";
let firebaseAuth = null;
let authenticatedUser = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];


function isFirebaseConfigured() {
  return FIREBASE_CONFIG.apiKey &&
    !FIREBASE_CONFIG.apiKey.includes("YOUR_FIREBASE") &&
    FIREBASE_CONFIG.authDomain &&
    !FIREBASE_CONFIG.authDomain.includes("YOUR_PROJECT") &&
    FIREBASE_CONFIG.projectId &&
    !FIREBASE_CONFIG.projectId.includes("YOUR_PROJECT") &&
    FIREBASE_CONFIG.appId &&
    !FIREBASE_CONFIG.appId.includes("YOUR_FIREBASE");
}

function isAuthorisedEmail(email) {
  return String(email || "").trim().toLowerCase() === AUTHORIZED_EDITOR_EMAIL;
}

function updateEditorAccess(user) {
  authenticatedUser = user || null;
  const authorised = Boolean(user && isAuthorisedEmail(user.email));
  const access = $("#editorAccess");
  const loginBox = $("#otpForm");
  const session = $("#authSession");
  const editor = $("#publisherPanel");

  editor.hidden = !authorised;
  loginBox.hidden = authorised;
  session.hidden = !authorised;
  access.classList.toggle("authenticated", authorised);

  if (authorised) {
    $("#signedInEmail").textContent = user.email;
    $("#authStatus").textContent = "Google sign-in successful.";
  } else {
    $("#signedInEmail").textContent = "";
  }
}

async function setupAuthentication() {
  const button = $("#googleSignInButton");
  const status = $("#authStatus");
  const signOutButton = $("#signOutButton");

  if (!window.firebase || !isFirebaseConfigured()) {
    button.disabled = true;
    status.textContent = "Google login setup is incomplete. Add the Firebase configuration in script.js.";
    return;
  }

  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  firebaseAuth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ login_hint: AUTHORIZED_EDITOR_EMAIL, prompt: "select_account" });

  firebaseAuth.onAuthStateChanged(async user => {
    if (user && !isAuthorisedEmail(user.email)) {
      await firebaseAuth.signOut();
      updateEditorAccess(null);
      status.textContent = "Access denied. Sign in only with shiddu@gmail.com.";
      return;
    }
    updateEditorAccess(user || null);
  });

  button.addEventListener("click", async () => {
    button.disabled = true;
    status.textContent = "Opening Google sign-in…";
    try {
      await firebaseAuth.signInWithPopup(provider);
    } catch (error) {
      if (error.code === "auth/popup-blocked" || error.code === "auth/cancelled-popup-request") {
        await firebaseAuth.signInWithRedirect(provider);
      } else if (error.code === "auth/popup-closed-by-user") {
        status.textContent = "Google sign-in was cancelled.";
      } else {
        status.textContent = `Could not sign in: ${error.message}`;
      }
    } finally {
      button.disabled = false;
    }
  });

  signOutButton.addEventListener("click", async () => {
    await firebaseAuth.signOut();
    updateEditorAccess(null);
    status.textContent = "Signed out.";
  });
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("This browser does not support local post storage."));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getLocalPosts() {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const request = transaction.objectStore(STORE_NAME).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => db.close();
  });
}

async function saveLocalPost(post) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).put(post);
    transaction.oncomplete = () => { db.close(); resolve(); };
    transaction.onerror = () => { db.close(); reject(transaction.error); };
  });
}

async function removeLocalPost(id) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).delete(id);
    transaction.oncomplete = () => { db.close(); resolve(); };
    transaction.onerror = () => { db.close(); reject(transaction.error); };
  });
}

function formatDate(value) {
  if (!value) return "Date not added";
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function safeExternalUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function allPosts() {
  return [...localPosts, ...siteData.initialPosts].sort((a, b) => {
    const dateDiff = new Date(b.date) - new Date(a.date);
    if (dateDiff !== 0) return dateDiff;
    return Number(b.createdAt || 0) - Number(a.createdAt || 0);
  });
}

function getPostMedia(post, forModal = false) {
  if (post.mediaBlob instanceof Blob) {
    const objectUrl = URL.createObjectURL(post.mediaBlob);
    if (forModal) {
      if (modalObjectUrl) URL.revokeObjectURL(modalObjectUrl);
      modalObjectUrl = objectUrl;
    }
    return objectUrl;
  }
  return post.mediaUrl || "";
}

function createMediaElement(post, forModal = false) {
  const wrapper = document.createElement("div");
  wrapper.className = forModal ? "" : "post-media";
  const source = getPostMedia(post, forModal);

  if (source && post.mediaKind === "video") {
    const video = document.createElement("video");
    video.src = source;
    video.preload = "metadata";
    video.controls = forModal;
    video.playsInline = true;
    wrapper.append(video);
    if (!forModal) {
      const badge = document.createElement("span");
      badge.className = "video-badge";
      badge.textContent = "▶";
      wrapper.append(badge);
    }
  } else if (source) {
    const image = document.createElement("img");
    image.src = source;
    image.alt = post.title;
    wrapper.append(image);
  } else if (!forModal) {
    const mark = document.createElement("span");
    mark.className = "text-post-mark";
    mark.textContent = "ಪ್ರಜಾ";
    wrapper.append(mark);
  }
  return wrapper;
}

function renderFilters() {
  const types = ["All", ...new Set(allPosts().map(post => post.type))];
  const filter = $("#updatesFilter");
  filter.replaceChildren();
  types.forEach(type => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-btn${activeFilter === type ? " active" : ""}`;
    button.textContent = type;
    button.addEventListener("click", () => {
      activeFilter = type;
      renderFilters();
      renderPosts();
    });
    filter.append(button);
  });
}

function renderPosts() {
  const feed = $("#updatesFeed");
  const posts = activeFilter === "All" ? allPosts() : allPosts().filter(post => post.type === activeFilter);
  feed.replaceChildren();
  $("#emptyState").hidden = posts.length !== 0;

  posts.forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card reveal visible";

    if (post.local) {
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "delete-post";
      deleteButton.setAttribute("aria-label", `Delete ${post.title}`);
      deleteButton.textContent = "×";
      deleteButton.addEventListener("click", async event => {
        event.stopPropagation();
        const confirmed = window.confirm("Delete this locally saved post?");
        if (!confirmed) return;
        await removeLocalPost(post.id);
        localPosts = localPosts.filter(item => item.id !== post.id);
        renderFilters();
        renderPosts();
      });
      card.append(deleteButton);
    }

    card.append(createMediaElement(post));

    const body = document.createElement("div");
    body.className = "post-body";

    const meta = document.createElement("div");
    meta.className = "post-meta";
    const type = document.createElement("span");
    type.textContent = post.type;
    const date = document.createElement("time");
    date.dateTime = post.date;
    date.textContent = formatDate(post.date);
    meta.append(type, date);

    const title = document.createElement("h3");
    title.textContent = post.title;
    const text = document.createElement("p");
    text.textContent = post.text;

    const actions = document.createElement("div");
    actions.className = "post-actions";
    const readMore = document.createElement("span");
    readMore.className = "read-more";
    readMore.textContent = post.mediaKind === "video" ? "Watch video →" : "View update →";
    actions.append(readMore);

    body.append(meta, title, text, actions);
    card.append(body);
    card.addEventListener("click", () => openPostModal(post));
    feed.append(card);
  });
}

function openPostModal(post) {
  const modalMedia = $("#modalMedia");
  modalMedia.replaceChildren();
  const media = createMediaElement(post, true);
  while (media.firstChild) modalMedia.append(media.firstChild);
  $("#modalType").textContent = post.type;
  $("#modalDate").textContent = formatDate(post.date);
  $("#modalDate").dateTime = post.date;
  $("#modalTitle").textContent = post.title;
  $("#modalText").textContent = post.text;
  const link = safeExternalUrl(post.link);
  $("#modalLink").href = link || "#";
  $("#modalLink").hidden = !link;
  $("#postModal").showModal();
}

function resetPreview() {
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = "";
  $("#uploadPreview").replaceChildren();
  $("#uploadPreview").hidden = true;
}

function setupMediaPreview() {
  $("#postMedia").addEventListener("change", event => {
    resetPreview();
    const file = event.target.files[0];
    if (!file) return;
    const preview = $("#uploadPreview");
    preview.hidden = false;
    previewUrl = URL.createObjectURL(file);
    let media;
    if (file.type.startsWith("video/")) {
      media = document.createElement("video");
      media.controls = true;
    } else {
      media = document.createElement("img");
      media.alt = "Selected upload preview";
    }
    media.src = previewUrl;
    const caption = document.createElement("small");
    caption.textContent = `${file.name} · ${(file.size / 1024 / 1024).toFixed(1)} MB`;
    preview.append(media, caption);
  });
}

function setupPostForm() {
  const form = $("#postForm");
  const dateInput = $("#postDate");
  dateInput.value = new Date().toISOString().slice(0, 10);

  form.addEventListener("reset", () => {
    window.setTimeout(() => {
      dateInput.value = new Date().toISOString().slice(0, 10);
      resetPreview();
      $("#postStatus").textContent = "";
    }, 0);
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const status = $("#postStatus");
    if (!authenticatedUser || !isAuthorisedEmail(authenticatedUser.email)) {
      status.textContent = "Please sign in with the authorised committee email before publishing.";
      return;
    }
    const file = $("#postMedia").files[0];
    if (file && file.size > 80 * 1024 * 1024) {
      status.textContent = "Please use a photo or video smaller than 80 MB.";
      return;
    }

    const post = {
      id: `local-${Date.now()}`,
      type: $("#postType").value,
      date: $("#postDate").value,
      title: $("#postTitle").value.trim(),
      text: $("#postText").value.trim(),
      link: safeExternalUrl($("#postLink").value.trim()),
      mediaKind: file ? (file.type.startsWith("video/") ? "video" : "image") : "none",
      mediaBlob: file || null,
      mediaName: file?.name || "",
      createdAt: Date.now(),
      local: true
    };

    try {
      status.textContent = "Saving…";
      await saveLocalPost(post);
      localPosts.unshift(post);
      activeFilter = "All";
      renderFilters();
      renderPosts();
      form.reset();
      status.textContent = "Update published in this browser.";
      $("#updatesFeed").scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      console.error(error);
      status.textContent = "Could not save the post in this browser.";
    }
  });
}

function setupNavigation() {
  const toggle = $(".menu-toggle");
  const nav = $(".main-nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  $$(".main-nav a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal").forEach(element => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  $$(".reveal").forEach(element => observer.observe(element));
}

function setupLinks() {
  const shareText = encodeURIComponent("ಬನಹಟ್ಟಿಗೆ ಪ್ರಜಾ ಸೌಧ ಬೇಕು. Saturday, 8 August 2026: Join the mega procession for Banahatti Praja Soudha. Please follow official committee announcements.");
  $("#shareMovement").href = `https://wa.me/?text=${shareText}`;
  $("#joinWhatsApp").href = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent("I would like to participate in the Banahatti Praja Soudha movement. Please share the official procession and Saradi Satyagraha details.")}`;
  $("#joinWhatsApp").target = "_blank";
  $("#joinWhatsApp").rel = "noopener";
  $$("a[href='tel:+919999999999']").forEach(link => { link.href = `tel:${siteData.phoneNumber}`; });
}

async function init() {
  $("#tickerText").textContent = siteData.ticker;
  $("#year").textContent = new Date().getFullYear();
  setupNavigation();
  setupReveal();
  setupLinks();
  setupMediaPreview();
  setupPostForm();
  await setupAuthentication();

  try {
    localPosts = (await getLocalPosts()).sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
  } catch (error) {
    console.warn(error);
    $("#postStatus").textContent = "Local upload storage is unavailable in this browser.";
  }

  renderFilters();
  renderPosts();

  $(".modal-close").addEventListener("click", () => $("#postModal").close());
  $("#postModal").addEventListener("click", event => {
    if (event.target === $("#postModal")) $("#postModal").close();
  });
  $("#postModal").addEventListener("close", () => {
    if (modalObjectUrl) {
      URL.revokeObjectURL(modalObjectUrl);
      modalObjectUrl = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
