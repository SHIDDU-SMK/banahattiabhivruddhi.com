// Banahatti Abhivruddhi — dated content update: 16 Aug 2026
(() => {
  const NEWS16 = "assets/news-2026-08-16-panjina-meravanige.webp";
  const SARADI15 = "assets/saradi-satyagraha-2026-08-15.webp";

  const NEW_POSTS = [
    {
      id: "news-coverage-2026-08-16",
      type: "Paper Cut",
      date: "2026-08-16",
      title: "16 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn: "16 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text: "The 16 August 2026 newspaper report covers the Banahatti Praja Soudha movement and the Panjina Meravanige.",
      textKn: "16 ಆಗಸ್ಟ್ 2026ರ ಪತ್ರಿಕಾ ವರದಿ ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಪಂಜಿನ ಮೆರವಣಿಗೆಯನ್ನು ದಾಖಲಿಸುತ್ತದೆ.",
      mediaKind: "image",
      mediaUrl: NEWS16,
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
    siteData.ticker = "16 ಆಗಸ್ಟ್ 2026 · ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿ ಸೇರಿಸಲಾಗಿದೆ. 15 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಚಿತ್ರವೂ ಸೇರಿಸಲಾಗಿದೆ. · 16 August 2026 · Today's newspaper report has been added, along with a 15 August Saradi Satyagraha photo.";
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
          <h2 id="featuredNews16Title">16 ಆಗಸ್ಟ್ 2026 — ಪ್ರಮುಖ ಪತ್ರಿಕಾ ವರದಿ</h2>
        </div>
        <div class="today-updates-grid">
          <a class="today-update-card" href="#updates">
            <img src="${NEWS16}" alt="16 ಆಗಸ್ಟ್ 2026 — ಪಂಜಿನ ಮೆರವಣಿಗೆ ಪತ್ರಿಕಾ ವರದಿ">
            <span>ಬನಹಟ್ಟಿ: ಗಮನ ಸೆಳೆದ ಪಂಜಿನ ಮೆರವಣಿಗೆ · 16 August</span>
          </a>
        </div>
      </div>`;
    main.insertBefore(section, main.firstChild);
  }

  function updateTodayNews() {
    const heading = document.querySelector("#today-updates .today-updates-head h2");
    const card = document.querySelector("#today-updates .today-update-card:not(.today-video-card)");
    if (heading) heading.textContent = "16 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿ";
    if (card) {
      card.href = "#updates";
      const img = card.querySelector("img");
      const text = card.querySelector("span");
      if (img) {
        img.src = NEWS16;
        img.alt = "16 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ";
      }
      if (text) text.textContent = "16 ಆಗಸ್ಟ್ — ಪತ್ರಿಕಾ ವರದಿ · 16 August — Newspaper report";
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
