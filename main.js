document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // デモ用のダミーリンクでページ上部へ戻らないようにする
    document.querySelectorAll('a.js-noop').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
        });
    });

    // 資料請求ボタンはページ内の資料エリアへ
    const planBtn = document.querySelector('.plan-btn');
    if (planBtn) {
        planBtn.addEventListener('click', () => {
            const target = document.querySelector('#plan');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (!slider || slides.length === 0) {
        return;
    }
    
    function showSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${index * 20}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    // 矢印ボタンのイベント
    if (prevBtn) prevBtn.addEventListener('click', () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });
    
    // ページボタンのイベント
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
});