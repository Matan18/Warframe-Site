import styled from 'styled-components';
import { lighten } from "polished";

export const Status = styled.div`
  background: #1f1f1f;
  margin: 10px;
  border: #374248 solid 2px;
  width:300px;
  height: 450px;
  display:flex;
  flex-direction: column;
  h2{
    margin: 0px 5px;
  }
  div {
    border-top: 1px solid ${lighten(0.2, '#1f1f1f')};
    padding: 0px 5px;
    margin: 0px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    *{
      margin: 2px 0;
    }
  }
`
