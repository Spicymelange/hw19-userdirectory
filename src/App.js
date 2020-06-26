import React from "react";
import Wrapper from "./components/Wrapper.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;

//when you are ready to host
//heroku login
//heroku create
//git push heroku master
//add mlab
