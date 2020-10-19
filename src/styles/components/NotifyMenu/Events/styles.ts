import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  border: #374248 solid 2px;
  background: #13242b;
  color: #fff;
  max-width: 600px;
`;

export const Title = styled.h3`
  margin: 8px;
  border-bottom: #fff solid 1px;
`;

export const List = styled.ul`
    padding: 0px;
    margin: 0px;
    max-height: 450px;
    overflow: auto;
    list-style: none;

    &::-webkit-scrollbar{
      width: 9px;
    }

    &::-webkit-scrollbar-track{
      background-color: lighten(#374248, 20);
    }

    &::-webkit-scrollbar-thumb{
      background-color: #cccccc;
      border-radius: 5px;
      height: 60px;
    }

    &::-webkit-scrollbar-button{
      background-color: #000;
      height: 5px;
    }

    &::-webkit-scrollbar-corner{
      background-color: black;
    }
`;

export const ItemList = styled.li`
  padding: 0px;
  margin: 8px 8px;
  border: #374248 solid 2px;
  background: ${darken(5, '#13242b')};
  color: #fff;
  display: flex;
  flex-direction: column;
  *{
    margin: 2px 8px;
  }
  .interimSteps{
    margin: 8px;
    display: flex;
    flex-direction: column;
    div{
      flex-direction: row;
      justify-content: space-between;
    }
  }
  strong{
    margin: 8px 8px;
  }
`;
export const Jobs = styled.li`
  margin: 10px 5px 5px;
  flex-direction: row;
  border-bottom: #374248 solid 2px;
  padding: 8px;
  justify-content: space-between;
  div{
    margin: 0px 10px;
    padding: 0px;;
    display: flex;
    flex-direction: column;
    border-width: 0px;
    strong{
      margin: 0px;
      padding: 0px;
    }
    p{
      margin: 0px;
    }
  }
`;
