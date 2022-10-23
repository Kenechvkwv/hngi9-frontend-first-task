import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <div className="row pt-3">
        <div className="col-lg-12 text-center">
          <div className="btn-grey button">
            <a
              href={props.link}
              className="text-decoration-none text-black fs-5 linkbold"
              id={props.id}
              target="_blank"
              rel="noopener noreferrer"
              ref_id={props.ref_id}
            >
              {props.linkname}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
