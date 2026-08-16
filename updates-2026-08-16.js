// Banahatti Abhivruddhi — dated content update: 16 Aug 2026
(() => {
  const NEWS16 = [
    "assets/news-2026-08-16-panjina-meravanige.webp",
    "assets/news-2026-08-16-kannadaprabha.webp"
  ];
  const SARADI15 = "assets/saradi-satyagraha-2026-08-15.webp";

  const NEW_POSTS = [
    {
      id: "news-coverage-2026-08-16",
      type: "Paper Cut",
      date: "2026-08-16",
      title: "16 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn: "16 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text: "Two newspaper reports dated 16 August 2026 cover the Banahatti Praja Soudha movement, including the Panjina Meravanige and Independence Day coverage.",
      textKn: "16 ಆಗಸ್ಟ್ 2026ರ ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ, ಪಂಜಿನ ಮೆರವಣಿಗೆ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ಚಟುವಟಿಕೆಗಳನ್ನು ದಾಖಲಿಸುತ್ತವೆ.",
      mediaKind: "gallery",
      mediaUrls: NEWS16,
      mediaUrl: NEWS16[0],
      link: "",
      local: false,
      createdAt: 9
    },
    {
      id: "saradi-satyagraha-2026-08-15",
      type: "Satyagraha",
      date: "2026-08-15",
      title: "15 August 2026 relay Satyagraha",
      titleKn: "15 ಆಗಸ್ಟ್ 2026: ಸರದಿ ಸತ್ಯಾಗ್ರಹ",
      text: "A photograph from the 15 August relay Satyagraha and public mobilisation for the Banahatti Praja Soudha movement.",
      textKn: "15 ಆಗಸ್ಟ್ 2026ರ ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಜನಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರ.",
      mediaKind: "image",
      mediaUrl: SARADI15,
      link: "#satyagraha",
      local: false,
      createdAt: 8
    }
  ];

  if (typeof siteData !== "undefined" && Array.isArray(siteData.initialPosts)) {
    const ids = new Set(siteData.initialPosts.map(post => post.id));
    NEW_POSTS.slice().reverse().forEach(post => {
      if (!ids.has(post.id)) siteData.initialPosts.unshift(post);
    });
    siteData.ticker = "16 ಆಗಸ್ಟ್ 2026 · ಇಂದಿನ ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳು ಸೇರಿಸಲಾಗಿದೆ. 15 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಚಿತ್ರವೂ ಸೇರಿಸಲಾಗಿದೆ. · 16 August 2026 · Two newspaper reports have been added, along with a 15 August Saradi Satyagraha photo.";
  }

  function featureNews16() {
    const main = document.querySelector("main#main");
    if (!main) return;
    document.getElementById("featured-independence-event")?.remove();
    document.getElementById("featured-news-16")?.remove();

    const section = document.createElement("section");
    section.id = "featured-news-16";
    section.className = "today-updates";
    section.setAttribute("aria-labelledby", "featuredNews16Title");
    section.innerHTML = `
      <div class="container">
        <div class="today-updates-head">
          <span class="latest-highlight-badge">ಇತ್ತೀಚಿನ ಪತ್ರಿಕಾ ವರದಿ · Latest Newspaper Coverage</span>
          <h2 id="featuredNews16Title">16 ಆಗಸ್ಟ್ 2026 — ಎರಡು ಪ್ರಮುಖ ಪತ್ರಿಕಾ ವರದಿಗಳು</h2>
        </div>
        <div class="today-updates-grid">
          <a class="today-update-card" href="#updates">
            <img src="${NEWS16[0]}" alt="16 ಆಗಸ್ಟ್ 2026 — ಪಂಜಿನ ಮೆರವಣಿಗೆ ಪತ್ರಿಕಾ ವರದಿ">
            <span>ಬನಹಟ್ಟಿ: ಗಮನ ಸೆಳೆದ ಪಂಜಿನ ಮೆರವಣಿಗೆ · 16 August</span>
          </a>
          <a class="today-update-card" href="#updates">
            <img src="${NEWS16[1]}" alt="16 ಆಗಸ್ಟ್ 2026 — ಕನ್ನಡಪ್ರಭ ಪತ್ರಿಕಾ ವರದಿ">
            <span>ರಬಕವಿ-ಬನಹಟ್ಟಿಯಲ್ಲಿ ಅದ್ದೂರಿ ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವ · 16 August</span>
          </a>
        </div>
      </div>`;
    main.insertBefore(section, main.firstChild);
  }

  function updateTodayNews() {
    const heading = document.querySelector("#today-updates .today-updates-head h2");
    const card = document.querySelector("#today-updates .today-update-card:not(.today-video-card)");
    if (heading) heading.textContent = "16 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು";
    if (card) {
      card.href = "#updates";
      const img = card.querySelector("img");
      const text = card.querySelector("span");
      if (img) {
        img.src = NEWS16[0];
        img.alt = "16 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ";
      }
      if (text) text.textContent = "16 ಆಗಸ್ಟ್ — 2 ಪತ್ರಿಕಾ ವರದಿಗಳು · 16 August — 2 news reports";
    }
  }

  function updateTodaySaradi() {
    const card = document.querySelector(".today-saradi-card");
    if (!card) return;
    card.innerHTML = `<img src="${SARADI15}" alt="15 ಆಗಸ್ಟ್ 2026 ಸರದಿ ಸತ್ಯಾಗ್ರಹ"><div class="today-saradi-copy"><span class="latest-highlight-badge">ಸರದಿ ಸತ್ಯಾಗ್ರಹ · Saradi Satyagraha</span><h2>15 ಆಗಸ್ಟ್ 2026 — ಸರದಿ ಸತ್ಯಾಗ್ರಹ</h2><p>ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ 15 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ಜನಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರ.</p><a class="first-view-link" href="#updates">ಇನ್ನಷ್ಟು ನೋಡಿ · View update →</a></div>`;
  }

  function boot() {
    featureNews16();
    updateTodayNews();
    updateTodaySaradi();
    if (typeof renderFilters === "function" && typeof renderPosts === "function") {
      renderFilters();
      renderPosts();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
