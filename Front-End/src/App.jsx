import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./Courses/Course";
import SignUp from "./components/SignUp";
import AboutUs from "./Courses/AboutUs";
import ContactUs from "./Courses/ContactUs";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [AuthUser, setAuthUser] = useAuth();
  console.log(AuthUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={AuthUser ? <Course /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
