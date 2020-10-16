import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  border: #374248 solid 2px;
  background: #13242b;
  color: #fff;
  max-width: 600px;
  > h2{
    padding: 8px
  }
  > div{
    border: #374248 solid 2px;
    margin: 8px 8px;
    padding: 8px 8px;
    background: ${darken(0.5, "#13242b")};
  }
`;
