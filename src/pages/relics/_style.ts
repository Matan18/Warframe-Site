import styled from 'styled-components';

export const RewardList = styled.ul`
  list-style:none;
  display:flex;
  progress{
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const RelicList = styled.ul`
  display:flex;
  flex-direction:row;
  list-style:none;
  align-items: center;
  li{
    display:flex;
    padding:10px;
  }
`;

export const Losango = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 2px 5px 2px 5px;
  background: #111;
  display:flex;
  justify-content: center;
  align-items:center;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  border: 1px solid #332f2f;
  &.selected{
    border: 3px solid #847956;
    width: 42px;
    height: 42px;
  }
  div{
    width:34px;
    height:34px;
    border-radius: 0px 2px 0px 2px;
    position:absolute;
    display:flex;
    justify-content: center;
    align-items:center;
    border: 2px solid #f5e3ae;
  }
  div+div{
    width:36px;
    height:36px;
    border-radius: 13px 2px 13px 2px;
    position:relative;
    display:flex;
    justify-content: center;
    align-items:center;
    border: 5px solid #111;
  }
  img{
    width: 24px;
    height: 26px;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;
