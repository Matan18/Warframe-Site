import styled from 'styled-components';
import { lighten } from "polished";

export const Container = styled.div`
  z-index:0;
  *{
    z-index: 0;
  }
`;

export const Introduction = styled.div`
  margin: 10px;
`

export const Line = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 250px;
  margin:0px;
  padding: 0px;
`

export const Thumb = styled.img`
  margin: 0;
  padding: 0;
  max-height: 242px;
  max-width: 300px;
  object-fit: cover;
  object-position: 0 10px;
`;

export const Status = styled.div`
  background: #1f1f1f;
  margin: 10px;
  border: #374248 solid 2px;
  width:300px;
  height: 242px;
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

export const BuiltInfos = styled.div`
  border: #374248 solid 2px;
  background: #1f1f1f;
  margin: 10px;
  padding: 5px;
  height: 242px;
`

export const Component = styled.tr`

  td{
    padding: 5px 0px;
    margin: 0px 35px;
    text-align: center;
  }
`

export const AbilitiesContainer = styled.div`
  margin: 10px;
  h2{
    margin: 0 15px;
  }
  .abilities{
    display: flex;
    flex-direction: row;
  }
`


export const Ability = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-height: 150px;
  border: #374248 solid 2px;
  *{
    margin: 5px;
  }
`

export const Mods = styled.div`
  background: ${lighten(0.03, '#1f1f1f')};
`
export const MoreInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const Loading = styled.div``
