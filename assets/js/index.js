// 바꾸고 싶은 이미지 경로 리스트
const images = [
  'assets/image/5.jpg',
  'assets/image/8.jpg',
  'assets/image/9.jpg',
  'assets/image/2.jpg',
  'assets/image/15.jpg'
];

// 이미지 바뀔 대상 엘리먼트
const visual = document.querySelector('.main-visu');
let current = 0;

// 초기 배경
visual.style.backgroundImage = `url(${images[current]})`;
visual.style.transition = 'background-image 0.5s ease-in-out';

// fade 효과용 오버레이 이미지 추가
const fadeLayer = document.createElement('div');
fadeLayer.style.position = 'absolute';
fadeLayer.style.top = '0';
fadeLayer.style.left = '0';
fadeLayer.style.width = '100%';
fadeLayer.style.height = '100%';
fadeLayer.style.backgroundSize = 'cover';
fadeLayer.style.backgroundPosition = 'center';
fadeLayer.style.opacity = '0';
fadeLayer.style.transition = 'opacity 1.5s ease-in-out';
fadeLayer.style.zIndex = '0'; // 필요시 조정
visual.appendChild(fadeLayer);

// 4초마다 이미지 전환
setInterval(() => {
  const next = (current + 1) % images.length;

  // 다음 이미지 준비
  fadeLayer.style.backgroundImage = `url(${images[next]})`;
  fadeLayer.style.opacity = '1';

  // fade 완료 후 메인 배경 전환 & 초기화
  setTimeout(() => {
    visual.style.backgroundImage = `url(${images[next]})`;
    fadeLayer.style.opacity = '0';
    current = next;
  }, 1500); // fade 시간과 동일하게
}, 4000); // 4초마다 반복



// 스크롤 애니메이션
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 1
  });

  elements.forEach(el => observer.observe(el));
});