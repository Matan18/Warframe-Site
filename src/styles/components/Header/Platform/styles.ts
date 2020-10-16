import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  align-self: center;
  margin: 5px;
`
export const Title = styled.h3`
  color: #0e0e53;
`
export const Select = styled.select`
  width: 185px;
  height: 30px;
  border-radius: 8px;
  color: ${darken(5, '#0e0e53')};
`
