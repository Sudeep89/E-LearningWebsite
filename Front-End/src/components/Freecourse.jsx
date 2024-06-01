import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";

function Freecourse() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const resp = await axios.get("http://localhost:4001/course");
        console.log(resp.data);
        setCourse(resp.data.filter((data) => data.category === "Free"));
        console.log(resp.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);
  // const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Course</h1>
          <p>
            “Anyone who has never made a mistake has never tried anything new.”
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {course.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freecourse;
