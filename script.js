// تغيير لون وشكل النافذة عند التمرير
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// تأثير الكتابة (typing effect)
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
  const texts = ['مطور مواقع', 'مصمم واجهات', 'مطور تطبيقات'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';

  function typeEffect() {
    currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
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

// قائمة الهامبرغر للجوال
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.right = '10%';
      navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
      navLinks.style.padding = '30px';
      navLinks.style.borderRadius = '20px';
      navLinks.style.border = '1px solid rgba(255,255,255,0.1)';
      navLinks.style.backdropFilter = 'blur(10px)';
      navLinks.style.width = '200px';
      navLinks.style.textAlign = 'center';
    }
  });
}

// تفعيل الرابط النشط في القائمة
const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
const navLinks_items = document.querySelectorAll('.nav-links a');

navLinks_items.forEach(link => {
  const linkHref = link.getAttribute('href');
  if (linkHref === currentLocation) {
    link.classList.add('active');
  }
});
