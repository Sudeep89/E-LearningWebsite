import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="max-w-screen-2xl container auto md:px-20 px-4 ">
        <div className="mt-12 item-center justify-center text-center">
          <h1 className="pt-20 text-2xl font-semibold md:text-4xl animate-pulse bg-gradient-to-r from-pink-500  to-violet-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <div className=" w-80 h-96 md:ml-96 ml-10 mt-4 border border-blue-500 shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} action="">
              {/* Email Details */}
              <div className="mt-4 space-y-2">
                <span>Full Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-70 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white text-center"
                  {...register("text", { required: true })}
                />
                <br />
                {errors.text && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password Details */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-70 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white text-center"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  name="message"
                  placeholder="Enter your Email"
                  className="w-70 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white text-center"
                  {...register("message", { required: true })}
                ></textarea>
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-blue-700 text-white rounded-md px-3 py-1 hover:bg-blue-800 hover:scale-105 duration-200 dark:bg-white dark:text-black">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
