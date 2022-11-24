import React from "react";

const WidgetProp = () => {
  return (
    <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
      <h2 className="flex items-center w-[150px]">
        <FontAwesomeIcon className="" icon={faSun} />
        <span className="w-[120px] ml-auto">Mặt trời mọc / lặn</span>
      </h2>
      <h3 className="flex gap-x-1">
        <span>06:11 AM</span>
        <span>/</span>
        <span>17:13 PM</span>
      </h3>
    </div>
  );
};

export default WidgetProp;
