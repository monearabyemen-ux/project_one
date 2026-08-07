/* ============================================================
   faq.js - مؤسسة الوليد للإنسانية
   منطق قسم الأسئلة الشائعة (FAQ Modal & Accordion)
   ============================================================ */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. التحكم في فتح وإغلاق النافذة (Modal)
    const faqModal = document.getElementById('faqModal');
    const openBtn = document.getElementById('openFaq');
    const closeBtn = document.getElementById('closeFaq');

    if(openBtn && faqModal) {
        openBtn.onclick = () => faqModal.style.display = 'block';
    }
    
    if(closeBtn && faqModal) {
        closeBtn.onclick = () => faqModal.style.display = 'none';
    }

    // إغلاق عند النقر خارج المودال
    window.addEventListener('click', function(event) {
        if (event.target == faqModal) {
            faqModal.style.display = 'none';
        }
    });

    // 2. التحكم في الأسئلة (إظهار الحالي وإخفاء البقية - Accordion)
    const questions = document.querySelectorAll('.faq-q');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;

            // إغلاق أي إجابة أخرى مفتوحة
            document.querySelectorAll('.faq-a').forEach(el => {
                if (el !== answer) {
                    el.style.display = 'none';
                }
            });

            // تبديل حالة السؤال الحالي
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
