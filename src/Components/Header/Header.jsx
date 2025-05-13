import React from "react";
import "../Header/Header.css";
import { headerBanner } from "../../Data/Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay settings
          loop={true} 
          modules={[Autoplay]} 
        >
          {headerBanner.map(({ img }, index) => (
            <SwiperSlide key={index}>
              <div className="header-wrapper container">
                <img src={img} alt="banner" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
};

export default Header;
