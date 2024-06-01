import React from "react";

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container auto md:px-20 px-4">
        <div className="mt-12 item-center justify-center text-center">
          <h1 className="pt-20 text-2xl font-semibold md:text-4xl animate-pulse bg-gradient-to-r from-pink-500  to-violet-500 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-5 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 w-150 px-3 py-3 rounded-md">
            At our online learning platform, we're committed to empowering
            learners of all backgrounds and ages to pursue their educational
            goals from anywhere in the world. With a diverse range of courses
            spanning various subjects, our platform offers flexible learning
            opportunities tailored to individual needs. Whether you're seeking
            to enhance your professional skills, explore new interests, or
            pursue academic advancement, we provide engaging and interactive
            learning experiences designed to accommodate different learning
            styles
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
