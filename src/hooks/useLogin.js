import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const useLogin = ()=>{
    const {dispatch} = useAuth();
    const [isLoading,setIsLoading] = useState(false)

    const [isError,setIsError] = useState(null);

    const login = async (email,password)=>{

        setIsLoading(true);
        try {
            const response = await fetch("https://abc-ccy5.onrender.com/user/login",{
                mode: 'no-cors',
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            });
            const json = await response.json();

            if(response.ok){

                setIsLoading(false);
                localStorage.setItem("user",JSON.stringify({data:json}));
                dispatch({type:"LOGIN",payload:{data:json}});

            }
            if(!response.ok){
                
                setIsLoading(false);
                setIsError(json);

            }
            
        } catch (error) {
            setIsError(error);
            console.log(error);
        }
    }
    return {login,isError,isLoading};
}