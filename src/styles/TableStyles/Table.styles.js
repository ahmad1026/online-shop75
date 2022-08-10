import styled from "styled-components";

export const TableWrapper = styled.div`

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