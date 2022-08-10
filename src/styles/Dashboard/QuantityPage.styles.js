import styled from "styled-components";


export const QuantityPage = styled.div`

width: 80%;
display: flex;
flex-direction: column;
margin: auto;
margin-top:150px;
h1{
    font-size: 28px;
    font-weight: bold;
}

`

export const QuantityPageHeader = styled.div`
width: 100%;
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
    font-family: "Omid";
}

`

export const TableQuantityWrapper = styled.div`
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