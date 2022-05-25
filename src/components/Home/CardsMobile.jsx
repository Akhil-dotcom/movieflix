import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import "../../styles/Home.css";

const data = [
  {
    name: "Doctor Strange",
    image:
      "https://www.themoviedb.org/t/p/original/qUv51IFUvVRAP2379ThmA3eLJx6.jpg",
  },
  {
    name: "Uncharted",
    image:
      "https://www.themoviedb.org/t/p/original/yuvFyfOAO2UB5YP0HKgu8imtJul.jpg",
  },
  {
    name: "The Batman",
    image:
      "https://www.themoviedb.org/t/p/original/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
  },
  {
    name: "Ambulance",
    image:
      "https://www.themoviedb.org/t/p/original/rdOIqwR7P7fvTpC6LILSmQxEg6O.jpg",
  },
  {
    name: "Fantastic Beasts",
    image:
      "https://www.themoviedb.org/t/p/original/wQXb8y401ztnwlFCTLssnvAgGjF.jpg",
  },
];

function CardsMobile() {
  return (
    <div className="mySwiper">
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <div className="overlay"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CardsMobile;
