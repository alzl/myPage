// 모든 슬라이드 컨테이너를 선택
document.querySelectorAll('.projectImages').forEach((container, index) => {
    let currentSlide = 0; // 현재 슬라이드의 인덱스
    const slides = container.querySelectorAll('.slide'); // 해당 컨테이너 내 슬라이드 요소들
    const slideCount = slides.length; // 슬라이드의 개수

    // 슬라이드를 보여주는 함수
    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none'); // 모든 슬라이드 숨김
        slides[n].style.display = 'block'; // 현재 슬라이드 표시
    }

    // 다음 슬라이드를 보여주는 함수
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount; // 다음 슬라이드 인덱스 계산
        showSlide(currentSlide); // 계산된 인덱스에 해당하는 슬라이드를 표시
    }

    // 페이지 로딩 시 첫 번째 슬라이드를 디스플레이
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // 3초 간격으로 다음 슬라이드 디스플레이
});
