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
  width: 500px;
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
    float: left;
  }
`

export const ArcaneItem = styled.div`
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
  &.selected{
    display:flex;
    flex-direction: row;
    width: 450px;
    height: 200px;
  }
`

export const TitleBox = styled.div`
  width: 150px;
  max-height: 18px;
  padding: 0px;
  margin: 0;
  background: #fff;
  p{
    margin: 2px;
    color: #000;
  }
`;

export const Effect = styled.div`
  width: 450px;
  height: 18px;
  background: none;
  padding: 8px;
  color: #fff;
  h3{
    background: none;
    padding: 0px 10px 0px 0px;
    p{
      margin: 5px 10px;
    }
  }
  h4{
    background: none;
    padding: 10px 0px;;
  }
`
