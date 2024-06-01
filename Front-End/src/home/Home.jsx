import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freecourse from "../components/Freecourse";
import Footer from "../components/Footer";
import { CartProvider } from "react-use-cart";

function Home() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Banner />
        <Freecourse />
        <Footer />
      </CartProvider>
    </>
  );
}

export default Home;
