import React from "react";
import "./assets/css/style.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Center from "./components/center";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" flex flex-col">
        <Center />
        <Footer />
      </div>
    </div>
  );
}

export default App;
