import React from "react";
import Header from "./component/Header";
import MarketingApp from "./component/MarketingApp";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
