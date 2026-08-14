// Banahatti Abhivruddhi — dated content update: 14 Aug 2026
(() => {
  const FEATURED_EVENT_IMAGE = "assets/independence-day-praja-soudha-march-2026-08-14.webp";
  const DAY7 = [
    "assets/saradi-satyagraha-day-7-2026-08-14-01.webp",
    "assets/saradi-satyagraha-day-7-2026-08-14-02.webp",
    "assets/saradi-satyagraha-day-7-2026-08-14-03.webp"
  ];

  const NEW_POSTS = [
    {
      id: "saradi-satyagraha-day-7-2026-08-14",
      type: "Photo",
      date: "2026-08-14",
      title: "7th Day Relay Satyagraha — 14 August 2026",
      titleKn: "7ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ — 14 ಆಗಸ್ಟ್ 2026",
      text: "Day 7 of the peaceful relay Satyagraha at Banahatti in support of the demand for the Praja Soudha.",
      textKn: "ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣದ ಬೇಡಿಕೆಗೆ ಬೆಂಬಲವಾಗಿ ನಡೆಯುತ್ತಿರುವ ಶಾಂತಿಯುತ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ 7ನೇ ದಿನದ ದೃಶ್ಯಗಳು.",
      mediaKind: "gallery",
      mediaUrls: DAY7,
      mediaUrl: DAY7[0],
      link: "#satyagraha",
      local: false,
      createdAt: 3
    },
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
    if (shop && Array.isArray(shop.mediaUrls) && shop.mediaUrls.length > 6) shop.mediaUrls = shop.mediaUrls.slice(0, 6);
    siteData.ticker = "14 ಆಗಸ್ಟ್ 2026 · 7ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮುಂದುವರಿದಿದೆ. ಸಂಜೆ 6 ಗಂಟೆಗೆ ಚೆನ್ನಮ್ಮ ವೃತ್ತದಿಂದ ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ವಿಶೇಷ ಪಂಜಿನ ಮೆರವಣಿಗೆ. · 14 August 2026 · Day 7 of the relay Satyagraha continues; Independence Day special torch procession starts from Chennamma Circle at 6 PM.";
  }

  function insertFeaturedEvent() {
    if (document.getElementById("featured-independence-event")) return;
    const main = document.querySelector("main#main");
    if (!main) return;
    const section = document.createElement("section");
    section.id = "featured-independence-event";
    section.className = "featured-event featured-event-pending";
    section.innerHTML = `<div class="container"><div class="featured-event-head"><span class="featured-event-badge">ಇಂದಿನ ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮ · Featured Event</span><div><h1>ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ವಿಶೇಷ ಪಂಜಿನ ಮೆರವಣಿಗೆ</h1><p>14 ಆಗಸ್ಟ್ · ಸಂಜೆ 6:00 · ಚೆನ್ನಮ್ಮ ವೃತ್ತದಿಂದ</p></div></div><a class="featured-event-poster" href="${FEATURED_EVENT_IMAGE}"><img src="${FEATURED_EVENT_IMAGE}" alt="14 ಆಗಸ್ಟ್ ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ವಿಶೇಷ ಪಂಜಿನ ಮೆರವಣಿಗೆ ಪ್ರಕಟಣೆ" fetchpriority="high"></a><div class="featured-event-footer"><strong>ಬನಹಟ್ಟಿ–ಹೊಸೂರು–ರಾಮಪುರ ಹಾಗೂ ಸುತ್ತಲಿನ ಗ್ರಾಮಗಳ ಸಮಸ್ತ ಜನತೆಗೆ ಪಾಲ್ಗೊಳ್ಳಲು ಮನವಿ.</strong><span>ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ಸಂಭ್ರಮದೊಂದಿಗೆ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಒಗ್ಗಟ್ಟಿನ ಸಂದೇಶ.</span></div></div>`;
    const img = section.querySelector("img");
    img.addEventListener("load", () => section.classList.replace("featured-event-pending", "featured-event-ready"));
    img.addEventListener("error", () => section.remove());
    main.insertBefore(section, main.firstChild);
  }

  function updateTodaySaradi() {
    const card = document.querySelector(".today-saradi-card");
    if (!card) return;
    card.innerHTML = `<div class="day7-today-gallery"><img src="${DAY7[0]}" alt="7ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ"><img src="${DAY7[1]}" alt="7ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ"><img src="${DAY7[2]}" alt="7ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ"></div><div class="today-saradi-copy"><span class="latest-highlight-badge">ಇಂದಿನ ಸರದಿ · Today's Saradi</span><h2>7ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ</h2><p>14 ಆಗಸ್ಟ್ 2026 · ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣದ ಬೇಡಿಕೆಗೆ ಬೆಂಬಲವಾಗಿ ನಡೆಯುತ್ತಿರುವ ಶಾಂತಿಯುತ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ 7ನೇ ದಿನ.</p><a class="first-view-link" href="#updates">ಇನ್ನಷ್ಟು ನೋಡಿ · View update →</a></div>`;
    const style = document.createElement("style");
    style.textContent = `.day7-today-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;min-width:0}.day7-today-gallery img{width:100%;height:100%;min-height:220px;object-fit:cover;border-radius:10px;cursor:zoom-in}@media(max-width:700px){.day7-today-gallery{grid-template-columns:1fr}.day7-today-gallery img{min-height:0;height:auto}.day7-today-gallery img+img{display:none}}`;
    document.head.appendChild(style);
  }

  function updateTodayNews() {
    const heading = document.querySelector(".today-updates-head h2");
    const card = document.querySelector(".today-update-card:not(.today-video-card)");
    if (heading) heading.textContent = "14 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು";
    if (card) {
      card.href = "#updates";
      const img = card.querySelector("img");
      const text = card.querySelector("span");
      if (img) { img.src = "assets/news-2026-08-14-kannadaprabha-01.webp"; img.alt = "14 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ"; }
      if (text) text.textContent = "14 ಆಗಸ್ಟ್ ಪತ್ರಿಕಾ ವರದಿಗಳು · 14 August news coverage";
    }
  }

  function setupLightbox() {
    if (document.getElementById("siteImageLightbox")) return;
    const dialog = document.createElement("dialog");
    dialog.id = "siteImageLightbox";
    dialog.className = "site-image-lightbox";
    dialog.innerHTML = `<div class="site-lightbox-shell"><button class="site-lightbox-close" type="button" aria-label="Close">×</button><figure class="site-lightbox-figure"><div class="site-lightbox-stage"><img class="site-lightbox-image" alt=""></div><figcaption class="site-lightbox-caption"></figcaption></figure></div>`;
    document.body.append(dialog);
    const image = dialog.querySelector(".site-lightbox-image");
    const caption = dialog.querySelector(".site-lightbox-caption");
    dialog.querySelector(".site-lightbox-close").onclick = () => dialog.close();
    dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
    document.addEventListener("click", e => {
      const img = e.target.closest(".featured-event-poster img,.day7-today-gallery img,.latest-photo-grid img,.movement-launch-gallery img,.decision-gallery img,.event-banner-card img,.first-view-satyagraha-image img");
      if (!img) return;
      e.preventDefault();
      e.stopPropagation();
      const a = img.closest("a[href]");
      image.src = a && /\.(?:webp|png|jpe?g)$/i.test(a.getAttribute("href")) ? a.getAttribute("href") : img.currentSrc || img.src;
      image.alt = img.alt || "Photo";
      caption.textContent = img.alt || "";
      dialog.showModal();
    }, true);
  }

  document.addEventListener("DOMContentLoaded", () => {
    insertFeaturedEvent();
    updateTodayNews();
    updateTodaySaradi();
    setupLightbox();
    if (typeof renderFilters === "function" && typeof renderPosts === "function") { renderFilters(); renderPosts(); }
  });
})();