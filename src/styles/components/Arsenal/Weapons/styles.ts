import styled from 'styled-components';
import { lighten } from "polished";

export const Container = styled.div`
  background: #13242b;
  width: 500px;
  height: 350px;
`;

export const List = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  width: 505px;
  height: 350px;
  overflow: auto;

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
  display: block;
  list-style-type: none;
  margin: 0px;
  &:nth-child(3n),&:nth-child(3n+1),&:nth-child(3n+2){
    float: left
  }
`

export const Weapon = styled.div`
  background: ${lighten(0.06, '#13242b')};
  border: #374248 solid 1px;
  width: 150px;
  height: 94px;
  margin: 5px 0px 10px 10px;
  img{
    margin: 0px;
    padding: 0px;
    width: 150px;
    height: 70px;
    object-fit: cover;
    object-position: 0 0;
  }
  div{
    width: 150px;
    height: 18px;
    padding: 0px;
    margin: 0;
    background: #fff;
    p{
      margin: 2px;
      color: #000;
    }
  }
`
