import styled from 'styled-components'

export const LoginWrapper = styled.div`
width: 100%;
height: 100vh;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.background};
font-family: "omid";
`

export const LoginContent = styled.div`
width: 300px;
height: 300px;
margin: auto;
padding: 8px;
display: flex;
flex-direction: column;
gap: 40px;
h1{
    font-size: 20px;
    text-align: center;
}
span{
    margin-top: 8px;
    color: red;
}
`

export const InputButton = styled.button`
border: none;
outline: none;
padding: 8px 16px;
font-family: "Omid";
border-radius: 8px;
color: white;
background-color: ${({ theme }) => theme.secondary};
cursor: pointer;
`
export const InputBox = styled.input`
height: 30px;
font-size: 18px;
border: none;
outline: none;
border-bottom: 1px solid gray;
&:focus {
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
}
`

