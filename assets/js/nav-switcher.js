// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
  // 创建并添加语言切换按钮到页面
  createLanguageSwitcher();
  
  // 更新导航菜单
  updateNavigationMenu();
});

function createLanguageSwitcher() {
  var currentPath = window.location.pathname;
  var isEnPage = currentPath.startsWith('/en/');
  var isHomePage = currentPath === '/' || currentPath === '/index.html';
  
  // 构建对应语言页面的 URL
  var altLang = isEnPage ? 'zh' : 'en';
  var altLangLabel = isEnPage ? '中文' : 'English';
  var currentLangLabel = isEnPage ? 'English' : '中文';
  
  var altUrl;
  if (isHomePage) {
    // 首页特殊处理
    altUrl = isEnPage ? '/' : '/en/';
  } else {
    // 其他页面：切换 /en/ 前缀
    altUrl = isEnPage ? currentPath.replace(/^\/en/, '') : '/en' + currentPath;
  }
  
  // 确保 URL 不以 // 开头
  altUrl = altUrl.replace(/^\/\//, '/');
  
  // 创建语言切换按钮 HTML
  var switcherHtml = '<nav class="language-switcher">' +
                     '<span class="current-lang">' + currentLangLabel + '</span>' +
                     '<a href="' + altUrl + '" class="alt-lang">' + altLangLabel + '</a>' +
                     '</nav>';
  
  // 将语言切换按钮添加到 body 开头
  document.body.insertAdjacentHTML('afterbegin', switcherHtml);
}

function updateNavigationMenu() {
  // Get page language from URL path
  var isEnPage = window.location.pathname.startsWith('/en/');
  var currentLang = isEnPage ? 'en' : 'zh';
  
  // Navigation data for different languages
  // Note: For default language (zh), permalinks don't include language prefix
  // For other languages (en), we need to add /en/ prefix manually
  var navData = {
    'zh': [
      { title: '首页', url: '/' },
      { title: '简历', url: '/cv/' },
      { title: '出版物', url: '/publications/' },
      { title: '新闻', url: '/news/' },
      { title: '博客', url: '/blog/' },
      { title: '关于', url: '/about/' }
    ],
    'en': [
      { title: 'Home', url: '/en/' },
      { title: 'CV', url: '/en/cv/' },
      { title: 'Publications', url: '/en/publications/' },
      { title: 'News', url: '/en/news/' },
      { title: 'Blog', url: '/en/blog/' },
      { title: 'About', url: '/en/about/' }
    ]
  };
  
  // Get navigation items for current language
  var navItems = navData[currentLang] || navData['zh'];
  
  // Find the navigation container
  var navContainer = document.querySelector('ul.visible-links');
  if (!navContainer) return;
  
  // Clear existing navigation items
  navContainer.innerHTML = '';
  
  // Add navigation items
  navItems.forEach(function(item) {
    var li = document.createElement('li');
    li.className = 'masthead__menu-item';
    
    var a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.title;
    
    li.appendChild(a);
    navContainer.appendChild(li);
  });
}
