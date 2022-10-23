import React from "react";
import image1 from "../media/Vector.png";
import image2 from "../media/I4G.png";

const Footer = () => {
  return (
    <div className="footer nodisplay pt-4">
      <div className="row text-center">
        <div className="col-lg-4 pe-6 ">
          <img src={image1} alt="" />
        </div>
        <div className="col-lg-4">
          <p className="text-grey">HNG Internship 9 Frontend Task</p>
        </div>
        <div className="col-lg-4 ps-6">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
