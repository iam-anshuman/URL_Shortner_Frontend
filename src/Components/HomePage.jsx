import React from "react";
import Navbar from "./Navbar";
import HeroItem from "./HeroItem";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline } from "@mui/material";
import Form from "./Form";
import Footer from "./Footer";
import ContentSection from "./ContentSection";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function HomePage() {

  const {isLoading} = useAuth();

  return (
      <ThemeProvider theme={darkTheme}>
          <div className="App">
        <CssBaseline/>
{ isLoading ? <Loader/> :
        <Container>
          <Navbar/>
          <HeroItem/>
          <Form/>
          <ContentSection/>
        </Container>
}
        <Footer/>
      </div>
      </ThemeProvider>
    )
}

export default HomePage;
