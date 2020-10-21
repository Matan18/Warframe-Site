import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  background: linear-gradient(to right, ${darken(0.05, '#0e0e53')} 50%,${darken(0.12, '#1212c7')}, #fff );
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 97px;
`;

export const Title = styled.h4`
  color: white;
  align-self: center;
`

export const Line = styled.div`
  justify-content: space-between;
  display:flex;
  flex-direction: row;
  width: 100%;
`
