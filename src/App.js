import "./App.css";
import AdminDashboard from "./components/AdminDashboard/adminDashboard";
import Users from "./components/Users/Users";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import { CssBaseline } from "@mui/material";
import Main from "../src/components/SignIn/Main";
import AuthRouter from "./AuthRouter/AuthRouter";
import UserRouter from "./AuthRouter/UserRouter";
import DataContext from "./context/DataContext";
import {useContext}from "react"

function App() {
  let ctx = useContext(DataContext);


  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "rgb(249, 250, 251)",
      }}
    >
      <CssBaseline />
      {
        ctx.isloggedin && <NavBar/>
      }
      <main
        style={{
          flexGrow: 1,
          padding: "2em",
          height: "100%",
        }}
      >
        <Routes>
          {/* <Route path='/login' element={<Main />} /> */}
          <Route path='/users' element={
            <UserRouter>
              <Users/>
            </UserRouter>
        } />
          <Route path='/' element={
            <AuthRouter>
              <AdminDashboard /> 

            </AuthRouter>
          } /> 
         
       
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
