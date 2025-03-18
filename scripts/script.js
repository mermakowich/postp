const sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach(container => {
  const slider = container.querySelector('.slider');
  const prevButton = container.querySelector('.prev-button');
  const nextButton = container.querySelector('.next-button');
  const slides = Array.from(slider.querySelectorAll('img'));
  const slideCount = slides.length;
  let slideIndex = 0;

  const slide = () => {
    const imageWidth = slider.clientWidth;
    const slideOffset = -slideIndex * imageWidth;
    slider.style.transform = `translateX(${slideOffset}px)`;
  }

  prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    slide();
  });

  nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount;
    slide();
  });

  slide();
});