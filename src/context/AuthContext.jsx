import React, { createContext, useContext,useEffect,useReducer, useState } from 'react';

const AuthContext = createContext();


export const authReducer = (state,action) => {
  switch(action.type){
    case "LOGIN":

      return {
        user: action.payload,
      };

    case "SIGNUP":
      return{
        user: action.payload,
      };
    case "LOGOUT":
      return{
        user: null,
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state,dispatch] = useReducer(authReducer,{
    user: null,
  });
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);
    async function CheckToken(){
      const userToken = JSON.parse(localStorage.getItem("user"));

      if(!userToken){
        setIsLoading(false);
        return
      }

      const response = await fetch("https://abc-ccy5.onrender.com/home",{
        method:"GET",
        headers:{
          "authorization": `Bearer ${userToken.data.token}`
        }
      });
      const json = await response.json();
      if(response.ok){
        setIsLoading(false);
        dispatch({type:"LOGIN",payload:userToken});
      }
      if(!response.ok){
        setIsLoading(false);
        console.log("Token Unverified",json);
      }

    }
    CheckToken();
  },[]);
  console.log("Authentication State: ",state);

  return (
    <AuthContext.Provider value={{ ...state,dispatch,isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context){
    throw Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};
