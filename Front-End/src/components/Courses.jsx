import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import axios from "axios";
import Cards from "./Cards.jsx";
import { Link } from "react-router-dom";
function Courses() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const resp = await axios.get("http://localhost:4001/course");
        console.log(resp.data);
        setCourse(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container auto md:px-20 px-4">
        <div className="mt-6 item-center justify-center text-center">
          <h1 className="pt-20 text-2xl font-semibold md:text-4xl ml-12">
            We're delighted to have you{" "}
            <span className="text-blue-700">Here! :)</span>
          </h1>
          <p className="mt-12 ml-2">
            “People think of the ‘E’ in eLearning as ‘electronic’. And certainly
            it’s electronic. But here’s a few more E’s – Everywhere learning,
            Everyday learning, Engaging learning, Evolving learning ..”
          </p>
          <Link to="/">
            <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800  hover:scale-110 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-3">
          {course.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
