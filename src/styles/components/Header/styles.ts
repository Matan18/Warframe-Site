import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  background: linear-gradient(to right, ${darken(0.05, '#0e0e53')} 50%,${darken(0.12, '#1212c7')}, #fff );
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  max-height: 65px;
`;

export const Title = styled.h4`
  color: white;
  align-self: center;
`
