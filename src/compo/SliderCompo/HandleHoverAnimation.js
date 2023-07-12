export const handleHoverAnimation = (e) => {
  let ListEle = e.currentTarget.parentElement;
  let UlParentEle = ListEle.parentElement.parentElement;
  let LeftOfListEleOffset = ListEle.offsetLeft;

  let ListEleLeftCordi = ListEle.getBoundingClientRect().left;
  let UlParentEleLeftLength = UlParentEle.getBoundingClientRect().left + 10;

  let ListEleRightLength =
    window.innerWidth - ListEle.getBoundingClientRect().right;
  let UlParentEleRightLength =
    10 +
    (window.innerWidth -
      UlParentEle.getBoundingClientRect().right);

  if (window.innerWidth <= 1400) {
    if (LeftOfListEleOffset === 0) {
      e.currentTarget.parentElement.classList.add("hoverRight-slider");
    }
    else if (UlParentEleLeftLength >= ListEleLeftCordi) {
      e.currentTarget.parentElement.classList.add("hoverRight-slider");
    }
    if (ListEleRightLength < 50) {
      e.currentTarget.parentElement.classList.add("hoverLeft-slider");
    }
    else {
      e.currentTarget.parentElement.classList.add("hover-slider");
    }
  } else if (LeftOfListEleOffset >= 1134) {
    if (UlParentEleRightLength > ListEleRightLength) {
      e.currentTarget.parentElement.classList.add("hoverLeft-slider");
    }
    else if (UlParentEleLeftLength >= ListEleLeftCordi) {
      e.currentTarget.parentElement.classList.add("hoverRight-slider");
    }
    else {
      e.currentTarget.parentElement.classList.add("hover-slider");
    }
  }
  else {
    if (LeftOfListEleOffset === 0) {
      e.currentTarget.parentElement.classList.add("hoverRight-slider");
    }
    else if (UlParentEleLeftLength >= ListEleLeftCordi) {
      e.currentTarget.parentElement.classList.add("hoverRight-slider");
    }
    else {
      e.currentTarget.parentElement.classList.add("hover-slider");
    }
  }
};