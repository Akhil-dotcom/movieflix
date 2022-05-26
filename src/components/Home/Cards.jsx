import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import "../../styles/Home.css";
import { MdOutlineArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

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

function Cards() {
  const [cardIndex, setcardIndex] = useState(0);

  const incrementCard = () => {
    if (cardIndex === data.length - 1) {
      return;
    }
    setcardIndex(cardIndex + 1);
  };
  const decrementCard = () => {
    if (cardIndex === 0) {
      return;
    }
    setcardIndex(cardIndex - 1);
  };

  return (
    <div>
      <div className="mySwiper cardsMobile">
        <Swiper
          initialSlide={3}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <div className="overlay"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* swiper desktop */}
      <div className="cards">
        <div className="cards__scroll">
          <div className="cards__single">
            <img src={data[cardIndex].image} alt="" />
            <h3>{data[cardIndex].name}</h3>
            <div className="overlay"></div>
            <button onClick={decrementCard} className="cards__btnleft cardBtn">
              <MdArrowBackIosNew color="#fff" size={20} />
            </button>
            <button onClick={incrementCard} className="cards__btnrt cardBtn">
              <MdOutlineArrowForwardIos color="#fff" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
