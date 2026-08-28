// Completes the public movement timeline through 28 August 2026.
(() => {
  function upsert(post) {
    if (typeof siteData === 'undefined' || !Array.isArray(siteData.initialPosts)) return;
    const found = siteData.initialPosts.find(p => p.id === post.id);
    if (found) Object.assign(found, post); else siteData.initialPosts.unshift(post);
  }

  function apply() {
    upsert({
      id: 'tractor-rally-2026-08-27', type: 'Announcement', date: '2026-08-27', createdAt: 27,
      title: '27 August 2026: Farmers hold tractor rally demanding Praja Soudha in Banahatti',
      titleKn: '27 ಆಗಸ್ಟ್ 2026: ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ಆಗ್ರಹಿಸಿ ರೈತರ ಟ್ರ್ಯಾಕ್ಟರ್ ಮೆರವಣಿಗೆ',
      text: 'Hundreds of farmers from Banahatti and surrounding areas participated with their tractors, pressing the demand that the Praja Soudha be constructed in Banahatti. The procession began near the sub-treasury office on Jagadal Road, passed through major streets and concluded at the protest platform near the bus stand.',
      textKn: 'ಬನಹಟ್ಟಿ ಹಾಗೂ ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳ ನೂರಾರು ರೈತರು ಟ್ರ್ಯಾಕ್ಟರ್‌ಗಳೊಂದಿಗೆ ಭಾಗವಹಿಸಿ, ಪ್ರಜಾಸೌಧವನ್ನು ಬನಹಟ್ಟಿಯಲ್ಲೇ ನಿರ್ಮಿಸಬೇಕೆಂದು ಒತ್ತಾಯಿಸಿದರು. ಜಗದಾಳ ರಸ್ತೆಯ ಉಪಖಜಾನೆ ಕಚೇರಿ ಸಮೀಪದಿಂದ ಆರಂಭವಾದ ಮೆರವಣಿಗೆ ಪ್ರಮುಖ ರಸ್ತೆಗಳಲ್ಲಿ ಸಾಗಿ ಬಸ್ ನಿಲ್ದಾಣದ ಸಮೀಪದ ಹೋರಾಟ ವೇದಿಕೆಯಲ್ಲಿ ಸಮಾಪ್ತಿಯಾಯಿತು.',
      mediaKind: '', mediaUrls: [], mediaUrl: '', link: '', local: false
    });

    upsert({
      id: 'news-coverage-2026-08-28', type: 'Paper Cut', date: '2026-08-28', createdAt: 28,
      title: '28 August 2026 newspaper coverage: Farmers demand Praja Soudha and tractor rally',
      titleKn: '28 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಬೇಡಿಕೆ ಮತ್ತು ರೈತರ ಟ್ರ್ಯಾಕ್ಟರ್ ಮೆರವಣಿಗೆ',
      text: 'Four newspaper cuttings dated 28 August 2026 document the farmers’ tractor rally and the continuing demand to construct the Praja Soudha in Banahatti.',
      textKn: 'ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣದ ಬೇಡಿಕೆ ಹಾಗೂ ರೈತರ ಟ್ರ್ಯಾಕ್ಟರ್ ಮೆರವಣಿಗೆಯನ್ನು ದಾಖಲಿಸುವ 28 ಆಗಸ್ಟ್ 2026ರ ನಾಲ್ಕು ಪತ್ರಿಕಾ ವರದಿಗಳು.',
      mediaKind: '', mediaUrls: [], mediaUrl: '', link: '', local: false
    });

    const ticker = '28 ಆಗಸ್ಟ್ 2026 · ವೆಬ್‌ಸೈಟ್‌ನ ಚಳವಳಿ ಕಾಲಕ್ರಮವನ್ನು 28 ಆಗಸ್ಟ್ 2026ರವರೆಗೆ ನವೀಕರಿಸಲಾಗಿದೆ. · 28 August 2026 · Movement timeline updated through 28 August 2026.';
    siteData.ticker = ticker;
    const tickerEl = document.getElementById('tickerText');
    if (tickerEl) tickerEl.textContent = ticker;

    document.getElementById('featured-news-26')?.remove();
    const main = document.querySelector('main#main');
    if (main && !document.getElementById('featured-news-28')) {
      const section = document.createElement('section');
      section.id = 'featured-news-28';
      section.className = 'today-updates';
      section.innerHTML = `<div class="container"><div class="today-updates-head"><span class="latest-highlight-badge">28 ಆಗಸ್ಟ್ 2026 · Latest Update</span><h2>ರೈತರ ಟ್ರ್ಯಾಕ್ಟರ್ ಮೆರವಣಿಗೆ · Farmers’ Tractor Rally</h2><p>27 ಆಗಸ್ಟ್‌ನ ರೈತರ ಟ್ರ್ಯಾಕ್ಟರ್ ಮೆರವಣಿಗೆ ಮತ್ತು 28 ಆಗಸ್ಟ್‌ನ ಪತ್ರಿಕಾ ವರದಿಗಳನ್ನು ಚಳವಳಿ ಕಾಲಕ್ರಮಕ್ಕೆ ಸೇರಿಸಲಾಗಿದೆ. · The 27 August tractor rally and 28 August newspaper coverage have been added to the movement timeline.</p></div></div>`;
      main.insertBefore(section, main.firstChild);
    }

    if (typeof renderFilters === 'function') renderFilters();
    if (typeof renderPosts === 'function') renderPosts();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(apply, 50));
  else setTimeout(apply, 50);
})();
