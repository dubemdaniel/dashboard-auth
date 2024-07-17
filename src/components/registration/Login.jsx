import React, { useState } from "react";
import Apple from "../../assets/images/Apple.svg";
import Facebook from "../../assets/images/Facebook.svg";
import Google from "../../assets/images/Google.svg";
import Cancel from "../../assets/images/Cancel.svg";
import Password from "../../assets/images/Password.svg";
import Toggle from "./Toggle";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "This field is Required";
  }
  if (!values.email) {
    errors.email = "This field is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      gotoOverall();
      toast.success("User Logged In successfully!", {
        position: "top-right",
      });
    } catch (error) {
      toast.error(String(error), { position: "bottom-right" });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const gotoSignUp = () => {
    navigate("/SignUp");
  };

  const gotoOverall = () => {
    navigate("/Overall");
  };

  return (
    <div className="mt-6 sm:flex sm:justify-center sm:h-screen sm:items-center sm:mt-0">
      {/* {userLoggedIn && (<Navigate to={gotoOverall} replace={true}/>)} */}
      <div className="register bg-offWhite p-2 w-[96%] lg:w-[40%] 2xl:w-[30%]  md:h-[60%] lg:h-fit sm:p-8 rounded-3xl m-auto sm:shadow-lg my-auto">
        <div className="flex justify-between first-row">
          <Toggle />
          <div className="cancel">
            <button onClick={gotoSignUp}>
              <img src={Cancel} alt="" />
            </button>
          </div>
        </div>
        <div className="py-6 ">
          <div className="flex space-x-6 text-2xl icons">
            <div className="flex items-center justify-center w-12 h-12 text-center rounded-full apple-icon ">
              <img src={Apple} alt="" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 text-center rounded-full facebook-icon ">
              <img src={Facebook} alt="" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 text-center rounded-full google-icon ">
              <img src={Google} alt="google" />
            </div>
          </div>
        </div>
        <p className="text-[#757475b6]">or login with email</p>

        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-6 pt-4"
          >
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-5 border rounded-2xl outline-[#5932EA]"
              placeholder="Email Address"
            />
              {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 ">{formik.errors.email}</div>
            ) : null}
            <div className="relative">
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="p-5 border-2 rounded-2xl outline-[#5932EA] border-borderCol w-full "
                placeholder="Password"
              />
              <img
                src={Password}
                alt=""
                className="absolute top-6 right-4 text-2xl/>  "
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 ">{formik.errors.password}</div>
            ) : null}
            <button
              className="register-btn mt-7 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-[#5932EA]"
              type="submit"
            
            >
              Login to Dashboard
            </button>
          </form>
        </div>

        <div className="flex mt-4 mb-20 space-x-5 terms">
          <input
            type="checkbox"
            name=""
            id="custom-checkbox"
            className="w-4 h-4 bg-pink-400 border border-pink-400 rounded focus:ring-3 focus:ring-blue-300 dark:bg-pink-600 dark:border-pink-500 dark:focus:ring-blue-600 dark:ring-offset-pink-800 dark:focus:ring-offset-pink-800"
            required
          />
          <p className="text-sm">Remember me</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
