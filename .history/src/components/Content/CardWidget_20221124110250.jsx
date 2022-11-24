import React from "react";

const CardWidget = () => {
  return (
    <div className="shadow-2xl content__detail-item p-5 rounded-xl cursor-pointer ">
      <div className="speed flex flex-col">
        <h4 className="text-[#888] text-center">Hiện tại</h4>
        <div className="flex items-center justify-between">
          <img src="https://data.thoitiet.vn/weather/icons/04d@2x.png" alt="" />
          <span className="text-[#888]">96%</span>
        </div>
        <div className="text-center">
          <h3>May cum</h3>
          <h3 className="text-[24px] font-semibold">24 / 24</h3>
        </div>
      </div>
    </div>
  );
};

export default CardWidget;
