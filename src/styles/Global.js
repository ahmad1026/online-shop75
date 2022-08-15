import styled, { createGlobalStyle } from "styled-components";
import PropTypes from 'prop-types';

export const GlobalStyle = createGlobalStyle`

body{
    width: 100vw;
    background-color: ${({theme}) => theme.background };
    color: ${({theme})=> theme.text};
    overflow-x: hidden;
}
`

export const Row = styled.div`
display: flex;
flex-direction: row;
align-items: ${({alignItems})=> alignItems};
justify-content: ${({justifyContent})=> justifyContent};
gap:${({gap})=> gap} ;
`
export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: ${({alignItems})=> alignItems};
justify-content: ${({justifyContent})=> justifyContent};
gap:${({gap})=> gap} ;
`

Row.propTypes={
    alignItems:PropTypes.oneOfType(['center' , 'flex-end' , 'flex-start']),
    justifyContent:PropTypes.string
}




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
