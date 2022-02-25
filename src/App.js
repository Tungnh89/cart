import React from "react";
import CartItem from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <div className="bg-pink-100">
        <div className="container relative mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="bg-green-50 py-8">
        <div className="container mx-auto p-1">
          <CartItem />
        </div>
      </div>
    </div>
  );
}

export default App;
