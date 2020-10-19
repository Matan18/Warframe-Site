import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  background: #13242b;
  border: #374248 solid 2px;
`;

export const Title = styled.h3`
  padding: 0px;
  margin: 5px;
  color: #fff;
  border-bottom: #fff solid 1px;
`

export const Content = styled.div`
  padding: 8px;
  margin: 10px 5px;
  background: ${darken(0.05, '#13242b')};
  color: #fff;
  display: flex;
  flex-direction: row;
  img{
    width: 100px;
    height: 100px;
  }
`

export const Description = styled.div`
  padding: 2px 5px;
  margin: 2px 5px;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  p{
    margin: 0;
    &+p+p{
      margin: auto;
    }
  }
`
