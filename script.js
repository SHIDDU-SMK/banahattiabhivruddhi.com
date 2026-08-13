// Author: Shiddu Mageppa | SMK Solutions | https://smksolns.com
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
  ticker: "8 ಆಗಸ್ಟ್ 2026 · ಬನಹಟ್ಟಿಯಲ್ಲಿ ಬೃಹತ್ ಮೆರವಣಿಗೆ ನಡೆಯಿತು; ಚೆನ್ನಮ್ಮ ವೃತ್ತದಲ್ಲಿ ಸರದಿ ಉಪವಾಸ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಚಾಲನೆ ನೀಡಲಾಯಿತು. · 8 August 2026 · Banahatti's mega procession was held and the relay hunger Satyagraha began at Chennamma Circle.",
  initialPosts: [
    {
      id: "saradi-auto-banagar-2026-08-13",
      type: "Satyagraha",
      date: "2026-08-13",
      title: "Today's relay Satyagraha — Auto Drivers and Banagar Samaj",
      titleKn: "ಇಂದಿನ ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಆಟೋ ಚಾಲಕರು ಮತ್ತು ಬಣಗಾರ ಸಮಾಜದ ಬೆಂಬಲ",
      text: "Auto drivers and members of the Banagar Samaj participated in today's relay Satyagraha and extended their support to the Praja Soudha movement in Banahatti.",
      textKn: "ಇಂದಿನ ಸರದಿ ಸತ್ಯಾಗ್ರಹದಲ್ಲಿ ಆಟೋ ಚಾಲಕರು ಮತ್ತು ಬಣಗಾರ ಸಮಾಜದವರು ಭಾಗವಹಿಸಿ ಬನಹಟ್ಟಿಯಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣ ಹೋರಾಟಕ್ಕೆ ಬೆಂಬಲ ಸೂಚಿಸಿದರು.",
      mediaKind: "gallery",
      mediaUrls: [
        "assets/saradi-satyagraha-auto-banagar-2026-08-13-01.jpeg",
        "assets/saradi-satyagraha-auto-banagar-2026-08-13-02.jpeg",
        "assets/saradi-satyagraha-auto-banagar-2026-08-13-03.png"
      ],
      mediaUrl: "assets/saradi-satyagraha-auto-banagar-2026-08-13-01.jpeg",
      link: "#satyagraha",
      local: false
    },
    {
      id: "news-coverage-2026-08-13",
      type: "Paper Cut",
      date: "2026-08-13",
      title: "13 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn: "13 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text: "Selected newspaper coverage from 13 August 2026 on the continuing Praja Soudha movement and public support in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಮುಂದುವರಿದಿರುವ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಬೆಂಬಲದ ಕುರಿತು 13 ಆಗಸ್ಟ್ 2026ರ ಆಯ್ದ ಪತ್ರಿಕಾ ವರದಿಗಳು.",
      mediaKind: "gallery",
      mediaUrls: [
        "assets/news-2026-08-13-01.png",
        "assets/news-2026-08-13-02.jpeg",
        "assets/news-2026-08-13-03.png",
        "assets/news-2026-08-13-04.png",
        "assets/news-2026-08-13-05.png"
      ],
      mediaUrl: "assets/news-2026-08-13-01.png",
      link: "",
      local: false
    },
    {
      id: "shop-support-2026-08-13",
      type: "Photo",
      date: "2026-08-13",
      title: "Banahatti shops display support for the Praja Soudha demand",
      titleKn: "ಪ್ರಜಾಸೌಧ ಬೇಡಿಕೆಗೆ ಬನಹಟ್ಟಿ ಅಂಗಡಿಗಳ ಬೆಂಬಲ",
      text: "Shops and business establishments in Banahatti are displaying printed notices supporting the public demand for construction of the Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯ ವಿವಿಧ ಅಂಗಡಿಗಳು ಮತ್ತು ವ್ಯಾಪಾರ ಸಂಸ್ಥೆಗಳು ‘ಪ್ರಜಾಸೌಧ ನಮ್ಮ ಹಕ್ಕು’ ಎಂಬ ಬೇಡಿಕೆಗೆ ಬೆಂಬಲ ಸೂಚಿಸುವ ಮುದ್ರಿತ ಫಲಕಗಳನ್ನು ತಮ್ಮ ಅಂಗಡಿಗಳಲ್ಲಿ ಪ್ರದರ್ಶಿಸುತ್ತಿವೆ.",
      mediaKind: "gallery",
      mediaUrls: [
        "assets/praja-soudha-shop-support-2026-08-13-01.jpeg",
        "assets/praja-soudha-shop-support-2026-08-13-02.jpeg",
        "assets/praja-soudha-shop-support-2026-08-13-03.jpeg",
        "assets/praja-soudha-shop-support-2026-08-13-04.jpeg",
        "assets/praja-soudha-shop-support-2026-08-13-05.jpeg",
        "assets/praja-soudha-shop-support-2026-08-13-06.jpeg",
        "assets/praja-soudha-shop-support-2026-08-13-07.jpeg"
      ],
      mediaUrl: "assets/praja-soudha-shop-support-2026-08-13-01.jpeg",
      link: "",
      local: false
    },
    {
      id: "photos-2026-08-12",
      type: "Photo",
      date: "2026-08-12",
      title: "12 August 2026: Praja Soudha movement — Day 5",
      titleKn: "12 ಆಗಸ್ಟ್ 2026: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ — 5ನೇ ದಿನ",
      text: "Photographs from the fifth day of the ongoing Praja Soudha movement in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣ ಹೋರಾಟದ 5ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಬೆಂಬಲದ ಛಾಯಾಚಿತ್ರಗಳು.",
      mediaKind: "gallery",
      mediaUrls: [
        "assets/photo-2026-08-12-01.jpeg",
        "assets/photo-2026-08-12-02.jpeg",
        "assets/photo-2026-08-12-03.jpeg",
        "assets/photo-2026-08-12-04.jpeg"
      ],
      mediaUrl: "assets/photo-2026-08-12-01.jpeg",
      link: "",
      local: false
    },
    {
      id: "news-coverage-2026-08-12",
      type: "Paper Cut",
      date: "2026-08-12",
      title: "12 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn: "12 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text: "Today's selected newspaper coverage on the continuing Praja Soudha movement, relay Satyagraha and public support in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಮುಂದುವರಿದಿರುವ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ, ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಬೆಂಬಲದ ಕುರಿತು ಇಂದಿನ ಆಯ್ದ ಪತ್ರಿಕಾ ವರದಿಗಳು.",
      mediaKind: "gallery",
      mediaUrls: [
        "assets/news-2026-08-12-01.jpeg",
        "assets/news-2026-08-12-02.jpeg",
        "assets/news-2026-08-12-03.jpeg",
        "assets/news-2026-08-12-04.jpeg",
        "assets/news-2026-08-12-05.jpeg",
        "assets/news-2026-08-12-06.png",
        "assets/news-2026-08-12-07.jpeg",
        "assets/news-2026-08-12-08.jpeg",
        "assets/news-2026-08-12-09.jpeg",
        "assets/news-2026-08-12-10.jpeg",
        "assets/news-2026-08-12-11.jpeg",
        "assets/news-2026-08-12-12.jpeg"
      ],
      mediaUrl: "assets/news-2026-08-12-01.jpeg",
      link: "",
      local: false
    },
    {
      id: "youtube-update-2026-08-12",
      type: "Video",
      date: "2026-08-12",
      title: "Latest Praja Soudha movement video",
      titleKn: "ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಇತ್ತೀಚಿನ ವಿಡಿಯೋ",
      text: "Watch the latest Praja Soudha movement video.",
      textKn: "ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಇತ್ತೀಚಿನ ವಿಡಿಯೋವನ್ನು ವೀಕ್ಷಿಸಿ.",
      mediaKind: "video",
      mediaUrl: "https://youtu.be/T2xHaZty_p4?si=JPJJIVtEQRoEr22l",
      link: "https://youtu.be/T2xHaZty_p4?si=JPJJIVtEQRoEr22l",
      local: false
    },
    {
      id: "saradi-satyagraha-day-4-kuruhinashetti-11-08-2026",
      type: "Satyagraha",
      date: "2026-08-11",
      title: "4th Day Relay Hunger Satyagraha — Kuruhinashetti Community Extends Support",
      titleKn: "4ನೇ ದಿನದ ಸರದಿ ಉಪವಾಸ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಸಮಸ್ತ ಕುರುಹಿನಶೆಟ್ಟಿ ಸಮಾಜದ ಬೆಂಬಲ",
      text: "On the fourth day of the ongoing Praja Soudha construction movement in Banahatti, the entire Kuruhinashetti community of Banahatti extended its support.",
      textKn: "ಬನಹಟ್ಟಿ ನಗರದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣದ ಹೋರಾಟದ 4ನೇ ದಿನದ ಸರದಿ ಉಪವಾಸ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಬನಹಟ್ಟಿ ನಗರದ ಸಮಸ್ತ ಕುರುಹಿನಶೆಟ್ಟಿ ಸಮಾಜದ ವತಿಯಿಂದ ಬೆಂಬಲ ವ್ಯಕ್ತಪಡಿಸಲಾಯಿತು. 🙏",
      mediaKind: "image",
      mediaUrl: "assets/saradi-satyagraha-day-4-kuruhinashetti-11-08-2026.jpeg",
      link: "#satyagraha",
      local: false
    },
    {
      id: "news-2026-08-11-taluk-prajasoudha-support",
      type: "Paper Cut",
      date: "2026-08-11",
      title: "Support for the Taluk Praja Soudha movement",
      titleKn: "ತಾಲೂಕಾ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣ ಹೋರಾಟಕ್ಕೆ ವೈದ್ಯರ ಬಳಗ ಬೆಂಬಲ",
      text: "Newspaper coverage supporting the ongoing movement for construction of the Taluk Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ತಾಲೂಕಾ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕಾಗಿ ನಡೆಯುತ್ತಿರುವ ಹೋರಾಟಕ್ಕೆ ಬೆಂಬಲ ವ್ಯಕ್ತಪಡಿಸಿರುವ ಕುರಿತು ಪತ್ರಿಕಾ ವರದಿ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-11-taluk-prajasoudha-support.jpeg",
      link: "",
      local: false
    },
    {
      id: "whatsapp-1001-members-2026-08-11",
      type: "Community",
      date: "2026-08-11",
      title: "Praja Soudha movement WhatsApp group reaches 1,001 members",
      titleKn: "ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಸಮಿತಿಯ ವಾಟ್ಸಪ್ ಗುಂಪು 1001 ಸದಸ್ಯರನ್ನು ತಲುಪಿದೆ",
      text: "The Praja Soudha Horata Samiti WhatsApp group has reached 1,001 members. Heartfelt thanks to everyone for the continued support.",
      textKn: "ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಸಮಿತಿಯ ವಾಟ್ಸಪ್ ಗುಂಪಿನ ಸದಸ್ಯರ ಸಂಖ್ಯೆ 1001 ಕ್ಕೆ ತಲುಪಿದೆ 🙏 ತಮ್ಮೆಲ್ಲರ ಸಹಕಾರಕ್ಕಾಗಿ ಅನಂತ ಅನಂತ ಧನ್ಯವಾದಗಳು 🙏",
      mediaKind: "image",
      mediaUrl: "assets/whatsapp-1001-members-2026-08-11.png",
      link: "",
      local: false
    },
    {
      id: "news-coverage-2026-08-11",
      type: "Paper Cut",
      date: "2026-08-11",
      title: "11 August 2026 media coverage: third day of relay Satyagraha",
      titleKn: "11 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ: ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಮೂರನೇ ದಿನ",
      text: "Selected 11 August 2026 newspaper coverage related to the Praja Soudha movement and the third day of the relay Satyagraha.",
      textKn: "ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಮೂರನೇ ದಿನಕ್ಕೆ ಸಂಬಂಧಿಸಿದ 11 ಆಗಸ್ಟ್ 2026ರ ಆಯ್ದ ಪತ್ರಿಕಾ ವರದಿಗಳು.",
      mediaKind: "gallery",
      mediaUrls: [
        "assets/news-2026-08-11-third-day-01.jpeg",
        "assets/news-2026-08-11-support-01.png",
        "assets/news-2026-08-11-third-day-02.jpeg",
        "assets/news-2026-08-11-third-day-03.jpeg"
      ],
      mediaUrl: "assets/news-2026-08-11-third-day-01.jpeg",
      link: "",
      local: false
    },
    {
      id: "kadasiddeshwara-pooje-2026-08-10",
      type: "Community",
      date: "2026-08-10",
      title: "Today's pooja of Banahatti's revered deity Shri Kadasiddeshwara",
      titleKn: "ಬನಹಟ್ಟಿ ನಗರದ ಆರಾಧ್ಯ ದೈವ ಶ್ರೀ ಕಡಸಿದ್ದೇಶ್ವರರ ಇವತ್ತಿನ ಪೂಜೆ",
      text: "Pooja of Banahatti city's revered deity Shri Kadasiddeshwara — Monday, 10 August 2026.",
      textKn: "ಬನಹಟ್ಟಿ ನಗರದ ಆರಾಧ್ಯ ದೈವ ಶ್ರೀ ಕಡಸಿದ್ದೇಶ್ವರರ ಇವತ್ತಿನ ಪೂಜೆ — 10-08-2026 ಸೋಮವಾರ 🙏🙏",
      mediaKind: "image",
      mediaUrl: "assets/kadasiddeshwara-pooje-2026-08-10.png",
      link: "",
      local: false
    },
    {
      id: "satyagraha-day-3-2026-08-11",
      type: "Satyagraha",
      date: "2026-08-11",
      title: "Third day of relay Satyagraha receives support from Medhara and Buruda communities",
      titleKn: "ಮೂರನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಮೇಧಾರ ಮತ್ತು ಬುರುಡ ಸಮಾಜದ ಬೆಂಬಲ",
      text: "On the third day of the Praja Soudha relay Satyagraha, elders and members of the Medhara and Buruda communities participated and extended their support. Banahatti Nagara Abhivruddhi Samiti and Praja Soudha Horata Samiti expressed heartfelt thanks for their participation and support.",
      textKn: "ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಮೂರನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹದಲ್ಲಿ ಭಾಗಿಯಾಗಿ ಬೆಂಬಲ ಸೂಚಿಸಿದ ಮೇಧಾರ ಮತ್ತು ಬುರುಡ ಸಮಾಜದ ಹಿರಿಯರಿಗೆ ಬನಹಟ್ಟಿ ನಗರ ಅಭಿವೃದ್ಧಿ ಸಮಿತಿ ಹಾಗೂ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಸಮಿತಿಯಿಂದ ಹೃತ್ಪೂರ್ವಕ ಧನ್ಯವಾದಗಳು.",
      mediaKind: "image",
      mediaUrl: "assets/satyagraha-day-3-2026-08-11-01.jpeg",
      link: "",
      local: false
    },
    {
      id: "news-2026-08-10-01",
      type: "Paper Cut",
      date: "2026-08-10",
      title: "10 August newspaper coverage: Demand for Praja Soudha in Banahatti",
      titleKn: "10 ಆಗಸ್ಟ್ ಪತ್ರಿಕಾ ವರದಿ: ಬನಹಟ್ಟಿಯಲ್ಲೇ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ಆಗ್ರಹ",
      text: "The 10 August 2026 newspaper report covers the continuing public demand that the Taluk Praja Soudha be constructed in Banahatti.",
      textKn: "10 ಆಗಸ್ಟ್ 2026ರ ಈ ಪತ್ರಿಕಾ ವರದಿ ತಾಲೂಕು ಪ್ರಜಾಸೌಧವನ್ನು ಬನಹಟ್ಟಿಯಲ್ಲಿಯೇ ನಿರ್ಮಿಸಬೇಕು ಎಂಬ ಮುಂದುವರಿದ ಜನರ ಬೇಡಿಕೆಯನ್ನು ದಾಖಲಿಸಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-10-01.png",
      link: "",
      local: false
    },
    {
      id: "news-2026-08-10-02",
      type: "Paper Cut",
      date: "2026-08-10",
      title: "10 August newspaper coverage: Complete Banahatti bandh for Praja Soudha",
      titleKn: "10 ಆಗಸ್ಟ್ ಪತ್ರಿಕಾ ವರದಿ: ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಬನಹಟ್ಟಿ ಸಂಪೂರ್ಣ ಬಂದ್",
      text: "This 10 August 2026 report documents the complete Banahatti bandh and the ongoing movement demanding construction of the Praja Soudha in Banahatti.",
      textKn: "10 ಆಗಸ್ಟ್ 2026ರ ಈ ವರದಿ ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ನಡೆದ ಬನಹಟ್ಟಿ ಸಂಪೂರ್ಣ ಬಂದ್ ಹಾಗೂ ಬನಹಟ್ಟಿಯಲ್ಲೇ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ಆಗ್ರಹಿಸಿದ ಮುಂದುವರಿದ ಹೋರಾಟವನ್ನು ದಾಖಲಿಸಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-10-02.png",
      link: "",
      local: false
    },
    {
      id: "satyagraha-day-2-2026-08-10",
      type: "Satyagraha",
      date: "2026-08-10",
      title: "Second day of relay Satyagraha receives support from local Daiva Mandalis",
      titleKn: "ಎರಡನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಸ್ಥಳೀಯ ದೈವ ಮಂಡಳಿಗಳ ಬೆಂಬಲ",
      text: "On the second day of the relay Satyagraha, elders and members of Mangalwar Peth Hatagar Daiva Mandali and Somwar Peth Samasta Daiva Mandali participated and extended their support to the Praja Soudha movement. Banahatti Nagara Abhivruddhi Samiti and Praja Soudha Horata Samiti expressed heartfelt thanks for their support.",
      textKn: "ಇಂದು ಎರಡನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹದಲ್ಲಿ ಭಾಗಿಯಾಗಿ ಬೆಂಬಲ ಸೂಚಿಸಿದ ಮಂಗಳವಾರ ಪೇಟೆ ಹಟಗಾರ ದೈವ ಮಂಡಳಿ ಹಾಗೂ ಸೋಮವಾರ ಪೇಟೆ ಸಮಸ್ತ ದೈವ ಮಂಡಳಿ ಹಿರಿಯರಿಗೆ ಅನಂತ ಅನಂತ ಧನ್ಯವಾದಗಳು. ಬನಹಟ್ಟಿ ನಗರ ಅಭಿವೃದ್ಧಿ ಸಮಿತಿ ಹಾಗೂ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಸಮಿತಿ ಅವರ ಬೆಂಬಲಕ್ಕೆ ಹೃತ್ಪೂರ್ವಕ ಕೃತಜ್ಞತೆ ಸಲ್ಲಿಸಿದೆ.",
      mediaKind: "gallery",
      mediaUrls: [
        "assets/satyagraha-day-2-2026-08-10-01.jpeg",
        "assets/satyagraha-day-2-2026-08-10-02.jpeg",
        "assets/satyagraha-day-2-2026-08-10-03.jpeg",
        "assets/satyagraha-day-2-2026-08-10-04.jpeg"
      ],
      mediaUrl: "assets/satyagraha-day-2-2026-08-10-01.jpeg",
      link: "",
      local: false
    },
    {
      id: "sunday-news-2026-08-09-02",
      type: "Paper Cut",
      date: "2026-08-09",
      title: "Thousands participate in massive protest demanding Praja Soudha in Banahatti",
      titleKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧಕ್ಕೆ ಆಗ್ರಹಿಸಿ ಸಾವಿರಾರು ಜನರ ಬೃಹತ್ ಪ್ರತಿಭಟನೆ",
      text: "The report documents the large public protest, the bandh and widespread participation in support of constructing the Taluk Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ತಾಲೂಕು ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ಒತ್ತಾಯಿಸಿ ನಡೆದ ಬೃಹತ್ ಪ್ರತಿಭಟನೆ, ಬಂದ್ ಮತ್ತು ವ್ಯಾಪಕ ಜನಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ವರದಿ ದಾಖಲಿಸಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-09-sunday-02.jpeg",
      link: "",
      local: false
    },
    {
      id: "sunday-news-2026-08-09-viswas",
      type: "Paper Cut",
      date: "2026-08-09",
      title: "Vishwas: Banahatti comes to a standstill for Praja Soudha movement",
      titleKn: "ವಿಶ್ವಾಸ್: ಪ್ರಜಾಸೌಧ ಹೋರಾಟಕ್ಕೆ ಬನಹಟ್ಟಿ ಸ್ತಬ್ಧ",
      text: "Vishwas Kannada Daily reports widespread support for the complete Banahatti bandh and the public movement demanding the Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿ ಸಂಪೂರ್ಣ ಬಂದ್‌ಗೆ ದೊರೆತ ವ್ಯಾಪಕ ಬೆಂಬಲ ಹಾಗೂ ಬನಹಟ್ಟಿಯಲ್ಲೇ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಿಸಬೇಕು ಎಂಬ ಜನಹೋರಾಟವನ್ನು ವಿಶ್ವಾಸ್ ಕನ್ನಡ ದಿನಪತ್ರಿಕೆ ವರದಿ ಮಾಡಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-09-viswas.png",
      link: "",
      local: false
    },
    {
      id: "sunday-news-2026-08-09-04",
      type: "Paper Cut",
      date: "2026-08-09",
      title: "Banahatti bandh successful in support of Praja Soudha construction",
      titleKn: "ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣ: ಬನಹಟ್ಟಿ ಬಂದ್ ಯಶಸ್ವಿ",
      text: "The newspaper report highlights the successful bandh and the large gathering of citizens supporting construction of the Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ಬೆಂಬಲವಾಗಿ ನಡೆದ ಯಶಸ್ವಿ ಬಂದ್ ಮತ್ತು ದೊಡ್ಡ ಪ್ರಮಾಣದ ಜನಸಮಾವೇಶವನ್ನು ಈ ಪತ್ರಿಕಾ ವರದಿ ದಾಖಲಿಸಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-09-sunday-04.jpeg",
      link: "",
      local: false
    },
    {
      id: "sunday-news-2026-08-09-samyukta",
      type: "Paper Cut",
      date: "2026-08-09",
      title: "Samyukta Karnataka: Construct the Praja Soudha in Banahatti itself",
      titleKn: "ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ: ಬನಹಟ್ಟಿಯಲ್ಲೇ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣ ಮಾಡಿ",
      text: "Samyukta Karnataka reports the public demand, protest, bandh, participation of women and citizens, and the movement seeking construction of the Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲೇ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಿಸಬೇಕು ಎಂಬ ಜನರ ಬೇಡಿಕೆ, ಪ್ರತಿಭಟನೆ, ಬಂದ್ ಹಾಗೂ ಮಹಿಳೆಯರು ಮತ್ತು ನಾಗರಿಕರ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ ವರದಿ ಮಾಡಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-09-samyukta-karnataka.png",
      link: "",
      local: false
    },
    {
      id: "sunday-news-2026-08-09-kannada-prabha",
      type: "Paper Cut",
      date: "2026-08-09",
      title: "Kannada Prabha: Demand to construct Praja Soudha in Banahatti",
      titleKn: "ಕನ್ನಡಪ್ರಭ: ಬನಹಟ್ಟಿಯಲ್ಲೇ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ಆಗ್ರಹ",
      text: "Kannada Prabha, Bagalkote Edition, 9 August 2026, reports the public demand and participation in the Banahatti Praja Soudha movement.",
      textKn: "ಕನ್ನಡಪ್ರಭ ಬಾಗಲಕೋಟೆ ಆವೃತ್ತಿ, 9 ಆಗಸ್ಟ್ 2026, ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಜನರ ಬೇಡಿಕೆ ಮತ್ತು ವ್ಯಾಪಕ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ವರದಿ ಮಾಡಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-09-kannada-prabha.jpeg",
      link: "",
      local: false
    },
    {
      id: "sunday-news-2026-08-09-udayavani",
      type: "Paper Cut",
      date: "2026-08-09",
      title: "Udayavani: Banahatti bandh for Praja Soudha",
      titleKn: "ಉದಯವಾಣಿ: ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಬನಹಟ್ಟಿ ಬಂದ್",
      text: "Udayavani reports the bandh, large public gathering and participation in the movement demanding construction of the Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ಒತ್ತಾಯಿಸಿ ನಡೆದ ಬಂದ್, ಬೃಹತ್ ಜನಸಮಾವೇಶ ಮತ್ತು ಹೋರಾಟದ ಜನಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಉದಯವಾಣಿ ವರದಿ ಮಾಡಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/news-2026-08-09-udayavani.jpeg",
      link: "",
      local: false
    },
    {
      id: "paper-cut-2",
      type: "Paper Cut",
      date: "2026-08-07",
      title: "Newspaper coverage: Banahatti bandh for Praja Soudha demand",
      titleKn: "ಪ್ರಜಾ ಸೌಧ ಬೇಡಿಕೆಗೆ ಬನಹಟ್ಟಿ ಬಂದ್ — ಪತ್ರಿಕಾ ವರದಿ",
      text: "This newspaper clipping reports on the Banahatti Praja Soudha movement, the call for a bandh and the public campaign demanding that the Praja Soudha be constructed in Banahatti. The clipping is published here as part of the movement's media record.",
      textKn: "ಈ ಪತ್ರಿಕಾ ಕತ್ತರಣೆಯಲ್ಲಿ ಬನಹಟ್ಟಿ ಪ್ರಜಾ ಸೌಧ ಹೋರಾಟ, ಬಂದ್ ಕರೆ ಮತ್ತು ಪ್ರಜಾ ಸೌಧವನ್ನು ಬನಹಟ್ಟಿಯಲ್ಲೇ ನಿರ್ಮಿಸಬೇಕು ಎಂಬ ಜನರ ಬೇಡಿಕೆಯ ಬಗ್ಗೆ ವರದಿ ಮಾಡಲಾಗಿದೆ. ಹೋರಾಟದ ಮಾಧ್ಯಮ ದಾಖಲೆಯಾಗಿ ಇದನ್ನು ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/praja-soudha-paper-cut-2.jpg",
      link: "",
      local: false
    },
    {
      id: "whatsapp-status-1",
      type: "Announcement",
      date: "2026-08-06",
      title: "WhatsApp group shows town-wide support for the movement",
      titleKn: "ವಾಟ್ಸ್ಆಪ್ ಗುಂಪಿನಲ್ಲಿ ಪಟ್ಟಣದ ವ್ಯಾಪಕ ಬೆಂಬಲ",
      text: "The Banahatti Praja Soudha Horata Samiti's group discussion reflects strong participation from citizens, traders, youth volunteers, social organisations, senior citizens, media representatives and public representatives. Members have appealed for a peaceful, democratic and non-political campaign and pledged to continue until the demand is fulfilled.",
      textKn: "ಬನಹಟ್ಟಿ ಪ್ರಜಾ ಸೌಧ ಹೋರಾಟ ಸಮಿತಿಯ ವಾಟ್ಸ್ಆಪ್ ಚರ್ಚೆಯಲ್ಲಿ ನಾಗರಿಕರು, ವ್ಯಾಪಾರಿಗಳು, ಯುವ ಸ್ವಯಂಸೇವಕರು, ಸಾಮಾಜಿಕ ಸಂಘಟನೆಗಳು, ಹಿರಿಯ ನಾಗರಿಕರು, ಮಾಧ್ಯಮ ಪ್ರತಿನಿಧಿಗಳು ಮತ್ತು ಜನಪ್ರತಿನಿಧಿಗಳ ಬೆಂಬಲ ಸ್ಪಷ್ಟವಾಗಿದೆ. ಹೋರಾಟವನ್ನು ಶಾಂತಿಯುತ, ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಮತ್ತು ಪಕ್ಷಾತೀತವಾಗಿ ನಡೆಸಿ, ಬೇಡಿಕೆ ಈಡೇರುವವರೆಗೆ ಮುಂದುವರಿಸಲು ಸದಸ್ಯರು ಕರೆ ನೀಡಿದ್ದಾರೆ.",
      mediaKind: "image",
      mediaUrl: "assets/whatsapp-town-support.png",
      link: "",
      local: false
    },
    {
      id: "official-news-1",
      type: "Paper Cut",
      date: "2026-08-06",
      title: "Samyukta Karnataka reports major Praja Soudha struggle",
      titleKn: "ಬನಹಟ್ಟಿಯ ಪ್ರಜಾ ಸೌಧ ಹೋರಾಟಕ್ಕೆ ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ ವರದಿ",
      text: "The report states that Banahatti has called for a complete bandh on Saturday. A mega protest procession will begin at 9:00 AM from Shri Kadasiddeshwar Temple, travel through the town’s main roads and reach Chennamma Circle, where the Saradi hunger Satyagraha will begin.",
      textKn: "ವರದಿಯ ಪ್ರಕಾರ ಶನಿವಾರ ಬನಹಟ್ಟಿ ಸಂಪೂರ್ಣ ಬಂದ್‌ಗೆ ಕರೆ ನೀಡಲಾಗಿದೆ. ಬೆಳಿಗ್ಗೆ 9:00ಕ್ಕೆ ಶ್ರೀ ಕಡಸಿದ್ದೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ ಬೃಹತ್ ಪ್ರತಿಭಟನಾ ಮೆರವಣಿಗೆ ಆರಂಭವಾಗಿ ಪಟ್ಟಣದ ಮುಖ್ಯ ರಸ್ತೆಗಳಲ್ಲಿ ಸಾಗುತ್ತಾ ಚೆನ್ನಮ್ಮ ವೃತ್ತ ತಲುಪಲಿದೆ. ಅಲ್ಲಿ ಸರದಿ ಉಪವಾಸ ಸತ್ಯಾಗ್ರಹ ಆರಂಭವಾಗಲಿದೆ.",
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
      titleKn: "ಪ್ರಜಾ ಸೌಧ ಬೆಂಬಲಕ್ಕೆ ಸಂಪೂರ್ಣ ಬನಹಟ್ಟಿ ಬಂದ್",
      text: "Shops, weaving industries, banks, private and public transport, school vehicles, the weekly market and most commercial and public activities are expected to support the bandh. Ambulance and fire-service movement will be permitted.",
      textKn: "ಅಂಗಡಿಗಳು, ನೇಕಾರಿಕೆ ಉದ್ಯಮಗಳು, ಬ್ಯಾಂಕುಗಳು, ಖಾಸಗಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆ, ಶಾಲಾ ವಾಹನಗಳು, ವಾರದ ಸಂತೆ ಹಾಗೂ ಬಹುತೇಕ ವ್ಯಾಪಾರ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಚಟುವಟಿಕೆಗಳು ಬಂದ್‌ಗೆ ಬೆಂಬಲ ನೀಡುವ ನಿರೀಕ್ಷೆಯಿದೆ. ಆಂಬ್ಯುಲೆನ್ಸ್ ಮತ್ತು ಅಗ್ನಿಶಾಮಕ ವಾಹನಗಳಿಗೆ ಸಂಚಾರಕ್ಕೆ ಅವಕಾಶ ಇರುತ್ತದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/banahatti-bandh-visual.png",
      link: "https://samyuktakarnataka.in/districts/baglkot/a-major-struggle-for-the-construction-of-the-prajasoudha-in-banahatti-itself/",
      local: false
    },
    {
      id: "official-2",
      type: "Announcement",
      date: "2026-08-06",
      title: "Mega procession route and time announced",
      titleKn: "ಬೃಹತ್ ಮೆರವಣಿಗೆಯ ಸಮಯ ಮತ್ತು ಮಾರ್ಗ ಪ್ರಕಟಣೆ",
      text: "The peaceful procession is scheduled for Saturday, 8 August 2026 at 9:00 AM. It will start from Shri Kadasiddeshwar Temple, pass through the main roads of Banahatti and conclude at Chennamma Circle.",
      textKn: "ಶಾಂತಿಯುತ ಬೃಹತ್ ಮೆರವಣಿಗೆ ಶನಿವಾರ, 8 ಆಗಸ್ಟ್ 2026 ರಂದು ಬೆಳಿಗ್ಗೆ 9:00ಕ್ಕೆ ನಡೆಯಲಿದೆ. ಇದು ಶ್ರೀ ಕಡಸಿದ್ದೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ ಆರಂಭವಾಗಿ ಬನಹಟ್ಟಿಯ ಮುಖ್ಯ ರಸ್ತೆಗಳಲ್ಲಿ ಸಾಗುತ್ತಾ ಚೆನ್ನಮ್ಮ ವೃತ್ತದಲ್ಲಿ ಮುಕ್ತಾಯವಾಗಲಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/mega-procession-route.png",
      link: "https://samyuktakarnataka.in/districts/baglkot/a-major-struggle-for-the-construction-of-the-prajasoudha-in-banahatti-itself/",
      local: false
    },
    {
      id: "official-3",
      type: "Announcement",
      date: "2026-08-06",
      title: "Saradi hunger Satyagraha begins at Chennamma Circle",
      titleKn: "ಚೆನ್ನಮ್ಮ ವೃತ್ತದಲ್ಲಿ ಸರದಿ ಉಪವಾಸ ಸತ್ಯಾಗ್ರಹ ಆರಂಭ",
      text: "After the procession, leaders of different organisations, citizens and movement participants will formally begin the Saradi hunger Satyagraha. The committee says the struggle will continue until the Praja Soudha is constructed in Banahatti.",
      textKn: "ಮೆರವಣಿಗೆಯ ನಂತರ ವಿವಿಧ ಸಂಘಟನೆಗಳ ಮುಖಂಡರು, ನಾಗರಿಕರು ಮತ್ತು ಹೋರಾಟಗಾರರು ಸರದಿ ಉಪವಾಸ ಸತ್ಯಾಗ್ರಹವನ್ನು ಅಧಿಕೃತವಾಗಿ ಆರಂಭಿಸಲಿದ್ದಾರೆ. ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾ ಸೌಧ ನಿರ್ಮಾಣವಾಗುವವರೆಗೆ ಹೋರಾಟ ಮುಂದುವರಿಯುತ್ತದೆ ಎಂದು ಸಮಿತಿ ತಿಳಿಸಿದೆ.",
      mediaKind: "image",
      mediaUrl: "assets/saradi-satyagraha-stage.png",
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

function setupCommitteeAccessTrigger() {
  const trigger = $("#committeeAccessTrigger");
  const access = $("#editorAccess");
  if (!trigger || !access) return;
  trigger.addEventListener("click", () => {
    access.hidden = !access.hidden;
    if (!access.hidden) {
      access.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => $("#googleSignInButton")?.focus(), 350);
    }
  });
}


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

  const eyebrow = $("#editorAccessEyebrow");
  const title = $("#editorAccessTitle");
  const message = $("#editorAccessMessage");

  if (authorised) {
    $("#signedInEmail").textContent = user.email;
    $("#authStatus").textContent = "";
    eyebrow.textContent = "ಅನುಮತಿಸಿದ ಸಮಿತಿ ಪ್ರವೇಶ · Authorised access";
    title.textContent = "ಸಮಿತಿ ಸಂಪಾದಕ ತೆರೆಯಲಾಗಿದೆ · Editor unlocked";
    message.textContent = "ನೀವು ಸುರಕ್ಷಿತವಾಗಿ ಲಾಗಿನ್ ಆಗಿದ್ದೀರಿ. ಕೆಳಗಿನ ಸಂಪಾದಕದಿಂದ ಚಿತ್ರ, ವೀಡಿಯೊ ಅಥವಾ ಹೋರಾಟದ ಮಾಹಿತಿ ಪ್ರಕಟಿಸಿ. · You are securely signed in.";
  } else {
    $("#signedInEmail").textContent = "";
    eyebrow.textContent = "ಸಮಿತಿ ಪ್ರವೇಶ · Committee access";
    title.textContent = "ಸಮಿತಿ ಸಂಪಾದಕ · Committee editor";
    message.textContent = "ಪೋಸ್ಟ್ ಮಾಡಲು ಅನುಮತಿಸಿದ Google ಖಾತೆಯಿಂದ ಲಾಗಿನ್ ಮಾಡಿ. · Sign in with the authorised Google account.";
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
  const filterLabels = { All: "All · ಎಲ್ಲ", Announcement: "Announcement · ಪ್ರಕಟಣೆ", Photo: "Photo · ಚಿತ್ರ", Video: "Video · ವೀಡಿಯೊ", "Paper Cut": "Paper Cut · ಪತ್ರಿಕಾ ಕತ್ತರಣೆ", Instagram: "Instagram", Facebook: "Facebook" };
  const filter = $("#updatesFilter");
  filter.replaceChildren();
  types.forEach(type => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-btn${activeFilter === type ? " active" : ""}`;
    button.textContent = filterLabels[type] || type;
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
    const titleKn = document.createElement("div");
    titleKn.className = "post-title-kn";
    titleKn.textContent = post.titleKn || "";
    titleKn.hidden = !post.titleKn;
    const text = document.createElement("p");
    text.textContent = post.text;
    const textKn = document.createElement("p");
    textKn.className = "post-text-kn";
    textKn.textContent = post.textKn || "";
    textKn.hidden = !post.textKn;

    const actions = document.createElement("div");
    actions.className = "post-actions";
    const readMore = document.createElement("span");
    readMore.className = "read-more";
    readMore.textContent = post.mediaKind === "video" ? "Watch video · ವೀಡಿಯೊ ನೋಡಿ →" : "View update · ಮಾಹಿತಿ ನೋಡಿ →";
    actions.append(readMore);

    body.append(meta, titleKn, title, textKn, text, actions);
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
  const modalTitle = $("#modalTitle");
  let modalTitleKn = $("#modalTitleKn");
  if (!modalTitleKn) {
    modalTitleKn = document.createElement("div");
    modalTitleKn.id = "modalTitleKn";
    modalTitleKn.className = "post-title-kn";
    modalTitle.insertAdjacentElement("beforebegin", modalTitleKn);
  }
  modalTitleKn.textContent = post.titleKn || "";
  modalTitleKn.hidden = !post.titleKn;
  $("#modalText").textContent = post.text;
  const modalText = $("#modalText");
  let modalTextKn = $("#modalTextKn");
  if (!modalTextKn) {
    modalTextKn = document.createElement("p");
    modalTextKn.id = "modalTextKn";
    modalTextKn.className = "post-text-kn";
    modalText.insertAdjacentElement("beforebegin", modalTextKn);
  }
  modalTextKn.textContent = post.textKn || "";
  modalTextKn.hidden = !post.textKn;
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
  const shareText = encodeURIComponent("ಬನಹಟ್ಟಿಗೆ ಪ್ರಜಾ ಸೌಧ ಬೇಕು. ಶನಿವಾರ, 8 ಆಗಸ್ಟ್ 2026: ಬೃಹತ್ ಮೆರವಣಿಗೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ. Banahatti needs its Praja Soudha. Please follow official committee announcements.");
  $("#shareMovement").href = `https://wa.me/?text=${shareText}`;
  $("#joinWhatsApp").href = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent("I would like to participate in the Banahatti Praja Soudha movement. ಬನಹಟ್ಟಿ ಪ್ರಜಾ ಸೌಧ ಹೋರಾಟದಲ್ಲಿ ಭಾಗವಹಿಸಲು ಇಷ್ಟಪಡುತ್ತೇನೆ. ದಯವಿಟ್ಟು ಅಧಿಕೃತ ಮೆರವಣಿಗೆ ಮತ್ತು ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಮಾಹಿತಿಯನ್ನು ಹಂಚಿ.")}`;
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
  await setupCommitteeAccessTrigger();
  setupAuthentication();

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
