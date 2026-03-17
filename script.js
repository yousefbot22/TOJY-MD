// script.js
// تغيير لون النافذة عند التمرير
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// قائمة الهامبرغر للجوال
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    
    // تغيير شكل الزر
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
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      menuBtn.querySelector('i').classList.remove('fa-times');
      menuBtn.querySelector('i').classList.add('fa-bars');
    });
  });
}

// تأثير الكتابة المتحسن
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const texts = ['مطور مواقع', 'مصمم واجهات', 'مطور تطبيقات', 'مستشار تقني'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isWaiting = false;

  function typeEffect() {
    if (isWaiting) return;
    
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isWaiting = true;
      setTimeout(() => {
        isDeleting = true;
        isWaiting = false;
        typeEffect();
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      isWaiting = true;
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(() => {
        isWaiting = false;
        typeEffect();
      }, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  typeEffect();
}

// تفعيل الرابط النشط
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// منع الروابط من اعادة تحميل الصفحة للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// تحميل متأخر للصور
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        imgObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imgObserver.observe(img);
  });
}

// رسالة ترحيب في الكونسول
console.log('مرحباً بيك في موقع TOJI');
