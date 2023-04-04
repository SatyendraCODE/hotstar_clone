const sliders = [...document.querySelectorAll(".slider__container")];
const sliderControlPrev = [...document.querySelectorAll(".slider__control.prev")];
const sliderControlNext = [...document.querySelectorAll(".slider__control.next")];

sliders.forEach((slider, i) => {
  let isDragStart = false,
      isDragging = false,
      isSlide = false,
      prevPageX,
      prevScrollLeft,
      positionDiff;

  const sliderItem = slider.querySelector(".slider__item");
  var isMultislide = (slider.dataset.multislide === 'true');

  sliderControlPrev[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    slider.scrollLeft += -slideWidth;
    setTimeout(function(){ isSlide = false; }, 700);
  });

  sliderControlNext[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth ;
    slider.scrollLeft += slideWidth;
    setTimeout(function(){ isSlide = false; }, 700);
  });

  function autoSlide() {
    if(slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    let valDifference = slideWidth - positionDiff;
    if(slider.scrollLeft > prevScrollLeft) {
        return slider.scrollLeft += positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
    }
    slider.scrollLeft -= positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
  }

  function dragStart(e) {
    if (isSlide) return;
    isSlide = true;
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
    setTimeout(function(){ isSlide = false; }, 700);
  }

  function dragging(e) {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
  }

  function dragStop() {
    isDragStart = false;
    slider.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
  }

  addEventListener("resize", autoSlide);
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("touchstart", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("touchmove", dragging);
  slider.addEventListener("mouseup", dragStop);
  slider.addEventListener("touchend", dragStop);
  slider.addEventListener("mouseleave", dragStop);
});
