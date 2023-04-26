export const handleHoverAnimation = (e) => {
    let ListEle = e.currentTarget.parentElement;
    let UlParentEle = ListEle.parentElement.parentElement;
    let LeftOfListEleOffset = ListEle.offsetLeft;

    let ListEleLeftCordi = ListEle.getBoundingClientRect().left;
    let UlParentEleLeftLength = UlParentEle.getBoundingClientRect().left + 10;
    // console.log("data ",ListEleLeftCordi + " ", UlParentEleLeftLength);

    let ListEleRightLength =
      window.innerWidth - ListEle.getBoundingClientRect().right;
    let UlParentEleRightLength =
      10 +
      (window.innerWidth -
        UlParentEle.getBoundingClientRect().right);    

    if (window.innerWidth <= 1400) {
      if (LeftOfListEleOffset === 0) {
        e.currentTarget.parentElement.classList.add("hoverRight-slider");
        // console.log("class added to Left side slider item");
      }
      else if(UlParentEleLeftLength >= ListEleLeftCordi){
        e.currentTarget.parentElement.classList.add("hoverRight-slider");
        // console.log("class added to Left side slider item");
      }
      if (ListEleRightLength < 50) {
        e.currentTarget.parentElement.classList.add("hoverLeft-slider");
        // console.log("class added to right side slider item");
      }
    } else if (LeftOfListEleOffset >= 1134) {
      if (UlParentEleRightLength > ListEleRightLength) {
        e.currentTarget.parentElement.classList.add("hoverLeft-slider");
        // console.log("class added to right side slider item");
      }
      else if(UlParentEleLeftLength >= ListEleLeftCordi){
        e.currentTarget.parentElement.classList.add("hoverRight-slider");
        // console.log("class added to Left side slider item");
      }
      else{
        e.currentTarget.parentElement.classList.add("hover-slider");
        // console.log("class added to normal slider item");
        }
    }
    else{
      if (LeftOfListEleOffset === 0) {
        e.currentTarget.parentElement.classList.add("hoverRight-slider");
        // console.log("class added to Left side slider item");
      }
      else if(UlParentEleLeftLength >= ListEleLeftCordi){
        e.currentTarget.parentElement.classList.add("hoverRight-slider");
        // console.log("class added to Left side slider item");
      }
      else{
      e.currentTarget.parentElement.classList.add("hover-slider");
      // console.log("class added to normal slider item");
      }
    }
  };