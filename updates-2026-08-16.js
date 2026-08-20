// Banahatti Abhivruddhi — archived content: 16 Aug 2026
(() => {
  const POSTS = [
    {
      id:"kulahalli-support-2026-08-16", type:"Update", date:"2026-08-16",
      title:"Kulahalli extends support for Praja Soudha in Banahatti",
      titleKn:"ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧಕ್ಕೆ ಕುಲಹಳ್ಳಿ ಗ್ರಾಮದಿಂದ ಬೆಂಬಲ",
      text:"Senior citizens, organisations and residents of Kulahalli passed a resolution supporting construction of the Praja Soudha in Banahatti and handed it over to the Banahatti Praja Soudha Horata Samiti.",
      textKn:"ಕುಲಹಳ್ಳಿ ಸಮಸ್ತ ಹಿರಿಯರು ಹಾಗೂ ಸಂಘ ಸಂಸ್ಥೆಗಳಿಂದ ಹಾಗೂ ಊರಿನ ಸಂಪೂರ್ಣ ಜನರಿಂದ ಬನಹಟ್ಟಿ ನಗರಕ್ಕೆ ಪ್ರಜಾಸೌಧ ನಿರ್ಮಿಸಬೇಕೆಂದು ಠರಾವು ಪಾಸ್ ಮಾಡಿ ಬನಹಟ್ಟಿ ನಗರದ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಸಮಿತಿಗೆ ನೀಡಲಾಯಿತು.",
      mediaKind:"image", mediaUrl:"assets/kulahalli-prajasoudha-2026-08-16.webp", link:"#updates", local:false, createdAt:10
    },
    {
      id:"news-coverage-2026-08-16", type:"Paper Cut", date:"2026-08-16",
      title:"16 August 2026 newspaper coverage: Praja Soudha movement",
      titleKn:"16 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿ: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ",
      text:"The 16 August 2026 newspaper report covers the Banahatti Praja Soudha movement and the Panjina Meravanige.",
      textKn:"16 ಆಗಸ್ಟ್ 2026ರ ಪತ್ರಿಕಾ ವರದಿ ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಪಂಜಿನ ಮೆರವಣಿಗೆಯನ್ನು ದಾಖಲಿಸುತ್ತದೆ.",
      mediaKind:"image", mediaUrl:"assets/news-2026-08-16-panjina-meravanige.webp", link:"", local:false, createdAt:9
    },
    {
      id:"saradi-satyagraha-2026-08-15", type:"Satyagraha", date:"2026-08-15",
      title:"15 August 2026 relay Satyagraha",
      titleKn:"15 ಆಗಸ್ಟ್ 2026: ಸರದಿ ಸತ್ಯಾಗ್ರಹ",
      text:"A photograph from the 15 August relay Satyagraha and public mobilisation for the Banahatti Praja Soudha movement.",
      textKn:"15 ಆಗಸ್ಟ್ 2026ರ ಸರದಿ ಸತ್ಯಾಗ್ರಹ ಮತ್ತು ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟದ ಜನಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರ.",
      mediaKind:"image", mediaUrl:"assets/saradi-satyagraha-2026-08-15.webp", link:"#satyagraha", local:false, createdAt:8
    }
  ];
  if(typeof siteData!=="undefined" && Array.isArray(siteData.initialPosts)){
    POSTS.slice().reverse().forEach(post=>{
      const existing=siteData.initialPosts.find(p=>p.id===post.id);
      if(existing) Object.assign(existing,post); else siteData.initialPosts.unshift(post);
    });
  }
})();