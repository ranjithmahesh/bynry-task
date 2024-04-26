import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const location = useLocation();
  const path = location.pathname;
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  console.log(data);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!data.email || !data.password) {
      setError("Fill the required Fields");
      return false;
    }
    if (data.email && !emailRegex.test(data.email)) {
      setError("Invalid email !");
      return false;
    }

    if (data.password && !passwordRegex.test(data.password)) {
      setError("Invalid password !");
      return false;
    }

    setError(false);
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    handleValidation();
  };

  console.log(process.env.REACT_APP_BASE_URL);

  const onSubmit = async () => {
    if (handleValidation()) {
      setLoading(true);
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/auth/login`,
          {
            email: data.email,
            password: data.password,
          }
        );

        console.log(res.data.token);
        localStorage.setItem("token", res.data.user.email);

        if (res.data) {
          toast.success("Login successfull");

          navigate("/dashboard");
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);

        const { response } = error;
        if (response) {
          switch (response.status) {
            case 404:
              toast.error("User not found");
              break;
            case 403:
              toast.error("Email not verified, check your email");
              break;
            case 401:
              toast.error("Invalid email or password");
              break;
            default:
              toast.error("An error occurred");
          }
        } else {
          toast.error("An error occurred");
        }
      }
    }
  };

  return (
    <div className="bg-[#131a2c] w-screen h-screen flex flex-row p-14 lg:px-44 rounded-lg">
      <div className="bg-[#2d3250] flex-1 rounded-l-3xl p-3">
        <div className="flex gap-5 text-white">
          <Link to={"/"}>
            <h1
              className={` ${path === "/" && " border-b-4 border-[#F9B17A]"}`}
            >
              Login
            </h1>
          </Link>
          <Link to={"/register"}>
            <h1
              className={` ${
                path === "register" && " border-b-4 border-[#F9B17A]"
              }`}
            >
              Register
            </h1>
          </Link>
        </div>
        <div className="m-[50px]">
          <div className="text-white   text-[34px]  ">
            <h1 className="font-semibold">
              {" "}
              welcome to <span className="  text-[#F9B17A]">Market</span>
            </h1>
            {path === "login" ? (
              <p className="text-[14px]">Sign in to continue</p>
            ) : (
              <p className="text-[14px]">Sign up to continue</p>
            )}
          </div>
          <div className="mt-10">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={data.email}
                placeholder=" "
                className="peer focus:outline-none placeholder-transparent text-white border-b-2 border-gray-300 w-full focus:border-[#F9B17A] bg-[#2d3250]"
              />
              <label
                htmlFor="email"
                className="absolute transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base"
              >
                Email id
              </label>
            </div>

            <div className="relative mt-5">
              <input
                name="password"
                autoComplete="new-password"
                value={data.password}
                type="password"
                onChange={handleChange}
                id="password"
                placeholder=" "
                className="peer focus:outline-none placeholder-transparent text-white border-b-2 border-gray-300 w-full focus:border-[#F9B17A] bg-[#2d3250]"
              />
              <label
                htmlFor="password"
                className="absolute transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base"
              >
                Password
              </label>
            </div>
            <h1 className="text-red-500">{error}</h1>
            <div className="flex justify-between mt-2 text-white items-center">
              <div>
                <input
                  id="hi"
                  type="checkbox"
                  className="border border-[#F9B17A] bg-[#2d3250] cursor-pointer"
                />
                <label className="ml-2 text-sm" htmlFor="hi">
                  Remember me
                </label>
              </div>
              <div className="text-sm hover:underline  hover:scale-120 cursor-pointer">
                Forgot Password ?
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button
            onClick={onSubmit}
            className="bg-[#e58f52] rounded-xl text-white px-5 py-2 font-bold mx-auto block hover:bg-[#F9B17A]"
          >
            {loading ? "Loading..." : "LogIn"}
          </button>{" "}
        </div>
      </div>
      <div className="flex-1 lg:block hidden">
        {/* Replace this with your preferred image */}
        <img
          className="w-full h-full object-cover rounded-r-3xl"
          alt="l"
          src={
            "https://images.unsplash.com/photo-1707617961911-889e9ab306bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
          }
        />
      </div>
    </div>
  );
}

export default Login;
