// Banahatti Abhivruddhi — dated content update: 17 Aug 2026
(() => {
  const NEWS17 = "assets/news-2026-08-17-samyukta-karnataka.webp";
  const POST17 = {
    id: "news-coverage-2026-08-17",
    type: "Paper Cut",
    date: "2026-08-17",
    title: "17 August 2026 newspaper coverage: Praja Soudha movement",
    titleKn: "17 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ: ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಹೋರಾಟ ತೀವ್ರ",
    text: "Samyukta Karnataka reported on the ninth day of the relay Satyagraha and the continuing campaign demanding construction of the Praja Soudha in Banahatti.",
    textKn: "ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ ಪತ್ರಿಕೆಯಲ್ಲಿ 9ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಹಾಗೂ ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕಾಗಿ ನಡೆಯುತ್ತಿರುವ ಹೋರಾಟದ ವರದಿ ಪ್ರಕಟವಾಗಿದೆ.",
    mediaKind: "image",
    mediaUrl: NEWS17,
    link: "",
    local: false,
    createdAt: 11
  };

  if (typeof siteData !== "undefined" && Array.isArray(siteData.initialPosts)) {
    if (!siteData.initialPosts.some(post => post.id === POST17.id)) siteData.initialPosts.unshift(POST17);
    siteData.ticker = "17 ಆಗಸ್ಟ್ 2026 · ಸಂಯುಕ್ತ ಕರ್ನಾಟಕದಲ್ಲಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ವರದಿ ಪ್ರಕಟವಾಗಿದೆ. · 17 August 2026 · Samyukta Karnataka coverage of the Praja Soudha movement has been added.";
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
          <h2>17 ಆಗಸ್ಟ್ 2026 — ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಹೋರಾಟ ತೀವ್ರ</h2>
        </div>
        <div class="today-updates-grid">
          <a class="today-update-card" href="#updates">
            <img src="${NEWS17}" alt="17 ಆಗಸ್ಟ್ 2026 ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ ಪತ್ರಿಕಾ ವರದಿ">
            <span>ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಹೋರಾಟ ತೀವ್ರ · ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ · 17 August 2026</span>
          </a>
        </div>
      </div>`;
    if (oldFeatured) oldFeatured.insertAdjacentElement("beforebegin", section);
    else main.insertBefore(section, main.firstChild);
  }

  function updateTodayNews() {
    const heading = document.querySelector("#today-updates .today-updates-head h2");
    const card = document.querySelector("#today-updates .today-update-card:not(.today-video-card)");
    if (heading) heading.textContent = "17 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿ";
    if (card) {
      card.href = "#updates";
      const img = card.querySelector("img");
      const text = card.querySelector("span");
      if (img) {
        img.src = NEWS17;
        img.alt = "17 ಆಗಸ್ಟ್ 2026 ಸಂಯುಕ್ತ ಕರ್ನಾಟಕ ಪತ್ರಿಕಾ ವರದಿ";
      }
      if (text) text.textContent = "17 ಆಗಸ್ಟ್ — ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಹೋರಾಟ ತೀವ್ರ · 17 August";
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
