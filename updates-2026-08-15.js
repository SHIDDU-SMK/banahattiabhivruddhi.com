// Banahatti Abhivruddhi — dated content update: 15 Aug 2026
(() => {
  const NEWS15 = [
    "assets/news-2026-08-15-01-v4.webp",
    "assets/news-2026-08-15-02-v4.webp"
  ];
  const PANJINA14 = [
    "assets/panjina-01-v8.webp",
    "assets/panjina-02-v8.webp",
    "assets/panjina-03-v8.webp",
    "assets/panjina-04-v8.webp",
    "assets/panjina-05-v8.webp",
    "assets/panjina-06-v8.webp"
  ];

  const NEW_POSTS = [
    {
      id: "news-coverage-2026-08-15",
      type: "Paper Cut",
      date: "2026-08-15",
      title: "15 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn: "15 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text: "Newspaper reports dated 15 August 2026 cover the continuing Banahatti Praja Soudha movement and relay Satyagraha.",
      textKn: "15 ಆಗಸ್ಟ್ 2026ರ ಪತ್ರಿಕಾ ವರದಿಗಳು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣದ ಬೇಡಿಕೆ ಮತ್ತು ಮುಂದುವರಿದ ಸರದಿ ಸತ್ಯಾಗ್ರಹವನ್ನು ದಾಖಲಿಸುತ್ತವೆ.",
      mediaKind: "gallery",
      mediaUrls: NEWS15,
      mediaUrl: NEWS15[0],
      link: "",
      local: false,
      createdAt: 6
    },
    {
      id: "ac-tahasildar-visit-2026-08-14",
      type: "Photo",
      date: "2026-08-14",
      title: "AC and Tahasildar visit the relay Satyagraha stage",
      titleKn: "14 ಆಗಸ್ಟ್ 2026: ಎಸಿ ಮತ್ತು ತಹಶೀಲ್ದಾರ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಸ್ಥಳಕ್ಕೆ ಭೇಟಿ",
      text: "Photograph from the 14 August visit of the AC and Tahasildar to the Banahatti Praja Soudha relay Satyagraha stage.",
      textKn: "14 ಆಗಸ್ಟ್ 2026ರಂದು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ವೇದಿಕೆಗೆ ಎಸಿ ಮತ್ತು ತಹಶೀಲ್ದಾರ್ ಭೇಟಿ ನೀಡಿದ ಸಂದರ್ಭದ ಚಿತ್ರ.",
      mediaKind: "image",
      mediaUrl: "assets/ac-tahasildar-visit-2026-08-14-v4.webp",
      link: "#satyagraha",
      local: false,
      createdAt: 5
    },
    {
      id: "panjina-meranige-2026-08-14",
      type: "Photo",
      date: "2026-08-14",
      title: "14 August 2026 Panjina Meranige — torch procession",
      titleKn: "14 ಆಗಸ್ಟ್ 2026: ಪಂಜಿನ ಮೆರವಣಿಗೆ",
      text: "Scenes from the torch procession held in Banahatti on the evening of 14 August 2026 as part of the Praja Soudha movement and Independence Day programme.",
      textKn: "14 ಆಗಸ್ಟ್ 2026ರ ಸಂಜೆ ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ಅಂಗವಾಗಿ ನಡೆದ ಪಂಜಿನ ಮೆರವಣಿಗೆಯ ದೃಶ್ಯಗಳು.",
      mediaKind: "gallery",
      mediaUrls: PANJINA14,
      mediaUrl: PANJINA14[0],
      link: "#updates",
      local: false,
      createdAt: 4
    }
  ];

  if (typeof siteData !== "undefined" && Array.isArray(siteData.initialPosts)) {
    const ids = new Set(siteData.initialPosts.map(post => post.id));
    NEW_POSTS.slice().reverse().forEach(post => {
      if (!ids.has(post.id)) siteData.initialPosts.unshift(post);
    });
    siteData.ticker = "15 ಆಗಸ್ಟ್ 2026 · ಇಂದಿನ ಪತ್ರಿಕೆಗಳಲ್ಲಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ವರದಿಗಳು. 14 ಆಗಸ್ಟ್ ಪಂಜಿನ ಮೆರವಣಿಗೆ ಮತ್ತು ಎಸಿ–ತಹಶೀಲ್ದಾರ್ ಭೇಟಿ ಚಿತ್ರಗಳೂ ಸೇರಿಸಲಾಗಿದೆ. · 15 August 2026 · New newspaper coverage added along with 14 August torch procession and AC–Tahasildar visit photos.";
  }

  function updateTodayNews() {
    const heading = document.querySelector(".today-updates-head h2");
    const card = document.querySelector(".today-update-card:not(.today-video-card)");
    if (heading) heading.textContent = "15 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು";
    if (card) {
      card.href = "#updates";
      const img = card.querySelector("img");
      const text = card.querySelector("span");
      if (img) {
        img.src = NEWS15[0];
        img.alt = "15 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ";
      }
      if (text) text.textContent = "15 ಆಗಸ್ಟ್ ಪತ್ರಿಕಾ ವರದಿಗಳು · 15 August news coverage";
    }
  }

  function boot() {
    updateTodayNews();
    if (typeof renderFilters === "function" && typeof renderPosts === "function") {
      renderFilters();
      renderPosts();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
