import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      Email: data.Email,
      Password: data.Password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data) {
          // alert("Login Successfully");
          toast.success("Login Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(resp.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // alert("Error: " + err.response.data.message);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
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
            <div className="mt-8 space-y-2">
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
              <button className="bg-blue-700 text-white rounded-md px-3 py-1 hover:bg-blue-800 hover:scale-105 duration-200 dark:bg-white dark:text-black">
                Login
              </button>
              <p>
                Not Registered?
                <Link
                  to="/signup"
                  className="text-blue-600 cursor-pointer underline"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;