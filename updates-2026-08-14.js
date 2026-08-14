// Banahatti Abhivruddhi — dated content update: 14 Aug 2026
(() => {
  const FEATURED_EVENT_IMAGE = "assets/independence-day-praja-soudha-march-2026-08-14.jpeg";

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
      "14 ಆಗಸ್ಟ್ 2026 · ಸಂಜೆ 6 ಗಂಟೆಗೆ ಚೆನ್ನಮ್ಮ ವೃತ್ತದಿಂದ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಸಮಿತಿಯ ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ವಿಶೇಷ ಪಂಜಿನ ಮೆರವಣಿಗೆ. · 14 August 2026 · Independence Day special torch procession from Chennamma Circle at 6 PM; newspaper coverage is also available in Updates.";
  }

  function insertFeaturedEvent() {
    if (document.getElementById("featured-independence-event")) return;

    const main = document.querySelector("main#main");
    if (!main) return;

    const section = document.createElement("section");
    section.id = "featured-independence-event";
    section.className = "featured-event featured-event-pending";
    section.setAttribute("aria-labelledby", "featuredEventTitle");
    section.innerHTML = `
      <div class="container">
        <div class="featured-event-head">
          <span class="featured-event-badge">ಇಂದಿನ ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮ · Featured Event</span>
          <div>
            <h1 id="featuredEventTitle">ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ವಿಶೇಷ ಪಂಜಿನ ಮೆರವಣಿಗೆ</h1>
            <p>14 ಆಗಸ್ಟ್ · ಸಂಜೆ 6:00 · ಚೆನ್ನಮ್ಮ ವೃತ್ತದಿಂದ</p>
          </div>
        </div>
        <a class="featured-event-poster" href="${FEATURED_EVENT_IMAGE}" target="_blank" rel="noopener" aria-label="ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ವಿಶೇಷ ಪಂಜಿನ ಮೆರವಣಿಗೆ ಪ್ರಕಟಣೆಯನ್ನು ಪೂರ್ಣ ಗಾತ್ರದಲ್ಲಿ ನೋಡಿ">
          <img src="${FEATURED_EVENT_IMAGE}" alt="14 ಆಗಸ್ಟ್ ಸಂಜೆ 6 ಗಂಟೆಗೆ ಚೆನ್ನಮ್ಮ ವೃತ್ತದಿಂದ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಸಮಿತಿಯ ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ವಿಶೇಷ ಪಂಜಿನ ಮೆರವಣಿಗೆ ಮತ್ತು 15 ಆಗಸ್ಟ್ ಧ್ವಜಾರೋಹಣ ಕಾರ್ಯಕ್ರಮದ ಪ್ರಕಟಣೆ" fetchpriority="high" />
        </a>
        <div class="featured-event-footer">
          <strong>ಬನಹಟ್ಟಿ–ಹೊಸೂರು–ರಾಮಪುರ ಹಾಗೂ ಸುತ್ತಲಿನ ಗ್ರಾಮಗಳ ಸಮಸ್ತ ಜನತೆಗೆ ಪಾಲ್ಗೊಳ್ಳಲು ಮನವಿ.</strong>
          <span>ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ಸಂಭ್ರಮದೊಂದಿಗೆ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಒಗ್ಗಟ್ಟಿನ ಸಂದೇಶ.</span>
        </div>
      </div>`;

    const img = section.querySelector("img");
    img.addEventListener("load", () => {
      section.classList.remove("featured-event-pending");
      section.classList.add("featured-event-ready");
    });
    img.addEventListener("error", () => section.remove());

    main.insertBefore(section, main.firstChild);
  }

  document.addEventListener("DOMContentLoaded", () => {
    insertFeaturedEvent();

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
