// Keeps the top status/ticker current without falsely claiming new content.
(() => {
  const LATEST_CONTENT_DATE = '2026-08-20';
  const LATEST_CONTENT_KN = '20 ಆಗಸ್ಟ್ 2026';
  const LATEST_CONTENT_EN = '20 August 2026';

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
      return `${today.kn} · ಇಂದಿನ ಆರು ಪ್ರತ್ಯೇಕ ಪತ್ರಿಕಾ ವರದಿಗಳು ಸೇರಿಸಲಾಗಿದೆ. · ${today.en} · Six separate newspaper cuttings added today.`;
    }
    return `${today.kn} · ವೆಬ್‌ಸೈಟ್‌ನ ಇತ್ತೀಚಿನ ವಿಷಯ ${LATEST_CONTENT_KN}ರವರೆಗೆ ನವೀಕರಿಸಲಾಗಿದೆ. · ${today.en} · Latest website content is updated through ${LATEST_CONTENT_EN}.`;
  }

  function refreshTopStatus() {
    const text = message();
    if (typeof siteData !== 'undefined') siteData.ticker = text;
    const ticker = document.getElementById('tickerText');
    if (ticker) ticker.textContent = text;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshTopStatus);
  } else {
    refreshTopStatus();
  }
  // Handles a page left open across midnight in India.
  setInterval(refreshTopStatus, 60 * 60 * 1000);
})();
