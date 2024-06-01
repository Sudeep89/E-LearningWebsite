import React from "react";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { CartProvider } from "react-use-cart";

function Course() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="min-h-screen">
          <Courses />
        </div>
        <div className="mt-4">
          <Cart />
        </div>
        <Footer />
      </CartProvider>
    </>
  );
}

export default Course;
