import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

body{
    width: 100vw;
    background-color: ${({theme}) => theme.background };
    color: ${({theme})=> theme.text};
    transition: all 0.5s linear;
    overflow-x: hidden;
}
`

export const lightTheme = {
    primary:'#F7F7F7',
    secondary:'#007BFF',
    background:'#fff',
    text:'#121212',
    textPrimary:'#fff',
    tableRowIndex:'#ddd'
}
export const darkTheme = {
    primary:'#854FCD',
    secondary:'#161B22',
    background:'#010409',
    text:'#fff',
    textPrimary:'#fff',
    tableRowIndex:'#11161D'
}
