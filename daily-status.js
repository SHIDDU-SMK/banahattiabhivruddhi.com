// Keeps the top status/ticker current and applies the latest dated content.
(() => {
  const LATEST_CONTENT_DATE = '2026-08-23';
  const LATEST_CONTENT_KN = '23 ಆಗಸ್ಟ್ 2026';
  const LATEST_CONTENT_EN = '23 August 2026';

  const NEWS21 = [
    'assets/news-2026-08-21-01.webp?v=20260821-1',
    'assets/news-2026-08-21-02.webp?v=20260821-1'
  ];

  const NEWS22 = [
    'assets/news-2026-08-22-01.webp?v=20260822-1',
    'assets/news-2026-08-22-02.webp?v=20260822-1',
    'assets/news-2026-08-22-03.webp?v=20260822-1'
  ];

  const NEWS23_PARTS = [
    'assets/news-2026-08-23-01.part0?v=20260823-1',
    'assets/news-2026-08-23-01.part1?v=20260823-1',
    'assets/news-2026-08-23-01.part2?v=20260823-1',
    'assets/news-2026-08-23-01.part3?v=20260823-1',
    'assets/news-2026-08-23-01.part4?v=20260823-1',
    'assets/news-2026-08-23-01.part5?v=20260823-1'
  ];
  let news23MediaUrl = '';

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
      return `${today.kn} · ಇಂದಿನ ಹೊಸ ಪತ್ರಿಕಾ ವರದಿ ಸೇರಿಸಲಾಗಿದೆ. · ${today.en} · One new newspaper cutting added today.`;
    }
    return `${today.kn} · ವೆಬ್‌ಸೈಟ್‌ನ ಇತ್ತೀಚಿನ ವಿಷಯ ${LATEST_CONTENT_KN}ರವರೆಗೆ ನವೀಕರಿಸಲಾಗಿದೆ. · ${today.en} · Latest website content is updated through ${LATEST_CONTENT_EN}.`;
  }

  function refreshTopStatus() {
    const text = message();
    if (typeof siteData !== 'undefined') siteData.ticker = text;
    const ticker = document.getElementById('tickerText');
    if (ticker) ticker.textContent = text;
  }

  function upsertPost(post) {
    if (typeof siteData === 'undefined' || !Array.isArray(siteData.initialPosts)) return;
    const existing = siteData.initialPosts.find(p => p.id === post.id);
    if (existing) Object.assign(existing, post);
    else siteData.initialPosts.unshift(post);
  }

  async function loadNews23MediaUrl() {
    if (news23MediaUrl) return news23MediaUrl;
    const chunks = await Promise.all(NEWS23_PARTS.map(async url => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Unable to load ${url}`);
      return response.text();
    }));
    const binary = atob(chunks.join('').trim());
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    news23MediaUrl = URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
    return news23MediaUrl;
  }

  function sync21AugPost() {
    upsertPost({
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
    });
  }

  function sync22AugPost() {
    upsertPost({
      id: 'news-coverage-2026-08-22',
      type: 'Paper Cut',
      date: '2026-08-22',
      title: '22 August 2026 newspaper coverage: Praja Soudha movement and continuing relay Satyagraha',
      titleKn: '22 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಮುಂದುವರಿದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ',
      text: 'Three newspaper cuttings dated 22 August 2026 covering the continuing Banahatti Praja Soudha movement, relay Satyagraha and community support.',
      textKn: 'ಬನಹಟ್ಟಿಯಲ್ಲಿ ಮುಂದುವರಿದಿರುವ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ, ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ವಿವಿಧ ಸಮುದಾಯಗಳ ಬೆಂಬಲವನ್ನು ದಾಖಲಿಸುವ 22 ಆಗಸ್ಟ್ 2026ರ ಮೂರು ಪತ್ರಿಕಾ ವರದಿಗಳು.',
      mediaKind: 'gallery',
      mediaUrls: NEWS22,
      mediaUrl: NEWS22[0],
      link: '',
      local: false,
      createdAt: 22
    });
  }

  function sync23AugPost(mediaUrl) {
    upsertPost({
      id: 'news-coverage-2026-08-23',
      type: 'Paper Cut',
      date: '2026-08-23',
      title: '23 August 2026 newspaper coverage: Praja Soudha Satyagraha enters its 15th day',
      titleKn: '23 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ: ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಸತ್ಯಾಗ್ರಹ 15ನೇ ದಿನಕ್ಕೆ',
      text: 'Newspaper coverage dated 23 August 2026 on the Banahatti Praja Soudha movement and the relay Satyagraha entering its 15th day.',
      textKn: 'ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ 15ನೇ ದಿನಕ್ಕೆ ಕಾಲಿಟ್ಟಿರುವುದನ್ನು ದಾಖಲಿಸುವ 23 ಆಗಸ್ಟ್ 2026ರ ಪತ್ರಿಕಾ ವರದಿ.',
      mediaKind: 'image',
      mediaUrls: [mediaUrl],
      mediaUrl,
      link: '',
      local: false,
      createdAt: 23
    });
  }

  function feature23Aug(mediaUrl) {
    const main = document.querySelector('main#main');
    if (!main) return;

    document.getElementById('featured-news-21')?.remove();
    document.getElementById('featured-news-22')?.remove();
    document.getElementById('featured-news-23')?.remove();

    const section = document.createElement('section');
    section.id = 'featured-news-23';
    section.className = 'today-updates';
    section.innerHTML = `
      <div class="container">
        <div class="today-updates-head">
          <span class="latest-highlight-badge">23 ಆಗಸ್ಟ್ 2026 · Latest Newspaper Coverage</span>
          <h2>23 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿ</h2>
          <p>ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಸತ್ಯಾಗ್ರಹ 15ನೇ ದಿನಕ್ಕೆ · Praja Soudha Satyagraha enters its 15th day</p>
        </div>
        <div class="today-updates-grid">
          <a class="today-update-card" href="${mediaUrl}" target="_blank" rel="noopener noreferrer">
            <img src="${mediaUrl}" alt="23 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ" loading="eager">
            <span>ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಸತ್ಯಾಗ್ರಹ 15ನೇ ದಿನಕ್ಕೆ · Newspaper cutting</span>
          </a>
        </div>
      </div>`;

    main.insertBefore(section, main.firstChild);
  }

  async function applyLatest() {
    sync21AugPost();
    sync22AugPost();
    refreshTopStatus();

    try {
      const mediaUrl = await loadNews23MediaUrl();
      sync23AugPost(mediaUrl);
      feature23Aug(mediaUrl);
    } catch (error) {
      console.error('Could not load 23 August newspaper cutting:', error);
    }

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