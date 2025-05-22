// ======= Автопрокрутка логотипов =======

const track = document.querySelector('.carousel-track');

let scrollSpeed = 1; // скорость прокрутки
let scrollPos = 0;

function autoScroll() {
  if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
    // Если дошли до конца — начать сначала
    scrollPos = 0;
  } else {
    scrollPos += scrollSpeed;
  }

  track.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}

// Автопрокрутка каждые 50 мс
let scrollInterval = setInterval(autoScroll, 50);

// Остановка при наведении
track.addEventListener('mouseenter', () => clearInterval(scrollInterval));
track.addEventListener('mouseleave', () => {
  scrollInterval = setInterval(autoScroll, 50);
});
