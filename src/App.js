import "./App.css";
import AdminDashboard from "./components/AdminDashboard/adminDashboard";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "rgb(249, 250, 251)",
      }}
    >
      <CssBaseline />
      <NavBar />
      <main
        style={{
          flexGrow: 1,
          padding: "2em",
          height: "100%",
        }}
      >
        <Routes>
          <Route path='/' element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
