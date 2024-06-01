import React, { useState } from "react";
import CourseDet from "./CourseDet";
import { useCart } from "react-use-cart";

function Cards({ item }) {
  const { addItem } = useCart();
  return (
    <>
      <div className="mt-4 p-3">
        <div className="card md:w-82 w-92 h-full shadow-xl bg-gray-100 hover:bg-slate-200 duration-200 transition eas-in-out hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-sm">
              {item.name}
              <div className="badge bg-blue-700 text-white dark:bg-white dark:text-black">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <button
                className="cursor-pointer ml-32 badge badge-outline hover:bg-blue-700 hover:text-white transform transition hover:scale-110 duration-500 dark:hover:bg-white dark:hover:text-black"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Buy Now
              </button>
              <button
                className="cursor-pointer badge badge-outline hover:bg-blue-700 hover:text-white transform transition hover:scale-110 duration-500 dark:hover:bg-white dark:hover:text-black"
                onClick={() => addItem(item)}
              >
                Add to Cart
              </button>
              <CourseDet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
