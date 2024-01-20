import React from "react";
import HomePage from "./Components/HomePage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Loader from "./Components/Loader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Analytics from "./Components/Analytics";


function App() {
  const {user,isLoading} = useAuth();
  console.log(isLoading);
  user && console.log(user.data.email);

  return (
    <>
      <Router>
          <Routes>
            <Route element={user ? <HomePage/> : isLoading ? <Loader/> : <Navigate to={"/login"}/>} path="/" />
            <Route element={user ? <HomePage/> : isLoading ? <Loader/> : <Navigate to={"/login"}/>} path="/Short-Url" />
            <Route element={user ? <Analytics/> : isLoading ? <Loader/> : <Navigate to={"/login"}/>} path="/Analytics" />
            <Route element={!user?<Login/> : <Navigate to={"/"}/>} path="/login"/>
            <Route element={!user?<SignUp/> : <Navigate to={"/"}/>} path="/signup"/>
          </Routes>
      </Router>
    </>
  )
}

export default App;
