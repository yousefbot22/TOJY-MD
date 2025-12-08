// تنعيم التمرير للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// إضافة تأثير عند التمرير
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.7)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.boxShadow = 'none';
    }
    
    // تأثيرات ظهور العناصر عند التمرير
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// تهيئة العناصر عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إعداد العناصر للرسوم المتحركة
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 1s ease, transform 1s ease';
    });
    
    // تأثير عند تحميل الصفحة
    const heroTitle = document.querySelector('.hero h1');
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(30px)';
    
    const heroTaglines = document.querySelectorAll('.hero .tagline');
    heroTaglines.forEach((tagline, index) => {
        tagline.style.opacity = '0';
        tagline.style.transform = 'translateY(30px)';
        tagline.style.transition = `opacity 1s ease ${0.5 + index * 0.3}s, transform 1s ease ${0.5 + index * 0.3}s`;
    });
    
    const developerName = document.querySelector('.developer-name');
    developerName.style.opacity = '0';
    developerName.style.transform = 'translateY(30px)';
    developerName.style.transition = 'opacity 1s ease 1.1s, transform 1s ease 1.1s';
    
    const heroButtons = document.querySelector('.hero-buttons');
    heroButtons.style.opacity = '0';
    heroButtons.style.transform = 'translateY(30px)';
    heroButtons.style.transition = 'opacity 1s ease 1.4s, transform 1s ease 1.4s';
    
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
        
        heroTaglines.forEach(tagline => {
            tagline.style.opacity = '1';
            tagline.style.transform = 'translateY(0)';
        });
        
        developerName.style.opacity = '1';
        developerName.style.transform = 'translateY(0)';
        
        heroButtons.style.opacity = '1';
        heroButtons.style.transform = 'translateY(0)';
        
        // عرض الأقسام التي تكون مرئية عند التحميل
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if(sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }, 300);
    
    // إضافة تأثيرات تفاعلية للأزرار
    const buttons = document.querySelectorAll('.btn, .link-btn, .whatsapp-link, .support-link, .footer-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            if(this.classList.contains('pulse')) return;
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // إضافة تأثير النقر على البطاقات
    const cards = document.querySelectorAll('.project-card, .link-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            if(e.target.tagName === 'A') return;
            this.style.transform = 'translateY(-15px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        });
    });
    
    // رسالة تأكيد عند النقر على روابط خارجية
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if(this.href.includes('whatsapp.com') || this.href.includes('chat.whatsapp.com')) {
                return; // لا تظهر رسالة لروابط واتساب
            }
            
            if(confirm('أنت على وشك الانتقال إلى موقع خارجي. هل تريد المتابعة؟')) {
                return;
            } else {
                e.preventDefault();
            }
        });
    });
    
    // تأثير المهارات
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        skill.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, 500 + index * 100);
    });
    
    // تحديث التاريخ في الفوتر تلقائياً
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.developer-rights');
    if(yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
    
    // إظهار رسالة ترحيب عند فتح الموقع
    setTimeout(() => {
        console.log('%c🚀 مرحباً بك في موقع𝑇𝑂𝐽𝑌 𝐵𝑂  !', 'color: #ff4d94; font-size: 18px; font-weight: bold;');
        console.log('%c👨‍💻 المطور: 𝑇𝑂𝐽𝑌-𝑀𝐷', 'color: #6a11cb; font-size: 16px;');
        console.log('%c🤖 المشروع: 𝑇𝑂𝐽𝑌 𝐵𝑂𝑇', 'color: #2575fc; font-size: 16px;');
    }, 1000);
});

// تتبع النقرات على الروابط الهامة
document.addEventListener('click', function(e) {
    if(e.target.closest('a')) {
        const link = e.target.closest('a');
        
        if(link.href.includes('chat.whatsapp.com/JAaRSbvH6cOEwvcFysFKHu')) {
            console.log('نقر على رابط دعم 𝑇𝑂𝐽𝑌 𝐵𝑂𝑇');
        }
        
        if(link.href.includes('whatsapp.com/channel/0029VbBAfP47z4kg3QmsCw2A')) {
            console.log('نقر على رابط القناة الرسمية');
        }
    }
});