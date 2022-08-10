import styled from "styled-components";

export const PaginationStyles = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
gap: 20px;
align-items: center;

button{
    padding: 8px 16px;
    outline: none;
    border: none;
    font-family: 'Omid';
    border-radius: 8px;
    background-color: lightblue;
    cursor: pointer;

}
`
export const PageIndex = styled.span`
padding: 8px 16px;
text-align: center;
text-decoration: none;
border: 1px solid ${({ theme }) => theme.primary};
background-color: ${({isActive})=> isActive ? '#ddd' : "white"};
color: black;
font-size: 16px;
cursor: pointer;
&:hover{
    background-color: #ddd;
}
`