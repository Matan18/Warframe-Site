import styled from 'styled-components';
import { darken, lighten } from "polished";

export const Container = styled.div`
  border: #374248 solid 2px;
  background: #13242b;
  color: #fff;
  max-width: 600px;
`;

export const Title = styled.h3`
  margin: 8px;
  border-bottom: #fff solid 1px;
`

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

    background-color: ${lighten(0.2, '#374248')};
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
`

export const ListItem = styled.li`
  padding: 0px;
  margin: 8px 8px;
  border: #374248 solid 2px;
  background: ${darken(0.05, '#13242b')};
  color: #fff;
  display: flex;
  flex:1;
  flex-direction: column;
  div:first-child{
    display: flex;
    flex-direction: row;
    background: ${darken(0.05, '#13242b')};
    img{
      width: 65px;
      height: 65px;
    }
  }
  time{
    margin: 5px auto;
  }
`

export const Content = styled.div`
  flex-direction: row;
  border-width: 0px;
  background: ${darken(0.05, '#13242b')};
  padding: 8px;
  margin: 10px 5px 0px;
  justify-content: space-between;
  border-bottom: #374248 solid 2px;

  div{
    margin: 0px 10px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    border-bottom: 0px;
    strong{
      margin: 0px;
      padding: 0px;
    }
    p{
      padding: 5px 0px;
    }

}
`
