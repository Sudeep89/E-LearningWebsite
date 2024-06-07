import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      FullName: data.FullName,
      Email: data.Email,
      Password: data.Password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data) {
          toast.success("SignUp Successfully");
          navigate(from, { replace: true });
          // alert("SignUp Successfully");
        }
        localStorage.setItem("Users", JSON.stringify(resp.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          // alert("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div
          id="my_modal_3"
          className="w-[600px] dark:shadow-white p-6 rounded-md"
        >
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              {/* Name Details */}
              <div className="mt-6 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your FullName"
                  className="w-70 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("FullName", { required: true })}
                />
                <br />
                {errors.FullName && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email Details */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-70 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("Email", { required: true })}
                />
                <br />
                {errors.Email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password Details */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-70 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("Password", { required: true })}
                />
                <br />
                {errors.Password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button Work */}
              <div className="flex justify-around mt-4">
                <button className="bg-blue-700 text-white rounded-md mx-2 px-3 py-1 hover:bg-blue-800 hover:scale-105 duration-200 dark:bg-white dark:text-black">
                  SignUp
                </button>
                <p className="mx-2">
                  Already have an account?
                  <Link
                    to="/"
                    className="text-blue-600 cursor-pointer underline"
                  >
                    LogIn
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
