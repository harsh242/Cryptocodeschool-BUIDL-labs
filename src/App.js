import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Center from "./components/center";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen flex flex-col">
        <Header />
        <Center />
        <Footer />
      </div>
    </div>
  );
}

export default App;
