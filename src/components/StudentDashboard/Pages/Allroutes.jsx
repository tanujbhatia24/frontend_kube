import React from "react";
import { Route, Routes } from "react-router-dom";
import { Discusion } from "./Discusion";
import StudentDashboard from "./StudentDashboard";
import Ticket from "./Ticket";

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentDashboard />}></Route>
        <Route path="/discusion" element={<Discusion />}></Route>
        <Route path="/ticket" element={<Ticket />}></Route>
      </Routes>
    </div>
  );
};
