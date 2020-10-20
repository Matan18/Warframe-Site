import styled from 'styled-components';

export const Container = styled.div`
  max-width: 505px;
`;

export const List = styled.div`
  background: #13242b;
  display: flex;
  list-style: none;
  border: #374248 solid 2px;
  justify-content: center;
  width: 500px;
`

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  p{
    margin: 0;
    padding: 0;
    color: #ffffff;
    word-wrap: none;
    }
  div{
    padding: 5px 0;
    margin: 0 5px;
    &.selected{
      background: #404f54;
      border: 1px solid #e4d873;
      border-bottom: 2px solid #e4d873;
      *{
        color: #e4d873;
      }
    }
  }
`
