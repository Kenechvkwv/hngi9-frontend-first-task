import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <div className="row pt-5">
        <div className="col-lg-12 text-center">
          <button className="btn btn-grey">
            <a
              href={props.link}
              className="text-decoration-none text-black"
              id="twitter"
            >
              {props.linkname}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
