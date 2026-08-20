// Banahatti Abhivruddhi — archived content: 14 Aug 2026
(() => {
  const DAY7 = [
    "assets/saradi-satyagraha-day-7-2026-08-14-01.webp",
    "assets/saradi-satyagraha-day-7-2026-08-14-02.webp",
    "assets/saradi-satyagraha-day-7-2026-08-14-03.webp"
  ];
  const POSTS = [
    {
      id:"saradi-satyagraha-day-7-2026-08-14", type:"Photo", date:"2026-08-14",
      title:"7th Day Relay Satyagraha — 14 August 2026",
      titleKn:"7ನೇ ದಿನದ ಸರದಿ ಸತ್ಯಾಗ್ರಹ — 14 ಆಗಸ್ಟ್ 2026",
      text:"Day 7 of the peaceful relay Satyagraha at Banahatti in support of the demand for the Praja Soudha.",
      textKn:"ಬನಹಟ್ಟಿಯಲ್ಲಿ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಾಣದ ಬೇಡಿಕೆಗೆ ಬೆಂಬಲವಾಗಿ ನಡೆಯುತ್ತಿರುವ ಶಾಂತಿಯುತ ಸರದಿ ಸತ್ಯಾಗ್ರಹದ 7ನೇ ದಿನದ ದೃಶ್ಯಗಳು.",
      mediaKind:"gallery", mediaUrls:DAY7, mediaUrl:DAY7[0], link:"#satyagraha", local:false, createdAt:3
    },
    {
      id:"news-coverage-2026-08-14", type:"Paper Cut", date:"2026-08-14",
      title:"14 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn:"14 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text:"Selected newspaper coverage dated 14 August 2026 records continuing public support for the Banahatti Praja Soudha movement.",
      textKn:"14 ಆಗಸ್ಟ್ 2026ರ ಆಯ್ದ ಪತ್ರಿಕಾ ವರದಿಗಳು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟಕ್ಕೆ ಮುಂದುವರಿದ ಜನಬೆಂಬಲವನ್ನು ದಾಖಲಿಸುತ್ತವೆ.",
      mediaKind:"gallery",
      mediaUrls:["assets/news-2026-08-14-kannadaprabha-01.webp","assets/news-2026-08-14-02.webp","assets/news-2026-08-14-03.webp","assets/news-2026-08-14-present-politics.webp","assets/news-2026-08-14-05.webp"],
      mediaUrl:"assets/news-2026-08-14-kannadaprabha-01.webp", link:"", local:false, createdAt:2
    },
    {
      id:"public-gathering-2026-08-13", type:"Photo", date:"2026-08-13",
      title:"13 August 2026: Public gathering in support of the Praja Soudha movement",
      titleKn:"13 ಆಗಸ್ಟ್ 2026: ಪ್ರಜಾಸೌಧ ಹೋರಾಟಕ್ಕೆ ಸಾರ್ವಜನಿಕ ಬೆಂಬಲದ ಸಭೆ",
      text:"A large public gathering in Banahatti during the continuing Praja Soudha movement.",
      textKn:"ಬನಹಟ್ಟಿಯಲ್ಲಿ ಮುಂದುವರಿದಿರುವ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಸಂದರ್ಭದಲ್ಲಿ ನಡೆದ ದೊಡ್ಡ ಸಾರ್ವಜನಿಕ ಸಭೆಯ ದೃಶ್ಯ.",
      mediaKind:"image", mediaUrl:"assets/photo-public-gathering-2026-08-13.webp", link:"#satyagraha", local:false, createdAt:1
    }
  ];
  if(typeof siteData!=="undefined" && Array.isArray(siteData.initialPosts)){
    POSTS.slice().reverse().forEach(post=>{
      const existing=siteData.initialPosts.find(p=>p.id===post.id);
      if(existing) Object.assign(existing,post); else siteData.initialPosts.unshift(post);
    });
  }
})();