// ======= Карусель баннеров =======
//===ваш баннер будет:
//==Л истаться вперёд/назад по кнопкам
//Автоматически скроллиться каждые 5 секунд
//Останавливаться при наведении курсора
//С лёгкостью расширяться новым слайдам и новым текстам/картинкам
//Все стили (цвет фона, высоту, отступы) вы можете менять в CSS-переменных и правилах .banner__slide.
// Получаем элементы

const slidesContainer = document.querySelector('.banner__slides');
const slides = document.querySelectorAll('.banner__slide');
const prevBtn = document.querySelector('.banner__nav.prev');
const nextBtn = document.querySelector('.banner__nav.next');

// Текущий индекс слайда
let currentIndex = 0;
// Общее количество слайдов
const totalSlides = slides.length;

// Функция показа слайда по индексу
function showSlide(index) {
  // Вычисляем смещение контейнера
  const offset = -index * 100; // в процентах
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Переключиться на следующий слайд
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Переключиться на предыдущий слайд
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Обработчики кликов на кнопки
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Автопрокрутка каждые 5 секунд
const AUTO_INTERVAL = 5000; // в миллисекундах
let autoSlide = setInterval(nextSlide, AUTO_INTERVAL);

// При наведении на баннер — останавливаем автопрокрутку
slidesContainer.addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});

// Когда мышь уходит — возобновляем автопрокрутку
slidesContainer.addEventListener('mouseleave', () => {
  autoSlide = setInterval(nextSlide, AUTO_INTERVAL);
});

// Показываем первый слайд при загрузке
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});
