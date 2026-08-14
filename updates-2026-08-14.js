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
        <a class="featured-event-poster" href="${FEATURED_EVENT_IMAGE}" aria-label="ಸ್ವಾತಂತ್ರ್ಯೋತ್ಸವದ ವಿಶೇಷ ಪಂಜಿನ ಮೆರವಣಿಗೆ ಪ್ರಕಟಣೆಯನ್ನು ದೊಡ್ಡದಾಗಿ ನೋಡಿ">
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

  function setupUnifiedImageLightbox() {
    if (document.getElementById("siteImageLightbox")) return;

    const dialog = document.createElement("dialog");
    dialog.id = "siteImageLightbox";
    dialog.className = "site-image-lightbox";
    dialog.setAttribute("aria-label", "Image viewer");
    dialog.innerHTML = `
      <div class="site-lightbox-shell">
        <button class="site-lightbox-close" type="button" aria-label="Close image">×</button>
        <button class="site-lightbox-nav site-lightbox-prev" type="button" aria-label="Previous image">‹</button>
        <figure class="site-lightbox-figure">
          <div class="site-lightbox-stage">
            <img class="site-lightbox-image" alt="" />
          </div>
          <figcaption class="site-lightbox-caption"></figcaption>
          <div class="site-lightbox-counter" aria-live="polite"></div>
        </figure>
        <button class="site-lightbox-nav site-lightbox-next" type="button" aria-label="Next image">›</button>
      </div>`;
    document.body.append(dialog);

    const image = dialog.querySelector(".site-lightbox-image");
    const caption = dialog.querySelector(".site-lightbox-caption");
    const counter = dialog.querySelector(".site-lightbox-counter");
    const prev = dialog.querySelector(".site-lightbox-prev");
    const next = dialog.querySelector(".site-lightbox-next");
    const close = dialog.querySelector(".site-lightbox-close");

    let items = [];
    let current = 0;
    let touchStartX = 0;

    const imageHrefPattern = /\.(?:avif|webp|png|jpe?g|gif)(?:[?#].*)?$/i;

    function captionFor(img) {
      const figure = img.closest("figure");
      const figcaption = figure?.querySelector("figcaption");
      if (figcaption) {
        return figcaption.innerText.trim().replace(/\s+/g, " ");
      }
      const section = img.closest("section");
      const heading = section?.querySelector("h1,h2,h3");
      return heading?.textContent?.trim() || img.alt || "";
    }

    function sourceFor(img) {
      const anchor = img.closest("a[href]");
      const href = anchor?.getAttribute("href") || "";
      return imageHrefPattern.test(href) ? href : (img.currentSrc || img.src);
    }

    function itemFor(img) {
      return {
        src: sourceFor(img),
        alt: img.alt || captionFor(img) || "Photo",
        caption: captionFor(img)
      };
    }

    function galleryItems(img) {
      const gallery = img.closest(
        ".movement-launch-gallery, .decision-gallery, .latest-photo-grid, .event-banners-list"
      );
      if (!gallery) return [itemFor(img)];
      const galleryImages = [...gallery.querySelectorAll("img")].filter(candidate => {
        const src = sourceFor(candidate);
        return Boolean(src) && !candidate.closest(".post-card");
      });
      return galleryImages.length ? galleryImages.map(itemFor) : [itemFor(img)];
    }

    function render() {
      if (!items.length) return;
      current = (current + items.length) % items.length;
      const item = items[current];
      image.src = item.src;
      image.alt = item.alt;
      caption.textContent = item.caption;
      caption.hidden = !item.caption;
      counter.textContent = items.length > 1 ? `${current + 1} / ${items.length}` : "";
      counter.hidden = items.length < 2;
      prev.hidden = items.length < 2;
      next.hidden = items.length < 2;
    }

    function openFor(img) {
      items = galleryItems(img);
      const selectedSrc = sourceFor(img);
      current = Math.max(0, items.findIndex(item => item.src === selectedSrc));
      render();
      dialog.showModal();
      close.focus({ preventScroll: true });
    }

    function move(delta) {
      if (items.length < 2) return;
      current += delta;
      render();
    }

    document.addEventListener("click", event => {
      const img = event.target.closest("main img");
      if (!img || img.closest(".post-card, .post-modal, .today-update-card")) return;

      const directImageLink = img.closest("a[href]");
      const directHref = directImageLink?.getAttribute("href") || "";
      const isDirectFile = imageHrefPattern.test(directHref);
      const isGalleryPhoto = Boolean(img.closest(
        ".movement-launch-gallery, .decision-gallery, .latest-photo-grid, .event-banner-card, .first-view-satyagraha-image, .featured-event-poster"
      ));

      if (!isDirectFile && !isGalleryPhoto) return;
      event.preventDefault();
      event.stopPropagation();
      openFor(img);
    }, true);

    close.addEventListener("click", () => dialog.close());
    prev.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));

    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
    });

    dialog.addEventListener("touchstart", event => {
      touchStartX = event.changedTouches[0]?.clientX || 0;
    }, { passive: true });
    dialog.addEventListener("touchend", event => {
      const endX = event.changedTouches[0]?.clientX || 0;
      const diff = endX - touchStartX;
      if (Math.abs(diff) > 55) move(diff < 0 ? 1 : -1);
    }, { passive: true });

    // Keep the Updates/news modal self-contained too: no raw-file escape link.
    document.addEventListener("click", event => {
      const rawLink = event.target.closest(".modal-slide-open");
      if (rawLink) event.preventDefault();
    }, true);
  }

  document.addEventListener("DOMContentLoaded", () => {
    insertFeaturedEvent();
    setupUnifiedImageLightbox();

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
