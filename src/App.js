import React from "react";
import Profile from "./components/profile";
import Buttons from "./components/linkbuttons";

function App() {
  return (
    <div className="app container">
      <Profile />
      <Buttons
        link="https://www.twitter.com/kenechvkwv"
        linkname="Twitter"
        id="Twitter"
      />
      <Buttons
        link="https://training.zuri.team/"
        linkname="Zuri Team"
        id="btn__zuri"
      />
      <Buttons
        link="http://books.zuri.team "
        linkname="Zuri Books"
        id="books"
      />
      <Buttons
        link="https://books.zuri.team/"
        linkname="Python Books"
        id="book__python"
      />
      <Buttons
        link="https://background.zuri.team/"
        linkname="Background Check for Coders"
        id="pitch"
      />
      <Buttons
        link="https://books.zuri.team/design-rules"
        linkname="Design Books"
        id="book__design"
      />
    </div>
  );
}

export default App;
