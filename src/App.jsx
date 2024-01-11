import React from "react";
import Navbar from "./Components/Navbar";
import HeroItem from "./Components/HeroItem";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline } from "@mui/material";
import Form from "./Components/Form";
import ContentSection from "./Components/ContentSection";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  

  return (
    <ThemeProvider theme={darkTheme}>
        <div className="App">
      <CssBaseline/>
      <Container>
        <Navbar/>
        <HeroItem/>
        <Form/>
      </Container>
        <ContentSection/>
    </div>
    </ThemeProvider>
  )
}

export default App
