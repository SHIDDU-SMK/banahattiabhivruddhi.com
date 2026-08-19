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

// 18 Aug 2026 update + 17 Aug Saradi Satyagraha photos
(() => {
  const NEWS18 = "assets/news-2026-08-18-prajavani.webp?v=20260819-1";
  const PROCESSION18 = "assets/procession-saradi-2026-08-18.webp?v=20260819-1";
  const SARADI17 = "assets/saradi-satyagraha-2026-08-17-collage.webp?v=20260819-1";
  const posts = [
    {
      id: "procession-saradi-2026-08-18",
      type: "Photo",
      date: "2026-08-18",
      title: "Procession arrives for the 18 August Saradi Satyagraha",
      titleKn: "18 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಮೆರವಣಿಗೆ ಆಗಮನ",
      text: "Citizens arrived in a procession to join the day's Saradi Satyagraha demanding construction of the Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕಾಗಿ ನಡೆಯುತ್ತಿರುವ ಸರದಿ ಸತ್ಯಾಗ್ರಹದಲ್ಲಿ ಭಾಗವಹಿಸಲು ನಾಗರಿಕರು ಮೆರವಣಿಗೆಯಲ್ಲಿ ಆಗಮಿಸಿದರು.",
      mediaKind: "image",
      mediaUrl: PROCESSION18,
      link: "",
      local: false,
      createdAt: 14
    },
    {
      id: "news-coverage-2026-08-18-prajavani",
      type: "Paper Cut",
      date: "2026-08-18",
      title: "18 August 2026 Prajavani coverage: traders support Praja Soudha demand",
      titleKn: "18 ಆಗಸ್ಟ್ 2026 ಪ್ರಜಾವಾಣಿ: ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ವ್ಯಾಪಾರಸ್ಥರ ಬೆಂಬಲ",
      text: "Prajavani reported on the continuing public campaign and support for construction of the Praja Soudha in Banahatti.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣದ ಬೇಡಿಕೆಗೆ ಮುಂದುವರಿದ ಜನಹೋರಾಟ ಮತ್ತು ಬೆಂಬಲದ ಕುರಿತು ಪ್ರಜಾವಾಣಿ ವರದಿ ಮಾಡಿದೆ.",
      mediaKind: "image",
      mediaUrl: NEWS18,
      link: "",
      local: false,
      createdAt: 13
    },
    {
      id: "saradi-satyagraha-photos-2026-08-17",
      type: "Photo",
      date: "2026-08-17",
      title: "17 August Saradi Satyagraha",
      titleKn: "17 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಚಿತ್ರಗಳು",
      text: "Scenes from the 17 August relay Satyagraha in support of the Banahatti Praja Soudha movement.",
      textKn: "ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಬೆಂಬಲವಾಗಿ 17 ಆಗಸ್ಟ್ ನಡೆದ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಚಿತ್ರಗಳು.",
      mediaKind: "image",
      mediaUrl: SARADI17,
      link: "",
      local: false,
      createdAt: 12
    }
  ];

  if (typeof siteData !== "undefined" && Array.isArray(siteData.initialPosts)) {
    posts.slice().reverse().forEach(post => {
      const existing = siteData.initialPosts.find(p => p.id === post.id);
      if (existing) Object.assign(existing, post);
      else siteData.initialPosts.unshift(post);
    });
    siteData.ticker = "18 ಆಗಸ್ಟ್ 2026 · ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಮೆರವಣಿಗೆ ಮತ್ತು ಪ್ರಜಾವಾಣಿ ವರದಿ ಸೇರಿಸಲಾಗಿದೆ. · 18 August 2026 · Procession and Prajavani coverage added.";
  }

  function feature18() {
    const main = document.querySelector("main#main");
    if (!main) return;
    document.getElementById("featured-news-18")?.remove();
    const anchor = document.getElementById("featured-news-17") || document.getElementById("featured-news-16");
    const section = document.createElement("section");
    section.id = "featured-news-18";
    section.className = "today-updates";
    section.innerHTML = `
      <div class="container">
        <div class="today-updates-head">
          <span class="latest-highlight-badge">ಇತ್ತೀಚಿನ ಬೆಳವಣಿಗೆ · Latest Update</span>
          <h2>18 ಆಗಸ್ಟ್ 2026 — ಮೆರವಣಿಗೆ ಮತ್ತು ಪತ್ರಿಕಾ ವರದಿ</h2>
        </div>
        <div class="today-updates-grid">
          <a class="today-update-card" href="#updates">
            <img src="${PROCESSION18}" alt="18 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಆಗಮಿಸಿದ ಮೆರವಣಿಗೆ" loading="eager">
            <span>ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಮೆರವಣಿಗೆ ಆಗಮನ · Procession arrives for Saradi Satyagraha</span>
          </a>
          <a class="today-update-card" href="#updates">
            <img src="${NEWS18}" alt="18 ಆಗಸ್ಟ್ 2026 ಪ್ರಜಾವಾಣಿ ಪತ್ರಿಕಾ ವರದಿ" loading="eager">
            <span>ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ವ್ಯಾಪಾರಸ್ಥರ ಬೆಂಬಲ · Prajavani, 18 August</span>
          </a>
        </div>
      </div>`;
    if (anchor) anchor.insertAdjacentElement("beforebegin", section);
    else main.insertBefore(section, main.firstChild);
  }

  function boot18() {
    feature18();
    if (typeof renderFilters === "function" && typeof renderPosts === "function") {
      renderFilters();
      renderPosts();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot18);
  else boot18();
})();
