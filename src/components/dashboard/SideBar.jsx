import React, { useState } from "react";
// import People from "../../assets/images/People.svg";
import "../../index.css";
import Dashboardmini from "../../assets/SideImages/Dashboardmini";
import ProductLogo from "../../assets/SideImages/ProductLogo";
import CustomersLogo from "../../assets/SideImages/CustomersLogo";
import IncomeLogo from "../../assets/SideImages/IncomeLogo";
import PromoteLogo from "../../assets/SideImages/PromoteLogo";
import HelpLogo from "../../assets/SideImages/HelpLogo";
import DashboardLogo from "../../assets/SideImages/DashboardLogo";

// const Bar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };
// const [isHovered, setIsHovered] = useState(false);

const Bar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const svgIcons = [
    {
      component: (
        <Dashboardmini
        />
      ),
      name: "Dashboard",
    },
    {
      component: (
        <ProductLogo
        />
      ),
      name: "Product",
    },
    {
      component: (
        <CustomersLogo
        />
      ),
      name: "Customers",
    },
    {
      component: (
        <IncomeLogo />
      ),
      name: "Income",
    },
    {
      component: (
        <PromoteLogo />
      ),
      name: "Promote",
    },
    {
      component: (
        <HelpLogo  />
      ),
      name: "Help",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[white] text-black w-16 hover:w-64 transition-width duration-300 group hover:items-start">
      <div className=" gap-2 p-3 sm:p-5 flex align-middle mt-6 mb-4">
        <div>
          {" "}
          <DashboardLogo />
        </div>
        <span className=" hidden group-hover:inline-block text-2xl font-medium">
          Dashboard <span className="text-[10px] text-[#9197B3] opacity-60 ">v.01</span>
        </span>
      </div>

      <ul className="flex flex-col items-start p-5 gap-4 space-y-4 group-hover:items-start w-[100%]">
        {svgIcons.map((icon, index) => (
          <li
            key={index}
            className="flex group/list items-start space-x-4 w-[100%] hover:bg-[#5932EA] hover:p-2 hover:rounded-lg hover:text-white text-[#9197B3]"
          >
            <span className="group-hover/list:inline-block group-hover/list:text-white">{icon.component}</span>
            <span className="hidden group-hover:inline-block text-[#9197B3] group-hover/list:text-white ">{icon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // <li className="flex items-start space-x-4 w-[100%] " onMouseEnter={() => setIsHovered(true)}
  // onMouseLeave={() => setIsHovered(false)}>
  //      <Dashboardmini fill={isHovered ? 'blue' : 'red'} />
  //       <span className="hidden group-hover:inline-block">Dashboard</span>
  //     </li>
  //     <li className="group flex items-start space-x-4">
  //     <ProductLogo fill={isHovered ? 'white' : '#9197B3'}/>
  //       <span className="hidden group-hover:inline-block">Profile</span>
  //     </li>
  //     <li className="group flex items-start space-x-4">
  //     <CustomersLogo fill={isHovered ? 'white' : "#9197B3"}/>
  //       <span className=" hidden group-hover:inline-block">Settings</span>
  //     </li>

  // return (
  //     <div className="sidebar h-screen bg-blue-800 text-white w-16 hover:w-64 transition-width duration-300">
  //     <ul className="flex flex-col items-center hover:items-start p-4 space-y-4">
  //       <li className="flex items-center space-x-4">
  //         <img src={People} />
  //         <span className="sidebar-text hidden hover:block">Home</span>
  //       </li>
  //       <li className="flex items-center space-x-4">
  //       <img src={People} />
  //         <span className="sidebar-text hidden hover:inline">Profile</span>
  //       </li>
  //       <li className="flex items-center space-x-4">
  //       <img src={People} />
  //         <span className="sidebar-text hidden hover:inline">Settings</span>
  //       </li>
  //     </ul>
  //   </div>
  // );

  // opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out

  //   return (
  //     <div className="flex align-middle text-center items-center w-screen relative">
  //       <button
  //         onClick={toggleSidebar}
  //         className="p-2 bg-blue-500 text-white items-center absolute right-5 top-5"
  //       >
  //         Toggle Sidebar
  //       </button>
  //       <div
  //         className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
  //           isOpen ? "translate-x-0" : "-translate-x-full"
  //         } transition-transform duration-300 ease-in-out`}
  //       >
  //         <ul>
  //           <li className="p-4 border-b border-gray-700 flex align-middle gap-4">
  //             <span>
  //                           <img src={People} alt="" className="text-white" />

  //             </span>{" "}
  //             Home
  //           </li>
  //           <li className="p-4 border-b border-gray-700">About</li>
  //           <li className="p-4 border-b border-gray-700">Contact</li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
};

export default Bar;
