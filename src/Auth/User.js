'use client';
import { useContext } from "react";
import { AuthContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();
  if(loading){
    return (
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
        <CircularProgress/>
      </div>
    )
  }
    // Check if the user is authenticated and the loading state is finished
    if (!loading && !user) {
      // Redirect the user to the login page or any other route you prefer
      router.replace("/login");
      return null;
    }
  
    // Render the children if the user is authenticated or while the loading state is in progress
    return children;
  }
  