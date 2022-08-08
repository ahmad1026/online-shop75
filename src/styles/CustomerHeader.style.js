import styled from "styled-components"



export const LogoStyle = styled.div`
margin-right: 32px;
display: flex;
align-items: center;
gap: 10px;

`
export const HeaderStyles = styled.div`
width: 100vw;
height: 100px;
position: fixed;
z-index: 1000;
top: 0;
top: ${(props)=> true ? '0px' : '-100px'};
left:0;
opacity: 0.8;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${({ theme }) => theme.secondary};
font-family: 'Omid';
font-size: 32px;
color: ${({ theme }) => theme.primary};
svg:hover{
    cursor: pointer;
}
transition: 0.5s;
`

export const CustomerTab = styled.div`
margin: 16px;
display: flex;
align-items: center;
gap: 40px;
font-size: 20px;
a{
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
}
span{
    border-radius: 50%;
    background-color: white;
}
`

export const NumberCart = styled.span`
-moz-border-radius: 20px;
padding: 6px 7px 4px 7px;
border-radius: 20px;
position: absolute;
border: 1px solid ${({ theme }) => theme.primary};
top: 15px;
left: 30px;
background-color: ${({ theme }) => theme.secondary};
color: green;
font-size: 16px;
font-weight: bold;
`


export const SearchBoxStyle = styled.div`
width: 50%;
height: 35px;
border: 1px solid ${({theme})=>theme.primary};
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 10px;
svg{
    color: ${({theme})=>theme.primary};
    margin-left: 8px;
    font-size: 18px;

}
input{
    width: 100%;
    margin-right: 8px;
    background-color: inherit;
    border: none;
    outline: none;
    width: inherit;
    height: inherit;
    color: ${({theme})=>theme.textPrimary};
    font-size: 18px;
    font-family: 'Omid';
    &::placeholder{
        color: ${({theme})=>theme.primary};
        font-size: 18px;
    }
}
`