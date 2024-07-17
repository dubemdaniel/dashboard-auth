import React from "react";
import Location from "../../assets/images/Location.svg";
import Dollar from "../../assets/images/Dollar.svg";
import People from "../../assets/images/People.svg";
import Clock from "../../assets/images/Clock.svg";
import Cancel from "../../assets/images/Cancel.svg";
import Search from "../../assets/images/Search.svg";
import { useNavigate } from "react-router";

const PersonalInformation = () => {
  const navigate = useNavigate();

  const gotoAddLocation = () => {
    navigate("/ManualAddress");
  };

  const goToPersonalInfo = () => {
    navigate('/Personalinfo')
  }

  return (
    <div className="sm:flex sm:justify-center sm:h-screen sm:items-center mt-6 sm:mt-0">
      <div className="register bg-offWhite p-2 w-[90%] lg:w-[40%] md:h-fit sm:p-12 rounded-3xl m-auto sm:shadow-lg 2xl:w-[30%]">
        <div className="first-row flex justify-between">
          <div className="pages flex space-x-5">
            <h2 className="text-textCol font-semibold text-2xl">Add address</h2>
            <p className="text-[#6BC62D] font-semibold text-xl sm:text-2xl">
              3 of 3
            </p>
          </div>
          <div className="cancel">
            <button onClick={goToPersonalInfo}>
              <img src={Cancel} alt="" className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="border-2 border-x-regTextCol p-5 space-x-5 rounded-2xl outline-none shadow-none mt-10 flex items-center">
          <img src={Search} className="text-2xl " />
          <input
            type="text"
            name="text"
            className="outline-none border-transparent shadow-none bg-transparent border-none"
            placeholder="Search for address "
          />
        </div>
        <p className="mt-2">Your address is not visible to other users</p>
        <div className="location flex mt-10 space-x-5 text-[#5932EA]">
          <button className=" sm:space-x-3 border rounded-2xl p-2 flex  items-center ">
            <span>
              <img src={Location} className="m-auto w-6" />
            </span>
            <span className="text-manual font-semibold">
              Use current location
            </span>
          </button>
          <button
            className="text-manual font-semibold border rounded-2xl p-2"
            onClick={gotoAddLocation}
          >
            Add manually
          </button>
        </div>
        <div className="text mt-28">
          <h2 className="text-textCol  text-2xl font-bold">
            Sharing your address shows:
          </h2>
          <div className="mt-10 font-semibold text-[#383738b6] gap-4 flex flex-col">
            <div className="people flex space-x-3 items-center font-semibold">
              <p>
                <img src={People} className="sm:w-5" />
              </p>
              <p>People near you</p>
            </div>
            <div className="time flex space-x-3 items-center ">
              <p>
                <img src={Clock} className="sm:w-5" />
              </p>
              <p>Estimated delivery time</p>
            </div>
            <div className="costs flex space-x-3 items-center ">
              <p>
                <img src={Dollar} className="sm:w-5" />
              </p>
              <p>Estimate shipping costs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
