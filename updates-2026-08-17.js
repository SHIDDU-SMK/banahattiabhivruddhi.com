// Banahatti Abhivruddhi — dated content update: 17 Aug 2026
(() => {
  const NEWS17 = [
    "assets/news-2026-08-17-samyukta-karnataka.webp?v=20260817-5",
    "assets/news-2026-08-17-samyukta-karnataka-2.webp?v=20260817-5"
  ];
  const POST17 = {
    id: "news-coverage-2026-08-17",
    type: "Paper Cut",
    date: "2026-08-17",
    title: "17 August 2026 newspaper coverage: Praja Soudha movement",
    titleKn: "17 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಹೋರಾಟ ತೀವ್ರ",
    text: "Two newspaper reports dated 17 August 2026 cover the continuing relay Satyagraha and the campaign demanding construction of the Praja Soudha in Banahatti.",
    textKn: "17 ಆಗಸ್ಟ್ 2026ರ ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳು ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕಾಗಿ ನಡೆಯುತ್ತಿರುವ ಹೋರಾಟವನ್ನು ದಾಖಲಿಸುತ್ತವೆ.",
    mediaKind: "gallery",
    mediaUrls: NEWS17,
    mediaUrl: NEWS17[0],
    link: "",
    local: false,
    createdAt: 11
  };

  if (typeof siteData !== "undefined" && Array.isArray(siteData.initialPosts)) {
    const existing = siteData.initialPosts.find(post => post.id === POST17.id);
    if (existing) Object.assign(existing, POST17);
    else siteData.initialPosts.unshift(POST17);
    siteData.ticker = "17 ಆಗಸ್ಟ್ 2026 · ಇಂದಿನ ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳು ಸೇರಿಸಲಾಗಿದೆ. · 17 August 2026 · Two newspaper reports on the Praja Soudha movement have been added.";
  }

  function featureNews17() {
    const main = document.querySelector("main#main");
    if (!main) return;
    document.getElementById("featured-news-17")?.remove();
    const oldFeatured = document.getElementById("featured-news-16");
    const section = document.createElement("section");
    section.id = "featured-news-17";
    section.className = "today-updates";
    section.innerHTML = `
      <div class="container">
        <div class="today-updates-head">
          <span class="latest-highlight-badge">ಇತ್ತೀಚಿನ ಪತ್ರಿಕಾ ವರದಿ · Latest Newspaper Coverage</span>
          <h2>17 ಆಗಸ್ಟ್ 2026 — ಎರಡು ಪ್ರಮುಖ ಪತ್ರಿಕಾ ವರದಿಗಳು</h2>
        </div>
        <div class="today-updates-grid">
          <a class="today-update-card" href="#updates">
            <img src="${NEWS17[0]}" alt="17 ಆಗಸ್ಟ್ 2026 ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ ಪತ್ರಿಕಾ ವರದಿ" loading="eager">
            <span>ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಹೋರಾಟ ತೀವ್ರ · 17 August 2026</span>
          </a>
          <a class="today-update-card" href="#updates">
            <img src="${NEWS17[1]}" alt="17 ಆಗಸ್ಟ್ 2026 ಕನ್ನಡಪ್ರಭ ಪತ್ರಿಕಾ ವರದಿ" loading="eager">
            <span>ಪ್ರಜಾಸೌಧ ಹೋರಾಟಕ್ಕೆ ಇಬ್ಬರು ರಾಜೀನಾಮೆ · 17 August 2026</span>
          </a>
        </div>
      </div>`;
    if (oldFeatured) oldFeatured.insertAdjacentElement("beforebegin", section);
    else main.insertBefore(section, main.firstChild);
  }

  function updateTodayNews() {
    const heading = document.querySelector("#today-updates .today-updates-head h2");
    const card = document.querySelector("#today-updates .today-update-card:not(.today-video-card)");
    if (heading) heading.textContent = "17 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳು";
    if (card) {
      card.href = "#updates";
      const img = card.querySelector("img");
      const text = card.querySelector("span");
      if (img) {
        img.src = NEWS17[0];
        img.alt = "17 ಆಗಸ್ಟ್ 2026 ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ ಪತ್ರಿಕಾ ವರದಿ";
      }
      if (text) text.textContent = "17 ಆಗಸ್ಟ್ — 2 ಪತ್ರಿಕಾ ವರದಿಗಳು · 17 August — 2 news reports";
    }
  }

  function boot() {
    featureNews17();
    updateTodayNews();
    if (typeof renderFilters === "function" && typeof renderPosts === "function") {
      renderFilters();
      renderPosts();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
