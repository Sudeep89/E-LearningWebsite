import React from "react";
import studentImg from "/student2.png";
import "../Style/BannerSty.css";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-3xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-blue-700">new Everyday!!!</span>
            </h1>
            <p className="text-sm">
              “People think of the ‘E’ in eLearning as ‘electronic’. And
              certainly it’s electronic. But here’s a few more E’s – Everywhere
              learning, Everyday learning, Engaging learning, Evolving learning
              ..”
            </p>
            <label className="input input-bordered flex items-center gap-2  dark:border-white dark:bg-slate-900 dark:text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow " placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 bg-blue-700  hover:scale-110 dark:bg-white dark:text-black">
            Get Started
          </button>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 md:ml-32 md:mt-32 lg:mt-10">
          <img
            src={studentImg}
            className="w-90 h-90 animate-pulse"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
