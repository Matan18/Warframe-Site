import styled from 'styled-components';
import { darken, lighten } from "polished";

export const Container = styled.div`
  border: #374248 solid 2px;
  background: #13242b;
  color: #fff;
  max-width: 600px;
  div{
    border-width: 0px;
    overflow: auto;

    &::-webkit-scrollbar{
      width: 9px
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
  }
`;

export const Title = styled.h3`
  margin: 8px;
  color: #fff;
  border-bottom: #fff solid 1px;
`

export const List = styled.ul`
  max-height: 450px;
  list-style: none;
`

export const ListItem = styled.li`
  padding: 8px;
  margin: 8px;
  border: #374248 solid 2px;
  background: ${darken(0.05, '#13242b')};
  display: flex;
  flex-direction: column;
  strong{
    padding: 8px;
  }
  div{
    padding: 5px;
    margin: 0px;
    border-width: 0px;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }
`
interface IProgressiveBarProps {
  attackingFaction: string;
  deffendingFaction: string;
  completion: number;
}

export const ProgressBar = styled.progress<IProgressiveBarProps>`
  align-self:center;
  background:#8257e6;
  height: 10px;
  width: 500px;
  ::-webkit-progress-bar { background: ${props => props.deffendingFaction}; }
  ::-webkit-progress-value { background: ${props => props.attackingFaction}; }
`
