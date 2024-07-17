import React from "react";
import Cancel from "../../assets/images/Cancel.svg";
import { useNavigate } from "react-router";

const AddressTwo = () => {
  const navigate = useNavigate()
  const gotoSuccess = () => {
    navigate('/Success')
  }

  const gotoAddAddress = () => {
    navigate('/AddAddress')
  }

  return (
    <div className="sm:flex sm:justify-center sm:h-screen sm:items-center mt-6 sm:mt-0">
      <div className="register bg-offWhite p-2 w-[90%] lg:w-[35%] sm:h-fit sm:p-12 rounded-3xl 2xl:w-[30%]  m-auto sm:shadow-lg my-auto">
        <div className="first-row flex justify-between">
          <div className="pages flex space-x-5">
            <h2 className="text-textCol font-semibold text-xl sm:text-2xl">
              Add address
            </h2>
            <p className="text-[#6BC62D] font-semibold sm:text-2xl text-xl">
              3 of 3
            </p>
          </div>
          <div className="cancel">
            <button onClick={gotoAddAddress}>
              <img src={Cancel} className="text-2xl" />
            </button>
          </div>
        </div>
        <form action="address" className="mt-10">
          <input
            type="text"
            name="street"
            id="street"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="Street address"
          />

          <input
            type="text"
            name="apartment"
            id="apartment"
            className="p-4 border rounded-2xl outline-none w-full mt-5 custom-flex"
            placeholder="Apartment Optional"
          />
          <input
            type="text"
            name="city"
            id="city"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="City "
          />
          <div className="flex space-x-5">
            <input
              type="text"
              name="state"
              id="state"
              className="p-4 border rounded-2xl outline-none w-full mt-5"
              placeholder="State"
            />
            <input
              type="number"
              name="zip"
              id="zip"
              className="p-4 border rounded-2xl outline-none w-full mt-5"
              placeholder="Zip code"
            />
          </div>
          <button
            className="register-btn mt-32 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-[#5932EA]"
            type="submit"
            onClick={gotoSuccess}
          >
            Save information
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressTwo;
