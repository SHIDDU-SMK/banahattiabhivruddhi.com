// Keeps the top status/ticker current and applies the latest dated content.
(() => {
  const LATEST_CONTENT_DATE = '2026-08-26';
  const LATEST_CONTENT_KN = '26 ಆಗಸ್ಟ್ 2026';
  const LATEST_CONTENT_EN = '26 August 2026';

  const NEWS21 = [
    'assets/news-2026-08-21-01.webp?v=20260821-1',
    'assets/news-2026-08-21-02.webp?v=20260821-1'
  ];

  const NEWS22 = [
    'assets/news-2026-08-22-01.webp?v=20260822-1',
    'assets/news-2026-08-22-02.webp?v=20260822-1',
    'assets/news-2026-08-22-03.webp?v=20260822-1'
  ];

  const NEWS23 = 'assets/news-2026-08-23-01.webp?v=20260826-4';

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
      return `${today.kn} · ಇಂದಿನ ನಾಲ್ಕು ಪತ್ರಿಕಾ ವರದಿಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ. · ${today.en} · Four newspaper cuttings added today.`;
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

  function sync21AugPost() {
    upsertPost({
      id: 'news-coverage-2026-08-21', type: 'Paper Cut', date: '2026-08-21',
      title: '21 August 2026 newspaper coverage: Hindu-Muslim community support for the Praja Soudha Satyagraha',
      titleKn: '21 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಹಿಂದೂ-ಮುಸ್ಲಿಂ ಬಾಂಧವರ ಬೆಂಬಲ',
      text: 'Two newspaper cuttings dated 21 August 2026 covering Hindu-Muslim community participation and support for the continuing Banahatti Praja Soudha Satyagraha.',
      textKn: '21 ಆಗಸ್ಟ್ 2026ರ ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಹಿಂದೂ-ಮುಸ್ಲಿಂ ಬಾಂಧವರ ಭಾಗವಹಿಸುವಿಕೆ ಮತ್ತು ಬೆಂಬಲವನ್ನು ದಾಖಲಿಸುತ್ತವೆ.',
      mediaKind: 'gallery', mediaUrls: NEWS21, mediaUrl: NEWS21[0], link: '', local: false, createdAt: 21
    });
  }

  function sync22AugPost() {
    upsertPost({
      id: 'news-coverage-2026-08-22', type: 'Paper Cut', date: '2026-08-22',
      title: '22 August 2026 newspaper coverage: Praja Soudha movement and continuing relay Satyagraha',
      titleKn: '22 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಮುಂದುವರಿದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ',
      text: 'Three newspaper cuttings dated 22 August 2026 covering the continuing Banahatti Praja Soudha movement, relay Satyagraha and community support.',
      textKn: 'ಬನಹಟ್ಟಿಯಲ್ಲಿ ಮುಂದುವರಿದಿರುವ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ, ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ವಿವಿಧ ಸಮುದಾಯಗಳ ಬೆಂಬಲವನ್ನು ದಾಖಲಿಸುವ 22 ಆಗಸ್ಟ್ 2026ರ ಮೂರು ಪತ್ರಿಕಾ ವರದಿಗಳು.',
      mediaKind: 'gallery', mediaUrls: NEWS22, mediaUrl: NEWS22[0], link: '', local: false, createdAt: 22
    });
  }

  function sync23AugPost() {
    upsertPost({
      id: 'news-coverage-2026-08-23', type: 'Paper Cut', date: '2026-08-23',
      title: '23 August 2026 newspaper coverage: Praja Soudha Satyagraha enters its 15th day',
      titleKn: '23 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ: ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಸತ್ಯಾಗ್ರಹ 15ನೇ ದಿನಕ್ಕೆ',
      text: 'Newspaper coverage dated 23 August 2026 on the Banahatti Praja Soudha movement and the relay Satyagraha entering its 15th day.',
      textKn: 'ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ 15ನೇ ದಿನಕ್ಕೆ ಕಾಲಿಟ್ಟಿರುವುದನ್ನು ದಾಖಲಿಸುವ 23 ಆಗಸ್ಟ್ 2026ರ ಪತ್ರಿಕಾ ವರದಿ.',
      mediaKind: 'image', mediaUrls: [NEWS23], mediaUrl: NEWS23, link: NEWS23, local: false, createdAt: 23
    });
  }

  function sync25AugPost() {
    upsertPost({
      id: 'news-coverage-2026-08-25', type: 'Paper Cut', date: '2026-08-25',
      title: '25 August 2026 newspaper coverage: Banahatti Praja Soudha movement',
      titleKn: '25 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ',
      text: 'Six available newspaper cuttings dated 25 August 2026 covering the continuing Banahatti Praja Soudha movement.',
      textKn: 'ಬನಹಟ್ಟಿಯಲ್ಲಿ ಮುಂದುವರಿದಿರುವ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಕುರಿತು 25 ಆಗಸ್ಟ್ 2026ರ ಲಭ್ಯವಿರುವ ಆರು ಪತ್ರಿಕಾ ಕತ್ತರಣೆಗಳು.',
      mediaKind: 'gallery', mediaUrls: NEWS25, mediaUrl: NEWS25[0], link: '', local: false, createdAt: 25
    });
  }

  function sync26AugPost() {
    upsertPost({
      id: 'news-coverage-2026-08-26', type: 'Paper Cut', date: '2026-08-26',
      title: '26 August 2026 newspaper coverage: Kurigala tribute and Praja Soudha movement',
      titleKn: '26 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಕುರಿಗಳೊಂದಿಗೆ ಪ್ರತಿಭಟನೆ ಹಾಗೂ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ',
      text: 'Four newspaper cuttings dated 26 August 2026 covering the continuing Banahatti Praja Soudha movement, including the Kurigala protest procession.',
      textKn: 'ಬನಹಟ್ಟಿಯಲ್ಲಿ ಮುಂದುವರಿದಿರುವ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಹಾಗೂ ಕುರಿಗಳೊಂದಿಗೆ ನಡೆದ ಪ್ರತಿಭಟನಾ ಮೆರವಣಿಗೆಯನ್ನು ದಾಖಲಿಸುವ 26 ಆಗಸ್ಟ್ 2026ರ ನಾಲ್ಕು ಪತ್ರಿಕಾ ಕತ್ತರಣೆಗಳು.',
      mediaKind: 'gallery', mediaUrls: NEWS26, mediaUrl: NEWS26[0], link: '', local: false, createdAt: 26
    });
  }

  function feature26Aug() {
    const main = document.querySelector('main#main');
    if (!main) return;
    ['featured-news-21','featured-news-22','featured-news-23','featured-news-25','featured-news-26']
      .forEach(id => document.getElementById(id)?.remove());

    const cards = NEWS26.map((url, i) => `
      <a class="today-update-card" href="${url}" target="_blank" rel="noopener noreferrer">
        <img src="${url}" alt="26 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ಕತ್ತರಣೆ ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}">
        <span>ಪತ್ರಿಕಾ ಕತ್ತರಣೆ ${i + 1} · Newspaper cutting ${i + 1}</span>
      </a>`).join('');

    const section = document.createElement('section');
    section.id = 'featured-news-26';
    section.className = 'today-updates';
    section.innerHTML = `
      <div class="container">
        <div class="today-updates-head">
          <span class="latest-highlight-badge">26 ಆಗಸ್ಟ್ 2026 · Latest Newspaper Coverage</span>
          <h2>26 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು</h2>
          <p>ಕುರಿಗಳೊಂದಿಗೆ ಪ್ರತಿಭಟನೆ ಹಾಗೂ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಇಂದಿನ ನಾಲ್ಕು ಪತ್ರಿಕಾ ಕತ್ತರಣೆಗಳು · Four newspaper cuttings from today's coverage</p>
        </div>
        <div class="today-updates-grid">${cards}</div>
      </div>`;
    main.insertBefore(section, main.firstChild);
  }

  async function applyLatest() {
    sync21AugPost();
    sync22AugPost();
    sync25AugPost();
    sync26AugPost();
    refreshTopStatus();

    sync23AugPost();
    feature26Aug();

    if (typeof renderFilters === 'function' && typeof renderPosts === 'function') {
      renderFilters();
      renderPosts();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyLatest);
  else applyLatest();

  setInterval(refreshTopStatus, 60 * 60 * 1000);
})();
