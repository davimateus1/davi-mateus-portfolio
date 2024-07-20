"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderButtonsProps {
  buttonStyles: string;
  containerStyles: string;
}

export const WorkSliderButtons = ({
  buttonStyles,
  containerStyles,
}: WorkSliderButtonsProps) => {
  const swiper = useSwiper();

  const handlePrev = () => swiper.slidePrev();
  const handleNext = () => swiper.slideNext();

  return (
    <div className={containerStyles}>
      <button className={buttonStyles}>
        <PiCaretLeftBold onClick={handlePrev} />
      </button>
      <button className={buttonStyles}>
        <PiCaretRightBold onClick={handleNext} />
      </button>
    </div>
  );
};
