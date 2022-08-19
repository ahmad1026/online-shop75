import styled from "styled-components";

export const ProductWrapper = styled.div`
margin: 32px;
margin-top: 150px;
font-family: 'Omid';
img{
    border-radius: 8px;
}
p{
    font-size: 22px;
    line-height: 1.4;
}
`


export const ProductInfo = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
gap: 40px;
`


export const ProductDetilse = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 30px;
align-items: flex-start;
h1{
    font-size: 32px;
    margin-bottom: 16px;
}
input{
    width: 50px;
    height: 30px;
    font-size: 22px;
}
button{
    background-color: green;
    border: none;
    outline: none;
    font-family: 'Omid';
    color: white;
    width: 150px;
    border-radius: 4px;
}
`

export const AddtoCart = styled.div`
display: flex;
gap: 10px;
`
