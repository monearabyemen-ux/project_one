/* ============================================================
   components.js - مؤسسة الوليد للإنسانية
   منطق المكونات المشتركة (Header Scroll, Sidebar, etc.)
   ============================================================ */

function initComponents() {
    
    /* ============================================================
       1. Header Scroll Behavior (تغيير خلفية الهيدر عند النزول)
       ============================================================ */
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    if(header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // منطق الإخفاء والإظهار عند السحب
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // النزول للأسفل: إخفاء الهيدر
                header.classList.add('hidden-up');
            } else {
                // الصعود للأعلى: إظهار الهيدر
                header.classList.remove('hidden-up');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

            // منطق إضافة الخلفية عند مغادرة قمة الصفحة
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* ============================================================
       2. Mobile Menu Toggle (إن وجد)
       ============================================================ */
    const menuIcon = document.querySelector('.fa-bars');
    const nav = document.querySelector('nav ul');
    
    if(menuIcon && nav) {
        menuIcon.addEventListener('click', function() {
            nav.classList.toggle('active');
            // يمكن إضافة CSS إضافي لإظهار القائمة في الجوال
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}
