import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./Component/PrivateRoute";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-y-hidden">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={


          <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
