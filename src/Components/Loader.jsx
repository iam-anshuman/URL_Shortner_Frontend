import { HashLoader } from "react-spinners";
import { Box } from "@mui/material";

export default function Loader(){
    return(
        <>
        <Box sx={{
            display:"flex",
            height:"100vh",
            width:"100vw",
            alignItems:"center",
            justifyContent:"center"
        }}>

            <HashLoader
                color="green"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                />

        </Box>
        </>
    )
}