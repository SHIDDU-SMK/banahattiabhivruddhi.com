// Banahatti Abhivruddhi — consolidated update through 20 Aug 2026
(() => {
  const V = '?v=20260820-4';
  const NEWS20 = [
    'assets/news-2026-08-20-01.webp' + V,
    'assets/news-2026-08-20-02.webp' + V,
    'assets/news-2026-08-20-03.webp' + V,
    'assets/news-2026-08-20-04.webp' + V,
    'assets/news-2026-08-20-05.webp' + V,
    'assets/news-2026-08-20-06.webp' + V
  ];
  const NEWS19 = 'assets/news-2026-08-19-prajasoudha.webp' + V;
  const NEWS18 = 'assets/news-2026-08-18-prajavani.webp' + V;
  const PROCESSION18 = 'assets/procession-saradi-2026-08-18.webp' + V;
  const SARADI17 = 'assets/saradi-satyagraha-2026-08-17-collage.webp' + V;
  const NEWS17 = [
    'assets/news-2026-08-17-samyukta-karnataka.webp' + V,
    'assets/news-2026-08-17-samyukta-karnataka-2.webp' + V
  ];

  const posts = [
    { id:'news-coverage-2026-08-20', type:'Paper Cut', date:'2026-08-20', title:'20 August 2026 newspaper coverage: Banahatti Praja Soudha movement', titleKn:'20 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ', text:'Six separate newspaper cuttings dated 20 August 2026 covering the continuing Praja Soudha campaign in Banahatti.', textKn:'20 ಆಗಸ್ಟ್ 2026ರಂದು ಪ್ರಕಟವಾದ ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಆರು ಪ್ರತ್ಯೇಕ ಪತ್ರಿಕಾ ವರದಿಗಳು.', mediaKind:'gallery', mediaUrls:NEWS20, mediaUrl:NEWS20[0], link:'', local:false, createdAt:20 },
    { id:'news-coverage-2026-08-19', type:'Paper Cut', date:'2026-08-19', title:'19 August 2026 newspaper coverage: Praja Soudha movement', titleKn:'19 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ', text:'Newspaper coverage dated 19 August 2026 on the Banahatti Praja Soudha movement.', textKn:'19 ಆಗಸ್ಟ್ 2026ರ ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಪತ್ರಿಕಾ ವರದಿ.', mediaKind:'image', mediaUrl:NEWS19, link:'', local:false, createdAt:19 },
    { id:'procession-saradi-2026-08-18', type:'Photo', date:'2026-08-18', title:'Procession arrives for the 18 August Saradi Satyagraha', titleKn:'18 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಮೆರವಣಿಗೆ ಆಗಮನ', text:'Citizens arrived in a procession to join the Saradi Satyagraha demanding construction of the Praja Soudha in Banahatti.', textKn:'ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕಾಗಿ ನಡೆಯುತ್ತಿರುವ ಸರದಿ ಸತ್ಯಾಗ್ರಹದಲ್ಲಿ ಭಾಗವಹಿಸಲು ನಾಗರಿಕರು ಮೆರವಣಿಗೆಯಲ್ಲಿ ಆಗಮಿಸಿದರು.', mediaKind:'image', mediaUrl:PROCESSION18, link:'', local:false, createdAt:18 },
    { id:'news-coverage-2026-08-18-prajavani', type:'Paper Cut', date:'2026-08-18', title:'18 August 2026 Prajavani coverage', titleKn:'18 ಆಗಸ್ಟ್ 2026 ಪ್ರಜಾವಾಣೀ: ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ವ್ಯಾಪಾರಸ್ಥರ ಬೆಂಬಲ', text:'Prajavani reported continuing public and traders support for construction of the Praja Soudha in Banahatti.', textKn:'ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ವ್ಯಾಪಾರಸ್ಥರು ಮತ್ತು ಸಾರ್ವಜನಿಕರ ಬೆಂಬಲದ ಕುರಿತು ಪ್ರಜಾವಾಣೀ ವರದಿ.', mediaKind:'image', mediaUrl:NEWS18, link:'', local:false, createdAt:17 },
    { id:'saradi-satyagraha-photos-2026-08-17', type:'Photo', date:'2026-08-17', title:'17 August Saradi Satyagraha', titleKn:'17 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಚಿತ್ರಗಳು', text:'Scenes from the 17 August relay Satyagraha in support of the Banahatti Praja Soudha movement.', textKn:'ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಬೆಂಬಲವಾಗಿ 17 ಆಗಸ್ಟ್ ನಡೆದ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಚಿತ್ರಗಳು.', mediaKind:'image', mediaUrl:SARADI17, link:'', local:false, createdAt:16 },
    { id:'news-coverage-2026-08-17', type:'Paper Cut', date:'2026-08-17', title:'17 August 2026 newspaper coverage', titleKn:'17 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧಕ್ಕಾಗಿ ಹೋರಾಟ ತೀವ್ರ', text:'Two newspaper reports dated 17 August 2026 on the continuing Praja Soudha movement.', textKn:'17 ಆಗಸ್ಟ್ 2026ರ ಎರಡು ಪತ್ರಿಕಾ ವರದಿಗಳು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟವನ್ನು ದಾಖಲಿಸುತ್ತವೆ.', mediaKind:'gallery', mediaUrls:NEWS17, mediaUrl:NEWS17[0], link:'', local:false, createdAt:15 }
  ];

  function syncPosts(){
    if(typeof siteData==='undefined'||!Array.isArray(siteData.initialPosts)) return;
    posts.slice().reverse().forEach(post=>{
      const existing=siteData.initialPosts.find(p=>p.id===post.id);
      if(existing) Object.assign(existing,post);
      else siteData.initialPosts.unshift(post);
    });
    siteData.ticker='20 ಆಗಸ್ಟ್ 2026 · ಇಂದಿನ ಆರು ಪ್ರತ್ಯೇಕ ಪತ್ರಿಕಾ ವರದಿಗಳು ಸೇರಿಸಲಾಗಿದೆ. · 20 August 2026 · Six separate newspaper cuttings added.';
  }

  function card(img,label){
    return `<a class="today-update-card" href="${img}" target="_blank" rel="noopener noreferrer"><img src="${img}" alt="${label}" loading="eager"><span>${label}</span></a>`;
  }

  function featureLatest(){
    const main=document.querySelector('main#main');
    if(!main) return;
    ['featured-news-20','featured-news-19','featured-news-18','featured-news-17'].forEach(id=>document.getElementById(id)?.remove());

    const s20=document.createElement('section');
    s20.id='featured-news-20';
    s20.className='today-updates';
    s20.innerHTML=`<div class="container"><div class="today-updates-head"><span class="latest-highlight-badge">ಇಂದಿನ ಪತ್ರಿಕಾ ವರದಿಗಳು · Today's Newspaper Coverage</span><h2>20 ಆಗಸ್ಟ್ 2026 — ಆರು ಪ್ರಮುಖ ಪತ್ರಿಕಾ ವರದಿಗಳು</h2><p>ಪ್ರತಿ ಪತ್ರಿಕಾ ವರದಿಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ವೀಕ್ಷಿಸಿ · View all six newspaper cuttings separately</p></div><div class="today-updates-grid">${NEWS20.map((img,i)=>card(img,`20 ಆಗಸ್ಟ್ 2026 · ಪತ್ರಿಕಾ ವರದಿ ${i+1} · Newspaper cutting ${i+1}`)).join('')}</div></div>`;

    const s19=document.createElement('section');
    s19.id='featured-news-19';
    s19.className='today-updates';
    s19.innerHTML=`<div class="container"><div class="today-updates-head"><span class="latest-highlight-badge">ಪತ್ರಿಕಾ ವರದಿ · Newspaper</span><h2>19 ಆಗಸ್ಟ್ 2026</h2></div><div class="today-updates-grid">${card(NEWS19,'19 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ · 19 August newspaper coverage')}</div></div>`;

    const s18=document.createElement('section');
    s18.id='featured-news-18';
    s18.className='today-updates';
    s18.innerHTML=`<div class="container"><div class="today-updates-head"><span class="latest-highlight-badge">18 ಆಗಸ್ಟ್ · 18 August</span><h2>ಮೆರವಣಿಗೆ ಮತ್ತು ಪ್ರಜಾವಾಣೀ ವರದಿ</h2></div><div class="today-updates-grid">${card(PROCESSION18,'ಸರದಿ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ಮೆರವಣಿಗೆ ಆಗಮನ · Procession arrives for Saradi Satyagraha')}${card(NEWS18,'ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣಕ್ಕೆ ವ್ಯಾಪಾರಸ್ಥರ ಬೆಂಬಲ · Prajavani, 18 August')}</div></div>`;

    const s17=document.createElement('section');
    s17.id='featured-news-17';
    s17.className='today-updates';
    s17.innerHTML=`<div class="container"><div class="today-updates-head"><span class="latest-highlight-badge">17 ಆಗಸ್ಟ್ · 17 August</span><h2>ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ಪತ್ರಿಕಾ ವರದಿಗಳು</h2></div><div class="today-updates-grid">${card(SARADI17,'17 ಆಗಸ್ಟ್ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ ಚಿತ್ರಗಳು · Saradi Satyagraha photos')}${card(NEWS17[0],'17 ಆಗಸ್ಟ್ ಪತ್ರಿಕಾ ವರದಿ · 17 August newspaper coverage')}</div></div>`;

    main.insertBefore(s17,main.firstChild);
    main.insertBefore(s18,main.firstChild);
    main.insertBefore(s19,main.firstChild);
    main.insertBefore(s20,main.firstChild);
  }

  function updateToday(){
    const heading=document.querySelector('#today-updates .today-updates-head h2');
    const cardEl=document.querySelector('#today-updates .today-update-card:not(.today-video-card)');
    if(heading) heading.textContent='20 ಆಗಸ್ಟ್ 2026 — ಇಂದಿನ ಆರು ಪತ್ರಿಕಾ ವರದಿಗಳು';
    if(cardEl){
      cardEl.href='#updates';
      cardEl.removeAttribute('target');
      const img=cardEl.querySelector('img');
      const txt=cardEl.querySelector('span');
      if(img){img.src=NEWS20[0];img.alt='20 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು';}
      if(txt) txt.textContent='20 ಆಗಸ್ಟ್ — 6 ಪ್ರತ್ಯೇಕ ಪತ್ರಿಕಾ ವರದಿಗಳು · 20 August — 6 separate news cuttings';
    }
  }

  function installUnifiedImageViewer(){
    if(!document.getElementById('unified-image-viewer-style')){
      const style=document.createElement('style');
      style.id='unified-image-viewer-style';
      style.textContent=`
        /* One consistent image viewer across the entire website */
        .site-image-lightbox{
          width:min(1040px,calc(100vw - 32px))!important;
          max-width:1040px!important;
          height:min(92dvh,900px)!important;
          max-height:92dvh!important;
          padding:0!important;
          border:0!important;
          border-radius:20px!important;
          overflow:hidden!important;
          background:#171113!important;
          color:#fff!important;
          box-shadow:0 32px 100px rgba(20,8,12,.48)!important;
        }
        .site-image-lightbox::backdrop{
          background:rgba(24,10,14,.80)!important;
          backdrop-filter:blur(8px) saturate(.9)!important;
        }
        .site-lightbox-shell{
          position:relative!important;
          width:100%!important;
          height:100%!important;
          min-height:0!important;
          display:flex!important;
          align-items:stretch!important;
          justify-content:center!important;
        }
        .site-lightbox-figure{
          width:100%!important;
          height:100%!important;
          margin:0!important;
          padding:0 58px 14px!important;
          display:flex!important;
          flex-direction:column!important;
          justify-content:center!important;
          align-items:center!important;
        }
        .site-lightbox-stage{
          width:100%!important;
          min-height:0!important;
          flex:1 1 auto!important;
          display:flex!important;
          justify-content:center!important;
          align-items:center!important;
          padding:22px 0 8px!important;
          overflow:hidden!important;
          background:transparent!important;
        }
        .site-lightbox-image{
          display:block!important;
          width:auto!important;
          height:auto!important;
          max-width:100%!important;
          max-height:calc(92dvh - 86px)!important;
          object-fit:contain!important;
          margin:auto!important;
          border-radius:5px!important;
          box-shadow:0 12px 38px rgba(0,0,0,.30)!important;
        }
        .site-lightbox-caption{
          flex:0 0 auto!important;
          max-width:900px!important;
          padding:6px 12px 2px!important;
          color:rgba(255,255,255,.78)!important;
          text-align:center!important;
          font:600 .78rem/1.45 "Noto Sans Kannada",Inter,sans-serif!important;
        }
        .site-lightbox-close,
        .modal-close{
          border:0!important;
          border-radius:0!important;
          background:transparent!important;
          box-shadow:none!important;
          backdrop-filter:none!important;
          color:#fff!important;
          text-shadow:0 1px 5px rgba(0,0,0,.72)!important;
        }
        .site-lightbox-close{
          position:absolute!important;
          top:10px!important;
          right:12px!important;
          z-index:100!important;
          width:36px!important;
          height:36px!important;
          padding:0!important;
          display:grid!important;
          place-items:center!important;
          font:300 2.1rem/1 Inter,Arial,sans-serif!important;
        }
        .site-lightbox-close:hover,
        .site-lightbox-close:active,
        .modal-close:hover,
        .modal-close:active{
          background:transparent!important;
          color:#fff!important;
          transform:scale(1.08)!important;
        }
        .site-lightbox-close:focus-visible,
        .modal-close:focus-visible{
          outline:2px solid rgba(255,255,255,.9)!important;
          outline-offset:2px!important;
        }
        main img{cursor:zoom-in;}
        .post-card img,.today-video-card img{cursor:pointer;}
        @media(max-width:700px){
          .site-image-lightbox{
            width:calc(100vw - 8px)!important;
            height:97dvh!important;
            max-height:97dvh!important;
            border-radius:15px!important;
          }
          .site-lightbox-figure{padding:0 38px 10px!important;}
          .site-lightbox-stage{padding:48px 0 5px!important;}
          .site-lightbox-image{max-height:calc(97dvh - 94px)!important;}
          .site-lightbox-close{
            top:7px!important;
            right:8px!important;
            width:34px!important;
            height:34px!important;
            font-size:2rem!important;
          }
          .site-lightbox-caption{padding:5px 4px 0!important;font-size:.72rem!important;}
        }
      `;
      document.head.appendChild(style);
    }

    let dialog=document.getElementById('siteImageLightbox');
    if(!dialog){
      dialog=document.createElement('dialog');
      dialog.id='siteImageLightbox';
      dialog.className='site-image-lightbox';
      dialog.innerHTML='<div class="site-lightbox-shell"><button class="site-lightbox-close" type="button" aria-label="Close">×</button><figure class="site-lightbox-figure"><div class="site-lightbox-stage"><img class="site-lightbox-image" alt=""></div><figcaption class="site-lightbox-caption"></figcaption></figure></div>';
      document.body.appendChild(dialog);
      dialog.querySelector('.site-lightbox-close').addEventListener('click',()=>dialog.close());
      dialog.addEventListener('click',event=>{if(event.target===dialog) dialog.close();});
    }

    const viewerImage=dialog.querySelector('.site-lightbox-image');
    const viewerCaption=dialog.querySelector('.site-lightbox-caption');
    const close=dialog.querySelector('.site-lightbox-close');
    if(close) close.textContent='×';

    const isImageHref=href=>/\.(?:avif|webp|png|jpe?g|gif)(?:[?#].*)?$/i.test(href||'');

    document.addEventListener('click',event=>{
      const img=event.target.closest('main img');
      if(!img) return;

      // Movement Updates already uses the richer postModal with post text/gallery controls.
      if(img.closest('.post-card')) return;

      // Preserve genuine external links such as YouTube/video links.
      const anchor=img.closest('a[href]');
      const href=anchor?.getAttribute('href')||'';
      if(href && !href.startsWith('#') && !isImageHref(href)) return;

      const src=isImageHref(href) ? href : (img.currentSrc||img.src);
      if(!src) return;

      event.preventDefault();
      event.stopPropagation();
      viewerImage.src=src;
      viewerImage.alt=img.alt||'Photo';
      viewerCaption.textContent=img.alt||'';
      if(!dialog.open) dialog.showModal();
    },true);
  }

  function boot(){
    syncPosts();
    featureLatest();
    updateToday();
    installUnifiedImageViewer();
    if(typeof renderFilters==='function'&&typeof renderPosts==='function'){ renderFilters(); renderPosts(); }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();