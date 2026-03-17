// script.js - النسخة النهائية
document.addEventListener('DOMContentLoaded', function() {
  
  // ✅ تغيير لون النافذة عند التمرير
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ✅ قائمة الهامبرغر - مضبوطة 100%
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn) {
    // فتح/غلق القائمة
    menuBtn.addEventListener('click', function(e) {
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
    });
    
    // غلق القائمة عند الضغط على رابط
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('show');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
    
    // غلق القائمة عند الضغط براها
    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('show');
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // ✅ تأثير الكتابة - للصفحة الرئيسية
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    const texts = ['مطور مواقع', 'مصمم واجهات', 'مطور تطبيقات'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    }

    typeEffect();
  }

  // ✅ تفعيل الرابط النشط
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
