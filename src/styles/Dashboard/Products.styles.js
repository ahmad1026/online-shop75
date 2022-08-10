import styled from "styled-components";


export const ProductsPage = styled.div`
width: 100%;
margin-top:150px;
display: flex;
flex-direction: column;
h1{
    font-size: 28px;
    font-weight: bold;
}

`
export const ProductsTitle = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
margin: auto;
margin-bottom: 40px;
font-family: "Omid";
button{
    padding: 8px 16px;
    background-color: lightgreen;
    border: none;
    outline: none;
    border-radius: 8px;
    
}
`

export const TableProductsWrapper = styled.div`
width: 100%;
margin: auto;
font-family: "Omid";
table {
  border-collapse: collapse;
  width: 80%;
  margin: auto;
  
}
td, th {
  border: 1px solid #dddddd;
  text-align: right;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: ${({theme})=>theme.tableRowIndex};
}
`

