import React from "react";
import Home from "./pages/Home";

import GlobalStyles from "./components/GlobalStyles";
import {Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      {/* <h1>Catalog App</h1> */}
      
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
      <Home />
      </Route>
    </div>
  );
}

export default App;
