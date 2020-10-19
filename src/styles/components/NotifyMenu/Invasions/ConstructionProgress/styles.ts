import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  border: '#374248' solid 2px;
  background: ${darken(0.05, '#13242b')};
  color: #fff;
  margin: 0px 8px 20px 8px;
`;

export const Title = styled.h3`
  margin: 5px;
`

export const Content = styled.div`
  border-width: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 8px;
  div{
    display: flex;
    flex-direction: row;
    p{
      margin: 25px 0px;
    }
    div{
      margin: 20px;
      flex-direction: column;
      p{
        margin: 0;
      }
    }
  }
`
