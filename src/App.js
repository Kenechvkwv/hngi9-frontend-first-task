import React from "react";
import Profile from "./components/profile";
import Buttons from "./components/linkbuttons";

function App() {
  return (
    <div className="app container">
      <Profile />
      <Buttons link="#" linkname="Twitter" />
      <Buttons link="#" linkname="Instagram" />
    </div>
  );
}

export default App;
