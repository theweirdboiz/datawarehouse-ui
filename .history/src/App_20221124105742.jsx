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
import Widget from "./components/Content/Widget";

function App() {
  const date = "font-[900] text-lg";
  const detailDate = "text-sm text-[#888]";

  const contentTop = "mt-[20px] flex items-center gap-x-10 mb-20";

  return (
    <div className="p-5 mx-auto max-w-7xl bg-[#fff]">
      <div className="flex justify-between">
        <section className="content max-w-3xl">
          <div className={contentTop}>
            <div className="flex-col">
              <h3 className={date}>January 2022</h3>
              <div className={detailDate}>Thursday, Jan 4, 2022</div>
            </div>
            <Search></Search>
          </div>
          <div className="content__detail mb-20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Today overview</h4>
              <div className="">
                <button className="text-sm font-medium text-[#009EFF]">
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
                <button className="text-sm font-medium text-[#009EFF]">
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
                <CardWidget></CardWidget>
              </SwiperSlide>
              <SwiperSlide>
                <CardWidget></CardWidget>
              </SwiperSlide>
              <SwiperSlide>
                <CardWidget></CardWidget>
              </SwiperSlide>
              <SwiperSlide>
                <CardWidget></CardWidget>
              </SwiperSlide>
              <SwiperSlide>
                <CardWidget></CardWidget>
              </SwiperSlide>
              <SwiperSlide>
                <CardWidget></CardWidget>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="content__right text-white min-w-[320px]">
          <Widget></Widget>
        </section>
      </div>
    </div>
  );
}

export default App;
