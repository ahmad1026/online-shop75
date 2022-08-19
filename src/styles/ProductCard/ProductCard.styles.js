import styled from 'styled-components';


export const CardStyle = styled.div`
margin-bottom: 32px;
display: flex;
flex-direction: column;
align-items: center;
    width: 200px;
    border: 2px solid ${({ theme }) => theme.secondary};
    border-radius: 0 0 10px 10px;
    position: relative;
`
export const ProductsStyle = styled.div`
box-sizing: border-box;
width: 100%;
margin: 16px;
margin-top: 32px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 30px;
`
export const ImageStyle = styled.div`
width: 100%;
overflow: hidden;
img:hover{
    transform: scale(1.3);
    transition: 1s;
}
object-fit:contain;
img{
    /* height: 150px; */
    transition: 1s;
}
`
export const ProductContentStyle = styled.div`
margin-right: 16px;
margin-top: 16px;
margin-bottom: 16px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 16px;
font-size: 15px;
font-family: 'Omid';

`


export const DiscountLableStyle = styled.div`
width: 30px;
height: 30px;
display: flex;
align-items: center;
text-align: center;
position: absolute;
border-radius: 50%;
background-color: red;
font-weight: 900;
padding: 2px;
top: -10px;
left: -10px;
color: gold;
font-family: 'Omid';

`
export const CostProductStyle = styled.div`
display: flex;
justify-content: space-between;
margin-left: 25px;
gap: 20px;
h1{
    color: gray;
    text-decoration: line-through;
    text-decoration-color: red;
    font-size: small;
}
`