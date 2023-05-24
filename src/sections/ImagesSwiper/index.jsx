import React from "react";
import image from "../../../public/assets/images/Image.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/core";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ImagesSwiper = () => {
  const images = [
    { id: 1, image: image },
    { id: 2, image: image },
    { id: 3, image: image },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("Slide change")}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              className="w-full h-72 object-cover bg-no-repeat bg-center bg-cover"
              src={image.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesSwiper;
