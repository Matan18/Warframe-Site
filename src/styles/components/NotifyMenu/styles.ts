import styled from "styled-components";

export const Container = styled.div`
  justify-self: right;
  max-width: 600px;
`;
export const List = styled.ul`
  background: #13242b;
  display: flex;
  list-style: none;
  width: 600px;
  border: #374248 solid 2px;
  justify-content: center;
`;
export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  div{
    padding: 5px 0;
    margin: 0 5px;
    p{
      margin: 0;
      padding: 0;
      color: #ffffff;
      word-wrap: none;
    }
    &.selected{
      background: #404f54;
    }
  }
`;
