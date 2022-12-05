import "./App.css";
import AdminDashboard from "./components/AdminDashboard/adminDashboard";
import Users from "./components/Users/Users";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import { CssBaseline } from "@mui/material";
import Main from "../src/components/SignIn/Main";

import Login from "./components/Login/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState();
  const [authToken, setAuthToken] = useState();
  const loginHandler = (data) => {
    console.log(data);
    setIsLoggedIn(data.isLoggedIn);
    setUserData(data.userDetails);
    setAuthToken(data.token);
  };







  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "rgb(249, 250, 251)",
      }}
    >
      <CssBaseline />
      {isLoggedIn && <NavBar />}
      

      <main
        style={{
          flexGrow: 1,
          padding: "2em",
          height: "100%",
        }}
      >
        <Routes>

          <Route path='/' element={<Login onLogin={loginHandler}></Login>}/>
          {isLoggedIn &&<Route path='/dashboard' element={<AdminDashboard />} />}
          {isLoggedIn &&<Route path='/users' element={<Users authToken={authToken}/>} />}
          {isLoggedIn &&<Route path='/main' element={<Main />} />}

          
         
       

        </Routes>
      </main>
    </div>
  );
}

export default App;

// "repository": {
//   "type": "git",
//   "url": "git+https://github.com/UnpredictablePrashant/learnerReportCS_frontend.git"
// },
// "author": "",
// "license": "ISC",
// "bugs": {
//   "url": "https://github.com/UnpredictablePrashant/learnerReportCS_frontend/issues"
// },
// "homepage": "https://github.com/UnpredictablePrashant/learnerReportCS_frontend#readme"
