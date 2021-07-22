import React from "react"
import { useSelector } from "react-redux"
import styled, { ThemeProvider } from "styled-components";

const ThemeContainer = styled.div`
  min-height:100vh;
  background-color: ${props => props.theme.mode === "dark" ? "#1b1b1b" : "white"};
  color: ${props => props.theme.mode === "dark" ? "white" : "black"};
`;

export default function AppContainer(props){
    const mode = useSelector((state) => state.theme.mode);
    
    return (
        <ThemeProvider theme={{mode}}>

        <ThemeContainer>
            {props.children}
        </ThemeContainer>
        </ThemeProvider>
    )

}