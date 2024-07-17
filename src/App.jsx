import "./App.css";
// import Apple from './assets/images/Apple.svg'
import SignUp from "./components/registration/SignUp";
import PersonalInformation from "./components/registration/PersonalInfo";
import AddAddress from "./components/registration/AddAddress";
import ManualAddress from "./components/registration/ManualAddress";
import Login from "./components/registration/Login";
import Sidebar from "./components/dashboard/SideBar";
import Overall from "./components/dashboard/Overall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personalinfo from "../src/components/registration/PersonalInfo"
import Success from "./components/dashboard/success";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={SignUp}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/ManualAddress" Component={ManualAddress}/>
        <Route exact path="/Personalinfo" Component={Personalinfo}/>
        <Route exact path="/AddAddress" Component={AddAddress}/>
        <Route exact path="/Overall" Component={Overall}/>
        <Route exact path="/Success" Component={Success}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    // <>
    //   <div className='flex flex-col gap-16'>
    //   <SignUp />
    //   <PersonalInformation />
    //     <AddAddress />
    //     <ManualAddress />
    //     <Login/>
    //     <Overall/>
    // </div>
    // </>
  );
}

export default App;
