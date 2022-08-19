import styled, { keyframes } from 'styled-components'

const SliderAnimation = keyframes`
0%{
    transform: translateX(400px);
}
100%{
    transform: translateX(0px);
}
`


export const SidbarContainer = styled.div`
width: 25%;
margin: 8px;
margin-top: 32px;
padding: 8px;
/* border: 1px solid gray; */
position: fixed;
right: 0;
top: 100px;
transform: translateX(400px);
animation-name: ${SliderAnimation};
animation-duration: 1s;
animation-fill-mode: both;
font-family: 'Omid';

li{
    padding-right: 16px;
}
`


export const SliderContent = styled.div`
width: 100%;
li{
    padding: 8px 16px;
    padding-left:32px ;
    border-radius: 8px;
    &:hover{
        background-color: ${({theme})=>theme.secondary};
        cursor: pointer;
    }
}

`
export const DropdownItem = styled.div`
width: 100%;
height: 30px;
/* border: 1px solid gray; */
padding: 4px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 8px;
background-color: ${({theme , active})=> active ? theme.secondary : null};
&:hover{
    background-color: ${({theme})=> "lightblue"};
    cursor: pointer;
}
`
export const ItemTitle = styled.div`
p{
    font-weight: bold;
}

`

