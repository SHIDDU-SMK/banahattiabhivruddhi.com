// Banahatti Abhivruddhi — dated content update: 16 Aug 2026
(() => {
  const NEWS16 = [
    "assets/news-2026-08-16-panjina-meravanige.webp"
  ];

  const NEW_POSTS = [
    {
      id: "news-coverage-2026-08-16",
      type: "Paper Cut",
      date: "2026-08-16",
      title: "16 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn: "16 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text: "Newspaper coverage dated 16 August 2026 on the Banahatti Praja Soudha movement, including the Panjina Meravanige report.",
      textKn: "16 ಆಗಸ್ಟ್ 2026ರ ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಪತ್ರಿಕಾ ವರದಿ — ಪಂಜಿನ ಮೆರವಣಿಗೆ ವರದಿಯೊಂದಿಗೆ.",
      mediaKind: "gallery",
      mediaUrls: NEWS16,
      mediaUrl: NEWS16[0],
      link: "",
      local: false,
      createdAt: 7
    }
  ];

  if (typeof siteData !== "undefined" && Array.isArray(siteData.initialPosts)) {
    const ids = new Set(siteData.initialPosts.map(post => post.id));
    NEW_POSTS.slice().reverse().forEach(post => {
      if (!ids.has(post.id)) siteData.initialPosts.unshift(post);
    });
    siteData.ticker = "16 ಆಗಸ್ಟ್ 2026 · ಇಂದಿನ ಪತ್ರಿಕೆಯಲ್ಲಿ ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಪಂಜಿನ ಮೆರವಣಿಗೆ ವರದಿ ಸೇರಿಸಲಾಗಿದೆ. · 16 August 2026 · Today's newspaper coverage of the Banahatti Praja Soudha movement and Panjina Meravanige has been added.";
  }

  function updateTodayNews() {
    const heading = document.querySelector(".today-updates-head h2");
    const card = document.querySelector(".today-update-card:not(.today-video-card)");
    if (heading) heading.textContent = "16 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು";
    if (card) {
      card.href = "#updates";
      const img = card.querySelector("img");
      const text = card.querySelector("span");
      if (img) {
        img.src = NEWS16[0];
        img.alt = "16 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ";
      }
      if (text) text.textContent = "16 ಆಗಸ್ಟ್ ಪತ್ರಿಕಾ ವರದಿಗಳು · 16 August news coverage";
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
