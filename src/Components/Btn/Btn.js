import React from "react";
import "./Btn.css";
import Arrow from "../../Assets/ImgHistory/شققخص.svg";
const Btn = () => {
  return (
    <>
      <div className="btn-history">
        <div className="btn0">
          <img src={Arrow} alt="" />
          <p>عرض المزيد</p>
        </div>
      </div>
    </>
  );
};

export default Btn;
