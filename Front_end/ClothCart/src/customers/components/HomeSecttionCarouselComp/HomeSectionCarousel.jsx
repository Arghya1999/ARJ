import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = ({data,sectionName}) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleSlideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActiveIndex(activeIndex + 1);
    }
  };

  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item} product={item} />
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 ">{sectionName} </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={{
            0: { items: 1 },
            720: { items: 2 },
            1024: { items: 5 },
          }}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          onSlideChanged={(e) => setActiveIndex(e.item)}
          ref={carouselRef}
        />
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={handleSlidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        )}
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={handleSlideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;


