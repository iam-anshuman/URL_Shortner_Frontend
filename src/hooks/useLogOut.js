import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const useLogOut = ()=>{

    const {dispatch} = useAuth();

    const logout = ()=>{
        dispatch({type:"LOGOUT"});
        localStorage.removeItem("user");
    }
    return {logout};
}