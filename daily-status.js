// Keeps the top status/ticker current and applies the latest dated content.
(() => {
  const LATEST_CONTENT_DATE = '2026-08-21';
  const LATEST_CONTENT_KN = '21 ಆಗಸ್ಟ್ 2026';
  const LATEST_CONTENT_EN = '21 August 2026';
  const NEWS21 = [
    'assets/news-2026-08-21-01.webp?v=20260821-1',
    'assets/news-2026-08-21-02.webp?v=20260821-1'
  ];

  const monthKn = {
    January:'ಜನವರಿ', February:'ಫೆಬ್ರವರಿ', March:'ಮಾರ್ಚ್', April:'ಏಪ್ರಿಲ್',
    May:'ಮೇ', June:'ಜೂನ್', July:'ಜುಲೈ', August:'ಆಗಸ್ಟ್', September:'ಸೆಪ್ಟೆಂಬರ್',
    October:'ಅಕ್ಟೋಬರ್', November:'ನವೆಂಬರ್', December:'ಡಿಸೆಂಬರ್'
  };

  function indiaDateParts() {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata', day: '2-digit', month: 'long', year: 'numeric'
    }).formatToParts(new Date());
    const value = type => parts.find(p => p.type === type)?.value || '';
    const day = String(Number(value('day')));
    const month = value('month');
    const year = value('year');
    const isoMonth = String(new Date(`${month} 1, ${year}`).getMonth() + 1).padStart(2, '0');
    return {
      iso: `${year}-${isoMonth}-${String(Number(value('day'))).padStart(2, '0')}`,
      kn: `${day} ${monthKn[month] || month} ${year}`,
      en: `${day} ${month} ${year}`
    };
  }

  function message() {
    const today = indiaDateParts();
    if (today.iso === LATEST_CONTENT_DATE) {
      return `${today.kn} · ಇಂದಿನ ಎರಡು ಹೊಸ ಪತ್ರಿಕಾ ವರದಿಗಳು ಸೇರಿಸಲಾಗಿದೆ. · ${today.en} · Two new newspaper cuttings added today.`;
    }
    return `${today.kn} · ವೆಬ್‌ಸೈಟ್‌ನ ಇತ್ತೀಚಿನ ವಿಷಯ ${LATEST_CONTENT_KN}ರವರೆಗೆ ನವೀಕರಿಸಲಾಗಿದೆ. · ${today.en} · Latest website content is updated through ${LATEST_CONTENT_EN}.`;
  }

  function refreshTopStatus() {
    const text = message();
    if (typeof siteData !== 'undefined') siteData.ticker = text;
    const ticker = document.getElementById('tickerText');
    if (ticker) ticker.textContent = text;
  }

  function sync21AugPost() {
    if (typeof siteData === 'undefined' || !Array.isArray(siteData.initialPosts)) return;
    const post = {
      id: 'news-coverage-2026-08-21',
      type: 'Paper Cut',
      date: '2026-08-21',
      title: '21 August 2026 newspaper coverage: Hindu-Muslim community support for the Praja Soudha Satyagraha',
      titleKn: '21 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಹಿಂದೂ-ಮುಸ್ಲಿಂ ಬಾಂಧವರ ಬೆಂಬಲ',
      text: 'Two newspaper cuttings dated 21 August 2026 covering Hindu-Muslim community participation and support for the continuing Banahatti Praja Soudha Satyagraha.',
      textKn: '21 ಆಗಸ್ಟ್ 2026ರ ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಹಿಂದೂ-ಮುಸ್ಲಿಂ ಬಾಂಧವರ ಭಾಗವಹಿಸುವಿಕೆ ಮತ್ತು ಬೆಂಬಲವನ್ನು ದಾಖಲಿಸುತ್ತವೆ.',
      mediaKind: 'gallery',
      mediaUrls: NEWS21,
      mediaUrl: NEWS21[0],
      link: '',
      local: false,
      createdAt: 21
    };
    const existing = siteData.initialPosts.find(p => p.id === post.id);
    if (existing) Object.assign(existing, post);
    else siteData.initialPosts.unshift(post);
  }

  function feature21Aug() {
    const main = document.querySelector('main#main');
    if (!main) return;
    document.getElementById('featured-news-21')?.remove();

    const section = document.createElement('section');
    section.id = 'featured-news-21';
    section.className = 'today-updates';
    section.innerHTML = `
      <div class="container">
        <div class="today-updates-head">
          <span class="latest-highlight-badge">21 ಆಗಸ್ಟ್ 2026 · Latest Newspaper Coverage</span>
          <h2>21 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು</h2>
          <p>ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ವೀಕ್ಷಿಸಿ · View both newspaper cuttings separately</p>
        </div>
        <div class="today-updates-grid">
          <a class="today-update-card" href="${NEWS21[0]}" target="_blank" rel="noopener noreferrer">
            <img src="${NEWS21[0]}" alt="21 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ 1" loading="eager">
            <span>ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಹಿಂದೂ-ಮುಸ್ಲಿಂ ಬಾಂಧವರ ಬೆಂಬಲ · Newspaper cutting 1</span>
          </a>
          <a class="today-update-card" href="${NEWS21[1]}" target="_blank" rel="noopener noreferrer">
            <img src="${NEWS21[1]}" alt="21 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ 2" loading="eager">
            <span>ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಹಿಂದೂ-ಮುಸ್ಲಿಂ ಬಾಂಧವರ ಬೆಂಬಲ · Newspaper cutting 2</span>
          </a>
        </div>
      </div>`;
    main.insertBefore(section, main.firstChild);
  }

  function applyLatest() {
    sync21AugPost();
    feature21Aug();
    refreshTopStatus();
    if (typeof renderFilters === 'function' && typeof renderPosts === 'function') {
      renderFilters();
      renderPosts();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLatest);
  } else {
    applyLatest();
  }
  setInterval(refreshTopStatus, 60 * 60 * 1000);
})();
