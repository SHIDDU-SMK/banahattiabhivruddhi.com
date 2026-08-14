// Banahatti Abhivruddhi — dated content update: 14 Aug 2026
(() => {
  const NEW_POSTS = [
    {
      id: "news-coverage-2026-08-14",
      type: "Paper Cut",
      date: "2026-08-14",
      title: "14 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn: "14 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text: "Selected newspaper coverage dated 14 August 2026 records continuing public support for the Banahatti Praja Soudha movement, including support from auto drivers and community organisations.",
      textKn: "14 ಆಗಸ್ಟ್ 2026ರ ಆಯ್ದ ಪತ್ರಿಕಾ ವರದಿಗಳು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟಕ್ಕೆ ಮುಂದುವರಿದ ಜನಬೆಂಬಲವನ್ನು ದಾಖಲಿಸುತ್ತವೆ. ಆಟೋ ಚಾಲಕರು ಹಾಗೂ ವಿವಿಧ ಸಮಾಜ-ಸಂಘಟನೆಗಳ ಬೆಂಬಲವೂ ವರದಿಯಾಗಿದೆ.",
      mediaKind: "gallery",
      mediaUrls: [
        "assets/news-2026-08-14-kannadaprabha-01.webp",
        "assets/news-2026-08-14-02.webp",
        "assets/news-2026-08-14-03.webp",
        "assets/news-2026-08-14-present-politics.webp",
        "assets/news-2026-08-14-05.webp"
      ],
      mediaUrl: "assets/news-2026-08-14-kannadaprabha-01.webp",
      link: "",
      local: false,
      createdAt: 2
    },
    {
      id: "public-gathering-2026-08-13",
      type: "Photo",
      date: "2026-08-13",
      title: "13 August 2026: Public gathering in support of the Praja Soudha movement",
      titleKn: "13 ಆಗಸ್ಟ್ 2026: ಪ್ರಜಾಸೌಧ ಹೋರಾಟಕ್ಕೆ ಸಾರ್ವಜನಿಕ ಬೆಂಬಲದ ಸಭೆ",
      text: "A large public gathering in Banahatti during the continuing Praja Soudha movement.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಮುಂದುವರಿದಿರುವ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಸಂದರ್ಭದಲ್ಲಿ ನಡೆದ ದೊಡ್ಡ ಸಾರ್ವಜನಿಕ ಸಭೆಯ ದೃಶ್ಯ.",
      mediaKind: "image",
      mediaUrl: "assets/photo-public-gathering-2026-08-13.webp",
      link: "#satyagraha",
      local: false,
      createdAt: 1
    }
  ];

  if (typeof siteData !== "undefined" && Array.isArray(siteData.initialPosts)) {
    const ids = new Set(siteData.initialPosts.map(post => post.id));
    NEW_POSTS.slice().reverse().forEach(post => {
      if (!ids.has(post.id)) siteData.initialPosts.unshift(post);
    });

    const shop = siteData.initialPosts.find(post => post.id === "shop-support-2026-08-13");
    if (shop && Array.isArray(shop.mediaUrls) && shop.mediaUrls.length > 6) {
      shop.mediaUrls = shop.mediaUrls.slice(0, 6);
    }

    siteData.ticker =
      "14 ಆಗಸ್ಟ್ 2026 · ಪ್ರಜಾಸೌಧ ಹೋರಾಟಕ್ಕೆ ಆಟೋ ಚಾಲಕರು ಮತ್ತು ವಿವಿಧ ಸಮಾಜ-ಸಂಘಟನೆಗಳ ಬೆಂಬಲ ಮುಂದುವರಿದಿದೆ; ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು ನವೀಕರಣಗಳಲ್ಲಿ ಲಭ್ಯ. · 14 August 2026 · Public support for the Praja Soudha movement continues; today's newspaper coverage is available in Updates.";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".today-updates-head h2");
    const card = document.querySelector(".today-update-card:not(.today-video-card)");
    if (heading) heading.textContent = "14 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು";
    if (card) {
      card.href = "#updates";
      const img = card.querySelector("img");
      const text = card.querySelector("span");
      if (img) {
        img.src = "assets/news-2026-08-14-kannadaprabha-01.webp";
        img.alt = "14 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ";
      }
      if (text) text.textContent = "14 ಆಗಸ್ಟ್ ಪತ್ರಿಕಾ ವರದಿಗಳು · 14 August news coverage";
    }

    const saradiImg = document.querySelector(".today-saradi-card img");
    const saradiTitle = document.querySelector(".today-saradi-copy h2");
    const saradiText = document.querySelector(".today-saradi-copy p");
    if (saradiImg) {
      saradiImg.src = "assets/photo-public-gathering-2026-08-13.webp";
      saradiImg.alt = "13 ಆಗಸ್ಟ್ 2026 ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಸಾರ್ವಜನಿಕ ಸಭೆ";
    }
    if (saradiTitle) saradiTitle.textContent = "13 ಆಗಸ್ಟ್ — ಸಾರ್ವಜನಿಕ ಬೆಂಬಲದ ಸಭೆ";
    if (saradiText) saradiText.textContent =
      "ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಸಂದರ್ಭದಲ್ಲಿ ಬನಹಟ್ಟಿಯಲ್ಲಿ ನಡೆದ ದೊಡ್ಡ ಸಾರ್ವಜನಿಕ ಸಭೆಯ ದೃಶ್ಯ.";

    if (typeof renderFilters === "function" && typeof renderPosts === "function") {
      renderFilters();
      renderPosts();
    }
  });
})();
