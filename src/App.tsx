import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SelectNavBar from "./Components/SelectNavBar";
import Home from "./routes/Home";
import "./global.css";

const App: React.FC = () => {

  return (
    <div className="container">
      <SelectNavBar />
      <HashRouter>
        <Route path="/" exact component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
