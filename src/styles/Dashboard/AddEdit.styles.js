import styled from "styled-components";


export const ModalWrapper = styled.div`
position: fixed;
top: 0;
width: 100vw;
height: 100%;
background-color: rgba(31, 32, 41, .75);
display: flex;
align-items: center;
justify-content: center;
z-index: 2;
`

export const FormContent = styled.div`
width: 370px;
background-color: ${({theme})=>theme.background};
padding: 16px;
color: ${({theme})=>theme.text};
font-family: "Omid";
`