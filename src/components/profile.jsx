import React from "react";
import pfpImage from "../media/profile.png";

function Profile() {
  return (
    <div className="profile">
      <div className="row">
        <div className="col-12 text-center pt-4">
          <img src={pfpImage} alt="" className="img-fluid" />
          <h4 className="fw-bold ">Annette Black</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
