// تأثير كتابة بسيط في الصفحة الرئيسية
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
  const heroP = document.querySelector('.hero p');
  const words = ['مطور ومصمم مواقع', 'مطور تطبيقات', 'مصمم واجهات'];
  let i = 0;
  
  setInterval(() => {
    i = (i + 1) % words.length;
    heroP.textContent = words[i];
  }, 2000);
}
