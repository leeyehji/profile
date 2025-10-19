const timelineItems = document.querySelectorAll('.timeline-item');

function updateTimelineColors() {
  const centerY = window.innerHeight / 2;

  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - centerY);

    // 화면 중앙에 가까울수록 1에 가까운 값
    let intensity = Math.max(0, 1 - distance / (window.innerHeight / 2));

    // intensity 0~1 → 색상에 반영 (회색 -> 검정)
    const grayValue = Math.round(204 - intensity * 204); // 204=ccc
    item.querySelector('.timeline-date').style.color = `rgb(${grayValue},${grayValue},${grayValue})`;
    item.querySelector('.timeline-content').style.color = `rgb(${grayValue},${grayValue},${grayValue})`;
  });
}

window.addEventListener('scroll', updateTimelineColors);
window.addEventListener('resize', updateTimelineColors);
updateTimelineColors(); // 초기 실행
