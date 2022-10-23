import React from "react";
import slacklogo from "../media/slackLogo.png";
import githublogo from "../media/githubLogo.png";

const LogoLink = () => {
  return (
    <div className="row">
      <div className="col-lg-12 text-center ">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={slacklogo} alt="" className="img-fluid circleimages" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={githublogo} alt="" className="img-fluid circleimages" />
        </a>
      </div>
    </div>
  );
};

export default LogoLink;
