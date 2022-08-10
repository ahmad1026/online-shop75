import styled from "styled-components";

export const OrdersPage = styled.div`
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



export const OrdersPageHeader = styled.div`
  width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin: auto;
margin-bottom: 40px;
font-family: "Omid";
  `
export const TableOrdersWrapper = styled.div`
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
  background-color: ${({ theme }) => theme.tableRowIndex};
}
  `