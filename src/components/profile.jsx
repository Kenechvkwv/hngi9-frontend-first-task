import React from "react";
import pfpImage from "../media/profile.png";

function Profile() {
  return (
    <div className="row">
      <div className="col-12 text-center pt-4 pb-4">
        <img src={pfpImage} alt="" className="img-fluid" id="profile__img" />
        <h4 className="fw-bold pt-4">Annette Black</h4>
      </div>
    </div>
  );
}

export default Profile;
