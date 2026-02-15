// ===== Data =====
const articlesData = [
  {
    id: 1,
    title: "PlayStation 6 Specs Leaked: Next-Gen Console to Feature Custom AMD Chipset",
    excerpt: "Industry insiders reveal detailed specifications of Sony's upcoming console, promising a massive leap in performance.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=300&fit=crop",
    category: "news",
    badge: "NEWS",
    badgeClass: "badge-blue",
    author: "Sarah Kim",
    date: "Feb 15, 2026",
    readTime: "4 min read",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Kim&background=3498db&color=fff&size=32"
  },
  {
    id: 2,
    title: "Hollow Knight: Silksong Finally Gets Release Date After Years of Waiting",
    excerpt: "Team Cherry announces the long-awaited sequel will arrive this spring with expanded gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
    category: "news",
    badge: "NEWS",
    badgeClass: "badge-blue",
    author: "Mike Torres",
    date: "Feb 14, 2026",
    readTime: "3 min read",
    avatar: "https://ui-avatars.com/api/?name=Mike+Torres&background=2ecc71&color=fff&size=32"
  },
  {
    id: 3,
    title: "Genshin Impact 5.4 Redeem Codes - Free Primogems & Materials",
    excerpt: "Grab these active redemption codes for free Primogems, Mora, and enhancement materials.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
    category: "giftcodes",
    badge: "GIFT CODE",
    badgeClass: "badge-green",
    author: "Emma Liu",
    date: "Feb 14, 2026",
    readTime: "3 min read",
    avatar: "https://ui-avatars.com/api/?name=Emma+Liu&background=9b59b6&color=fff&size=32"
  },
  {
    id: 4,
    title: "Honkai Star Rail 3.0 Gift Codes - Free Stellar Jade",
    excerpt: "All active redemption codes for Honkai Star Rail's latest update with free Stellar Jade and credits.",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&h=300&fit=crop",
    category: "giftcodes",
    badge: "GIFT CODE",
    badgeClass: "badge-green",
    author: "David Park",
    date: "Feb 13, 2026",
    readTime: "2 min read",
    avatar: "https://ui-avatars.com/api/?name=David+Park&background=e67e22&color=fff&size=32"
  },
  {
    id: 5,
    title: "Starfield: Shattered Space DLC Review - A Redemption Arc Worth Playing",
    excerpt: "Bethesda's latest expansion addresses many core game criticisms with compelling new content.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&h=300&fit=crop",
    category: "reviews",
    badge: "REVIEW",
    badgeClass: "badge-orange",
    author: "Alex Chen",
    date: "Feb 13, 2026",
    readTime: "6 min read",
    avatar: "https://ui-avatars.com/api/?name=Alex+Chen&background=e74c3c&color=fff&size=32"
  },
  {
    id: 6,
    title: "Nintendo Switch 2: Everything We Know About the Upcoming Hardware",
    excerpt: "From display specs to backwards compatibility, here's a roundup of all confirmed and rumored features.",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&h=300&fit=crop",
    category: "news",
    badge: "NEWS",
    badgeClass: "badge-blue",
    author: "Lisa Wang",
    date: "Feb 12, 2026",
    readTime: "7 min read",
    avatar: "https://ui-avatars.com/api/?name=Lisa+Wang&background=1abc9c&color=fff&size=32"
  },
  {
    id: 7,
    title: "Wuthering Waves 2.5 Gift Codes - Free Astrite Rewards",
    excerpt: "Redeem these codes for free Astrite, Shell Credits, and upgrade materials in the latest patch.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=300&fit=crop",
    category: "giftcodes",
    badge: "GIFT CODE",
    badgeClass: "badge-green",
    author: "Tom Harris",
    date: "Feb 12, 2026",
    readTime: "2 min read",
    avatar: "https://ui-avatars.com/api/?name=Tom+Harris&background=e74c3c&color=fff&size=32"
  },
  {
    id: 8,
    title: "League of Legends Patch 16.3 Review - Sweeping Balance Changes",
    excerpt: "Massive mid-season update brings sweeping balance changes and a brand-new champion.",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=500&h=300&fit=crop",
    category: "reviews",
    badge: "REVIEW",
    badgeClass: "badge-orange",
    author: "James Lee",
    date: "Feb 11, 2026",
    readTime: "6 min read",
    avatar: "https://ui-avatars.com/api/?name=James+Lee&background=3498db&color=fff&size=32"
  }
];

const moreArticles = [
  {
    id: 9,
    title: "Cyberpunk 2077: Orion Project Teased by CD Projekt Red",
    excerpt: "The next Cyberpunk game is in early development with a new engine and expanded scope.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&h=300&fit=crop",
    category: "news",
    badge: "NEWS",
    badgeClass: "badge-blue",
    author: "Sarah Kim",
    date: "Feb 10, 2026",
    readTime: "4 min read",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Kim&background=3498db&color=fff&size=32"
  },
  {
    id: 10,
    title: "Zenless Zone Zero 2.0 Gift Codes - Free Polychrome & Dennies",
    excerpt: "All working redemption codes for ZZZ's biggest update yet with generous freebies.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=300&fit=crop",
    category: "giftcodes",
    badge: "GIFT CODE",
    badgeClass: "badge-green",
    author: "Tom Harris",
    date: "Feb 10, 2026",
    readTime: "2 min read",
    avatar: "https://ui-avatars.com/api/?name=Tom+Harris&background=e74c3c&color=fff&size=32"
  },
  {
    id: 11,
    title: "Final Fantasy VII Rebirth PC Port Review: Was the Wait Worth It?",
    excerpt: "Square Enix's PC adaptation brings stunning visuals but has some technical issues at launch.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b28?w=500&h=300&fit=crop",
    category: "reviews",
    badge: "REVIEW",
    badgeClass: "badge-orange",
    author: "Emma Liu",
    date: "Feb 9, 2026",
    readTime: "7 min read",
    avatar: "https://ui-avatars.com/api/?name=Emma+Liu&background=9b59b6&color=fff&size=32"
  },
  {
    id: 12,
    title: "Arknights 4.0 Gift Codes - Free Orundum & LMD",
    excerpt: "Redeem these limited-time codes for free Orundum, LMD, and recruitment permits.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
    category: "giftcodes",
    badge: "GIFT CODE",
    badgeClass: "badge-green",
    author: "David Park",
    date: "Feb 9, 2026",
    readTime: "5 min read",
    avatar: "https://ui-avatars.com/api/?name=David+Park&background=e67e22&color=fff&size=32"
  }
];

const trendingData = [
  "GTA VI Release Date",
  "PS6 Specs Leak",
  "Elden Ring DLC",
  "Switch 2 Pre-Order",
  "Valorant Champions",
  "Monster Hunter Wilds",
  "Hollow Knight Silksong",
  "Best GPU 2026"
];

const popularData = [
  { title: "GTA VI Pre-Orders Crash Rockstar Servers Within Minutes", views: "2.4M views", date: "Feb 15" },
  { title: "Nintendo Direct Announces 12 New Switch 2 Launch Titles", views: "1.8M views", date: "Feb 14" },
  { title: "Steam Breaks Concurrent User Record at 40 Million", views: "1.2M views", date: "Feb 13" },
  { title: "Xbox Game Pass Adds 15 Day-One Titles for March", views: "980K views", date: "Feb 12" },
  { title: "Fortnite Chapter 6 Map Revealed with Massive Changes", views: "875K views", date: "Feb 11" }
];

const releasesData = [
  { title: "Monster Hunter Wilds", platform: "PS5, Xbox, PC", month: "FEB", day: "28" },
  { title: "Metroid Prime 4", platform: "Switch 2", month: "MAR", day: "15" },
  { title: "Death Stranding 2", platform: "PS5", month: "MAR", day: "22" },
  { title: "Doom: The Dark Ages", platform: "Multi-platform", month: "APR", day: "10" },
  { title: "Fable", platform: "Xbox, PC", month: "MAY", day: "06" }
];

const videosData = [
  {
    title: "GTA VI Official Gameplay Trailer Breakdown & Analysis",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=340&fit=crop",
    duration: "18:24",
    views: "5.2M views",
    date: "2 days ago"
  },
  {
    title: "Top 10 Most Anticipated Games of 2026",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=340&fit=crop",
    duration: "22:15",
    views: "1.8M views",
    date: "3 days ago"
  },
  {
    title: "PS6 vs Xbox Next: Hardware Comparison Deep Dive",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600&h=340&fit=crop",
    duration: "15:48",
    views: "3.1M views",
    date: "5 days ago"
  }
];

const reviewsData = [
  { title: "Elden Ring: Nightreign", platform: "PS5, Xbox, PC", score: 9.5, image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=250&fit=crop" },
  { title: "Monster Hunter Wilds", platform: "PS5, Xbox, PC", score: 9.2, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop" },
  { title: "Avowed", platform: "Xbox, PC", score: 8.1, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=250&fit=crop" },
  { title: "Like a Dragon: Pirate", platform: "Multi-platform", score: 8.8, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop" }
];

const tagsData = [
  "PlayStation", "Xbox", "Nintendo", "PC Gaming", "RPG", "FPS", "Open World",
  "Indie Games", "VR", "Gift Codes", "Retro Gaming", "Game Pass", "Steam", "Gacha"
];

// ===== DOM Elements =====
const trendingScroll = document.getElementById('trendingScroll');
const articlesGrid = document.getElementById('articlesGrid');
const popularList = document.getElementById('popularList');
const releasesList = document.getElementById('releasesList');
const videoGrid = document.getElementById('videoGrid');
const reviewsGrid = document.getElementById('reviewsGrid');
const tagsCloud = document.getElementById('tagsCloud');
const filterTabs = document.getElementById('filterTabs');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const backToTop = document.getElementById('backToTop');
const newsletterForm = document.getElementById('newsletterForm');

// ===== Render Functions =====

function renderArticleCard(article, index) {
  return `
    <article class="article-card" style="animation-delay: ${index * 0.06}s" data-category="${article.category}">
      <div class="article-card-img">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
      </div>
      <div class="article-card-body">
        <span class="badge ${article.badgeClass}">${article.badge}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <div class="article-meta">
          <div class="article-meta-left">
            <img src="${article.avatar}" alt="${article.author}">
            <span>${article.author}</span>
          </div>
          <span>${article.readTime}</span>
        </div>
      </div>
    </article>
  `;
}

function renderTrending() {
  trendingScroll.innerHTML = trendingData.map((item, i) =>
    `<a class="trending-item" href="#"><span class="trending-num">${String(i + 1).padStart(2, '0')}</span> ${item}</a>`
  ).join('');
}

function renderArticles(articles) {
  articlesGrid.innerHTML = articles.map((a, i) => renderArticleCard(a, i)).join('');
}

function renderPopular() {
  popularList.innerHTML = popularData.map((item, i) => `
    <div class="popular-item">
      <span class="popular-num">${i + 1}</span>
      <div class="popular-item-content">
        <h4>${item.title}</h4>
        <div class="popular-item-meta">${item.views} &bull; ${item.date}</div>
      </div>
    </div>
  `).join('');
}

function renderReleases() {
  releasesList.innerHTML = releasesData.map(item => `
    <div class="release-item">
      <div class="release-date-box">
        <span class="month">${item.month}</span>
        <span class="day">${item.day}</span>
      </div>
      <div class="release-info">
        <h4>${item.title}</h4>
        <span>${item.platform}</span>
      </div>
    </div>
  `).join('');
}

function renderVideos() {
  videoGrid.innerHTML = videosData.map(video => `
    <div class="video-card">
      <div class="video-thumb">
        <img src="${video.image}" alt="${video.title}" loading="lazy">
        <div class="play-overlay">
          <div class="play-btn">
            <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <span class="video-duration">${video.duration}</span>
      </div>
      <div class="video-info">
        <h3>${video.title}</h3>
        <div class="video-meta">
          <span>${video.views}</span>
          <span>&bull;</span>
          <span>${video.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderReviews() {
  reviewsGrid.innerHTML = reviewsData.map(review => {
    const scoreClass = review.score >= 9 ? 'score-high' : review.score >= 7 ? 'score-mid' : 'score-low';
    return `
      <div class="review-card">
        <div class="review-img">
          <img src="${review.image}" alt="${review.title}" loading="lazy">
          <div class="review-score ${scoreClass}">${review.score}</div>
        </div>
        <div class="review-body">
          <h3>${review.title}</h3>
          <span class="platform">${review.platform}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderTags() {
  tagsCloud.innerHTML = tagsData.map(tag =>
    `<span class="tag">${tag}</span>`
  ).join('');
}

// ===== Filter Tabs =====
let currentFilter = 'all';
let allArticles = [...articlesData];

filterTabs.addEventListener('click', (e) => {
  if (!e.target.classList.contains('filter-tab')) return;
  
  filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  
  currentFilter = e.target.dataset.filter;
  const filtered = currentFilter === 'all' 
    ? allArticles 
    : allArticles.filter(a => a.category === currentFilter);
  
  renderArticles(filtered);
});

// ===== Load More =====
let hasLoadedMore = false;

loadMoreBtn.addEventListener('click', () => {
  if (!hasLoadedMore) {
    allArticles = [...allArticles, ...moreArticles];
    const filtered = currentFilter === 'all' 
      ? allArticles 
      : allArticles.filter(a => a.category === currentFilter);
    renderArticles(filtered);
    hasLoadedMore = true;
    loadMoreBtn.textContent = 'No More Articles';
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.opacity = '0.5';
  }
});

// ===== Search =====
searchToggle.addEventListener('click', () => {
  searchOverlay.classList.add('active');
  searchInput.focus();
});

searchClose.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
  searchInput.value = '';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchOverlay.classList.remove('active');
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchOverlay.classList.add('active');
    searchInput.focus();
  }
});

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  if (!query) {
    const filtered = currentFilter === 'all' 
      ? allArticles 
      : allArticles.filter(a => a.category === currentFilter);
    renderArticles(filtered);
    return;
  }
  const results = allArticles.filter(a => 
    a.title.toLowerCase().includes(query) || 
    a.excerpt.toLowerCase().includes(query) ||
    a.category.toLowerCase().includes(query)
  );
  renderArticles(results);
});

// ===== Theme Toggle =====
const iconMoon = document.querySelector('.icon-moon');
const iconSun = document.querySelector('.icon-sun');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'light') {
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block';
  } else {
    iconMoon.style.display = 'block';
    iconSun.style.display = 'none';
  }
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
});

// Init theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// ===== Mobile Menu =====
mobileMenuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  const spans = mobileMenuBtn.querySelectorAll('span');
  if (mainNav.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// ===== Back to Top =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Newsletter =====
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = newsletterForm.querySelector('input');
  const btn = newsletterForm.querySelector('button');
  btn.textContent = 'Subscribed!';
  btn.style.background = '#2ecc71';
  btn.style.color = '#fff';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
});

// ===== Init =====
renderTrending();
renderArticles(articlesData);
renderPopular();
renderReleases();
renderVideos();
renderReviews();
renderTags();
