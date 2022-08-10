import styled from "styled-components"

export const TabbarWrapper = styled.div`
text-align: center;
width: 50%;
height: 50px;
border: 1px solid ${({theme})=>theme.primary};
display: flex;
justify-content: center;
align-items: center;
a{
    flex: 1;
    width: 100%;
    text-decoration: none;
    
}
`
export const Tab = styled.div`
color: ${({ status ,theme})=> status ? theme.secondary :  theme.primary};
display: flex;
align-items: center;
justify-content: center;
height: 50px;
font-size: 16px;
background-color: ${({ status ,theme})=> status ? theme.primary :  theme.secondary};

/* &:hover{
    background-color: ${({theme})=>theme.primary};
    color: ${({theme})=>theme.secondary};
    cursor: pointer;
} */
`