import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const useSignUp = ()=>{
    const [isError,setIsError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const {dispatch}= useAuth();

    const signup = async (firstName,lastName,email,password)=>{
        
        setIsLoading(true);

        try {
            const response = await fetch("https://abc-ccy5.onrender.com/user/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({firstName,lastName,email,password}),
            });
            const json  = await response.json();
            if(response.ok){
                setIsLoading(false);
                localStorage.setItem("user",JSON.stringify({data:json}));
                dispatch({type:"SIGNUP",payload:{data:json}});
            }
            if(!response.ok){
                setIsError(json.Output);
            }

        } catch (error) {
            setIsError(error);
        }
    }

    return {signup,isError};
}