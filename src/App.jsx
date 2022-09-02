import React from "react";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT,
} from "./containers";

import { CTA, Navbar, Brand } from "./components";

import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
