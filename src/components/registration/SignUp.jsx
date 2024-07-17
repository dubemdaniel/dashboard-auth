import React, { useState } from "react";
import Apple from "../../assets/images/Apple.svg";
import Facebook from "../../assets/images/Facebook.svg";
import Google from "../../assets/images/Google.svg";
import Password from "../../assets/images/Password.svg";
import { useFormik } from "formik";
import Toggle from "./Toggle";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

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

const SignUp = () => {
  const navigate = useNavigate();

  const personInfo = () => {
    navigate("/Personalinfo");
  };

  const onSubmit = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        await setDoc(userRef, {
          email: user.email,
        });
        console.log('y u no dey work')

        console.log("User document created!");
        toast.success("Email added successfully", { position: "top-left" });
        personInfo();
        console.log("normal");
      }
      console.log("user is registered successfully");
    } catch (error) {
      console.log("not normal");
      toast.error(String(error), { position: "bottom-right" });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isRegistering, setIsRegistering] = useState(false);

  // const navigate = useNavigate();
  // const goToPersonalInfo = () => {
  //   navigate("/personalinfo");
  // };
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!isRegistering) {
  //     setIsRegistering(true);
  //     await doCreateUserWithEmailAndPassWord(email, password);
  //   }

  return (
    <div className="sm:flex sm:justify-center sm:h-screen sm:items-center mt-6 sm:mt-0">
      <div className="register bg-offWhite p-2 w-[96%] lg:w-[40%] 2xl:w-[30%]  md:h-[60%] lg:h-fit sm:p-8 rounded-3xl m-auto sm:shadow-lg my-auto ">
        <div className="first-row flex justify-between">
          <Toggle />
          <div className="cancel">
            {/* <button>
              <img src={Cancel} alt="" />
            </button> */}
          </div>
        </div>
        <div className=" py-6">
          <div className="icons flex space-x-6 text-2xl">
            <div className="apple-icon rounded-full w-12 h-12 text-center flex items-center justify-center  ">
              <img src={Apple} alt="" />
            </div>
            <div className="facebook-icon rounded-full w-12 h-12 text-center flex items-center justify-center  ">
              <img src={Facebook} alt="" />
            </div>
            <div className="google-icon rounded-full w-12 h-12 text-center flex items-center justify-center  ">
              <img src={Google} alt="google" />
            </div>
          </div>
        </div>
        <p className="text-[#757475b6]">or register with email</p>
        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-6 pt-4"
          >
            <input
              type="email"
              name="email"
              // onChange={handleChange}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-5 border rounded-2xl outline-[#5932EA]"
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 ">{formik.errors.email}</div>
            ) : null}
            <div className="relative">
              <input
                type="password"
                name="password"
                // onChange={handleChange}
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
            <p className="text-[#757475b6]">8+ characters</p>
            <button
              className="register-btn mt-7 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-[#5932EA]"
              type="submit"
            >
              Create account
            </button>
          </form>
        </div>

        <div className="terms flex mt-4 space-x-5">
          <input
            type="checkbox"
            name=""
            id="custom-checkbox"
            className="w-4 h-4 border border-pink-400 rounded bg-pink-400 focus:ring-3 focus:ring-blue-300 dark:bg-pink-600 dark:border-pink-500 dark:focus:ring-blue-600 dark:ring-offset-pink-800 dark:focus:ring-offset-pink-800"
            required
          />
          <p className="text-sm">Send me new and promotions</p>
        </div>
        <p className="text-center mt-4 text-base text-[#757475b6] ">
          By continuing I agree with the
          <span className="text-blue-400">Terms & Conditions,</span>
          <br />
          <span className="text-blue-400">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
