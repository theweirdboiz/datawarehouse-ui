import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
  faLocationDot,
  faSun,
  faTemperatureEmpty,
  faDroplet,
  faEyeSlash,
  faGlassWaterDroplet,
  faWind,
  faUmbrellaBeach,
  faCaretDown,
  faCaretUp,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import Search from "./components/Content/Search";
import CardProp from "./components/Content/CardProp";
import CardWidget from "./components/Content/CardWidget";
import Widget from "./components/widget/Widget";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const date = "font-[900] text-[32px]";
  const detailDate = "text-[24px] text-[#888]";

  const contentTop = "flex items-center gap-x-10 mb-20";

  return (
    <>
      {load && <Loader />}
      <div className="p-5 my-3 mx-auto max-w-7xl bg-[#fff] rounded-xl shadow-md app">
        <div className="flex justify-between">
          <section className="content max-w-3xl text-primary">
            <div className={contentTop}>
              <div className="">
                <h3 className={date}>January 2022</h3>
                <div className={detailDate}>
                  <span>Thursday</span>,{" "}
                  <span className="text-[22px] text-primary">11:11 AM</span>
                </div>
              </div>
              <Search></Search>
            </div>
            <div className="content__detail mb-20">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Today overview</h4>
                <div className="">
                  <button className="text-sm font-medium text-linkColor">
                    More detail
                  </button>
                </div>
              </div>
              <div>
                <div className="content__detail-box grid grid-cols-3 gap-4 mt-6">
                  <CardProp />
                  <CardProp />
                  <CardProp />
                  <CardProp />
                  <CardProp />
                  <CardProp />
                </div>
              </div>
            </div>
            <div className="content__detail mb-20">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Weather 24h</h4>
                <div className="">
                  <button className="text-sm font-medium text-linkColor">
                    24h
                  </button>
                </div>
              </div>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <CardWidget time="Hiện tại"></CardWidget>
                </SwiperSlide>
                <SwiperSlide>
                  <CardWidget time="12:30"></CardWidget>
                </SwiperSlide>
                <SwiperSlide>
                  <CardWidget time="Hiện tại"></CardWidget>
                </SwiperSlide>
                <SwiperSlide>
                  <CardWidget time="12:30"></CardWidget>
                </SwiperSlide>
                <SwiperSlide>
                  <CardWidget time="Hiện tại"></CardWidget>
                </SwiperSlide>
                <SwiperSlide>
                  <CardWidget time="12:30"></CardWidget>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <section className="content__right text-white min-w-[320px]">
            <Widget></Widget>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
