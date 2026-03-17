// ✅ التأكد من شغل الهامبرغر في كل الصفحات
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn) {
    // شيل أي active قديم
    menuBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      navLinks.classList.toggle('show');
      
      const icon = menuBtn.querySelector('i');
      if (navLinks.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    };
    
    // غلق القائمة عند الضغط على رابط
    navLinks.querySelectorAll('a').forEach(link => {
      link.onclick = function() {
        navLinks.classList.remove('show');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      };
    });
    
    // غلق القائمة عند الضغط برا
    document.onclick = function(e) {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('show');
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    };
  }
});
