import styled from 'styled-components';
import { darken, lighten } from "polished";

export const Container = styled.div`
  border: #374248 solid 2px;
  border-bottom: none;
  background: #13242b;
  color: #fff;
  width: 600px;
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
    li{
      margin:0px;
      margin-top:0px;
      padding:0px;
      ul{
        margin:0px;
        padding:0px;
        overflow: hidden;
        li{
          margin: 8px;
          margin-top:0px;
        }
      }
    }
`

export const ItemList = styled.li`
      flex-direction: row;
      padding: 0px;
      margin: 8px 8px;
      border: #374248 solid 2px;
      background: ${darken(0.05, '#13242b')};
      color: #fff;
      display: flex;
      justify-content: space-between;
      max-width: 570px;

      img{
        padding: 0px 8px 20px 10px;
      }

      div{

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        margin: 0px 5px 0px;
        max-width: 510px;
        border-width: 0px;
        div{

          max-width: 230px;
          padding: 0px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          border-bottom: 0px;
          p{
            min-width:100px;
            text-align:center;
            align-self: center;
            justify-self: flex-end;
            border-top: 0px;
            margin: 0px 0px 0px 20px;
          }
          time{
            min-width:100px;
            margin: 0px 0px 0px 20px;

            justify-self: flex-end;
          }
        }
        strong{
          margin: 8px;
          padding: 0px;
          text-align:right;
        }
        p{
          border-top: 0px;
          margin: 8px;
        }
      }
`

export const Image = styled.img`
  padding: 0px 8px 20px 10px;
`
