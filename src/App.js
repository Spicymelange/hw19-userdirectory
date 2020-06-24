import React from "react";
import Nav from "./components/Nav.js"
import Wrapper from "./components/Wrapper.js"
import API from "./utils/API.js"
function App() {
  return (
    
      <div>
        <Nav />
        <Wrapper>{API.getUsers()}
          {/* <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} /> */}
        </Wrapper>
      </div>
  );
}

export default App;