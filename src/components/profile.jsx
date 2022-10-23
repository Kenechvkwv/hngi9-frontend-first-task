import React from "react";
import pfpImage from "../media/profile.png";

function Profile() {
  return (
    <div className="row">
      <div className="col-12 text-center pt-4 pb-5">
        <img src={pfpImage} alt="" className="img-fluid" id="profile__img" />
        <h4 className="fw-bold ">Annette Black</h4>
      </div>
    </div>
  );
}

export default Profile;
