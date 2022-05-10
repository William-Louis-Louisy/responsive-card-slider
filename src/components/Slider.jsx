import React from "react";

function Slider({ content, sliderId, lestStepValue, rightStepValue }) {
  //FUNCTION TO SLIDE TO THE LEFT
  const slideToLeft = () => {
    const slider = document.getElementById(`slider-${sliderId}`);
    slider.scrollLeft = slider.scrollLeft - { lestStepValue };
  };
  //FUNCTION TO SLIDE TO THE RIGHT
  const slideToRight = () => {
    const slider = document.getElementById(`slider-${sliderId}`);
    slider.scrollLeft = slider.scrollLeft + { rightStepValue };
  };

  return (
    <div id="wrapper">
      <div id="leftBtn" onClick={slideToLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </div>

      <div id={`slider-${sliderId}`}>{content}</div>

      <div id="rightBtn" onClick={slideToRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </div>
  );
}

export default Slider;
