const sliderDots = Array.from(window.document.querySelectorAll('.slider__dot'));
const sliderItems = Array.from(window.document.querySelectorAll('.slider__item'));


function moveSlider(arrowIndex=0, dotIndex=0) {
  const itemActive = window.document.querySelector('.slider__item_active');
  const indexActive = sliderItems.indexOf(itemActive);
  let newIndex = dotIndex

  if (arrowIndex) {
     newIndex = indexActive + arrowIndex;
    if (newIndex >= sliderItems.length) {
      newIndex = sliderItems.length - newIndex;
    } else if (newIndex <= -1 ) {
      newIndex = sliderItems.length + newIndex;
    }
  }

  sliderItems[indexActive].classList.remove('slider__item_active');
  sliderItems[newIndex].classList.add('slider__item_active');

  sliderDots[indexActive].classList.remove('slider__dot_active');
  sliderDots[newIndex].classList.add('slider__dot_active');
}

const slider = {
  next: window.document.querySelector('.slider__arrow_next'),
  prev: window.document.querySelector('.slider__arrow_prev'),
}

slider.next.onclick = () => {
  moveSlider(1);
}

slider.prev.onclick = () => {
  moveSlider(-1);
}

sliderDots.forEach(dot => {
  dot.onclick = () => {
    const dotIndex = sliderDots.indexOf(dot)
    moveSlider(0, dotIndex)
  }
})