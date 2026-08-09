/* ============================================================
   main.js - مؤسسة الوليد للإنسانية
   المنطق الأساسي للموقع (Slider, Counters, Animation)
   ============================================================ */

function initMain() {
    
    /* ============================================================
       1. Intersection Observer (Reveal Animation)
       ============================================================ */
    const observerOptions = {
        threshold: 0.1 // تفعيل الحركة عند ظهور 10% من العنصر
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                // اختياري: إزالة الكلاس لتكرار الحركة عند الصعود والنزول
                // entry.target.classList.remove("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    // Animation للبطاقات (تظهر مرة واحدة فقط)
    const cardObserverOptions = { threshold: 0.2 };
    const cardObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, cardObserverOptions);

    document.querySelectorAll('.program-card').forEach(card => cardObserver.observe(card));

    /* ============================================================
       2. Hero Background Slider
       ============================================================ */
    const slides = document.querySelectorAll('.hero-bg');
    if (slides.length > 0) {
        // البحث عن أي سلايد لديه كلاس active حالياً
        let currentSlide = 0;
        slides.forEach((slide, index) => {
            if (slide.classList.contains('active')) {
                currentSlide = index;
            }
        });

        // إذا لم يكن أي سلايد نشطاً، نفعّل الأول
        if (!slides[currentSlide].classList.contains('active')) {
            slides[0].classList.add('active');
            currentSlide = 0;
        }

        const slideInterval = 5000; // وقت العرض 5 ثواني

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            
            let nextEl = slides[currentSlide];
            if (nextEl.dataset.bg) {
                nextEl.style.backgroundImage = `url('${nextEl.dataset.bg}')`;
                nextEl.removeAttribute('data-bg');
            }
            
            nextEl.classList.add('active');
        }

        // بدء التبديل فوراً
        setInterval(nextSlide, slideInterval);
    }

    /* ============================================================
       3. Parallax Effect for Hero Text
       ============================================================ */
    const textGroup = document.querySelector('.text-group');
    if (textGroup) {
        window.addEventListener('scroll', function() {
            let scrollVal = window.pageYOffset;
            let moveAmount = (scrollVal * 0.5); 
            textGroup.style.transform = `translate(-50%, calc(-50% + ${moveAmount}px))`;
            textGroup.style.opacity = 1 - (scrollVal / 600); // يتلاشى أسرع قليلاً
        });
    }

    /* ============================================================
       4. Counters (العدادات)
       ============================================================ */
    function runCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(function(item) {
            const targetStr = item.getAttribute('data-target');
            if(!targetStr) return;
            
            // تنظيف الرقم من الرموز مثل +
            const target = parseInt(targetStr.replace(/[^0-9]/g, ''));
            if(isNaN(target)) return;

            let count = 0;
            const speed = target / 50; 

            const update = setInterval(function() {
                count += speed;
                if (count >= target) {
                    item.innerText = targetStr; // إرجاع النص الأصلي مع الرمز
                    clearInterval(update);
                } else {
                    item.innerText = Math.floor(count).toLocaleString(); // تنسيق الرقم مع فواصل
                }
            }, 30);
        });
    }

    // تشغيل العداد عندما يصبح مرئياً في الشاشة
    const statsSection = document.querySelector('.achievements-section');
    if(statsSection) {
        let countersStarted = false;
        const statsObserver = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !countersStarted) {
                runCounters();
                countersStarted = true;
            }
        });
        statsObserver.observe(statsSection);
    }

    /* ============================================================
       5. Gallery Modal (معرض الصور)
       ============================================================ */
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector('.close-modal');

    if(modal && modalImg && captionText && closeBtn) {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const overlayElement = this.querySelector('.img-overlay');
                const overlayText = overlayElement ? overlayElement.innerHTML : ""; 

                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = overlayText; 
            });
        });

        closeBtn.onclick = function() { 
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    /* ============================================================
       6. AP Carousel (الدائرة)
       ============================================================ */
    const apItems = document.querySelectorAll('.ap-carousel-item');
    const apDots = document.querySelectorAll('.dot');
    
    if(apItems.length > 0 && apDots.length > 0) {
        let currentApIndex = 0;

        function showApSlide(index) {
            apItems.forEach(item => item.classList.remove('active'));
            apDots.forEach(dot => dot.classList.remove('active'));
            
            apItems[index].classList.add('active');
            apDots[index].classList.add('active');
            currentApIndex = index;
        }

        function nextApSlide() {
            let nextIndex = (currentApIndex + 1) % apItems.length;
            showApSlide(nextIndex);
        }

        setInterval(nextApSlide, 3000);

        // إتاحة النقر على النقاط
        window.currentSlide = function(index) {
            // الـ index في HTML يبدأ من 1
            showApSlide(index - 1);
        };
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMain);
} else {
    initMain();
}
