document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slider = document.querySelector('.slider');
    
    function showSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${index * 20}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    // 矢印ボタンのイベント
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });
    
    document.querySelector('.next-btn').addEventListener('click', () => {
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