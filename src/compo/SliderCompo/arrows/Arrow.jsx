export const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button onClick={() => onClick()} className="slider__control prev">
      <i className="fa-solid fa-chevron-right"></i>      
      <div className="bg-slider nextBg"></div>
    </button>
  );
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
        <button onClick={() => onClick()} className="slider__control next">
            <i className="fa-solid fa-chevron-left"></i>
            <div className="bg-slider prevBg"></div>
          </button>
    );
  };
  