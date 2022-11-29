import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { lazy, Suspense } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import Search from "./components/Content/Search";
import CardProp from "./components/Content/CardProp";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { startLoadWeathers, updateDateNow } from "./reduxs/weatherSlice";
import weatherTypes from "./reduxs/weatherTypes";
import Widget from "./components/widget/Widget";

function App() {
  const loading = useSelector((state) => state.weather.loading);
  const weathers = useSelector((state) => state.weather.weathers);
  const dispatch = useDispatch();

  const [now, setNow] = useState(new Date());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    dispatch(startLoadWeathers());
    dispatch({ type: weatherTypes.GET_WEATHERS });

    setInterval(() => setNow(new Date()), 1000);
  }, [dispatch]);

  const detailDate = "text-[24px] text-[#888]";
  const date = "font-[900] text-[32px]";
  const contentTop = "flex items-center gap-x-10 mb-20";

  return (
    <>
      {loading && <Loader />}
      <div className="p-5 my-3 mx-auto max-w-7xl bg-[#fff] rounded-xl shadow-md app">
        <div className="flex justify-between">
          <section className="content max-w-3xl text-primary">
            <div className={contentTop}>
              <div className="">
                <h3 className={date}>
                  {monthNames[now.getMonth()]} {now.getFullYear()}
                </h3>
                <div className={detailDate}>
                  <span>{days[now.getDay()]}</span>,{" "}
                  <span className="text-[22px] text-primary">
                    {now.getHours().toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}{" "}
                    :{" "}
                    {now.getMinutes().toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}{" "}
                    :{" "}
                    {now.getSeconds().toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}
                  </span>
                </div>
              </div>
              <Search></Search>
            </div>
            <div className="content__detail mb-20">
              <div>
                <div className="content__detail-box grid grid-cols-3 gap-4 mt-6">
                  {weathers.map((w) => {
                    return (
                      <CardProp
                        key={w.id}
                        provinceName={w.provinceName}
                        lowestTempurature={w.lowestTemperature}
                        highestTempurature={w.highestTemperature}
                        humidity={w.humidity * 100}
                        handleOnclick={() =>
                          dispatch({ type: weatherTypes.GET_WEATHER, id: w.id })
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="content__right text-white min-w-[400px]">
            <Widget />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
