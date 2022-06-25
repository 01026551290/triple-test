import styled from "styled-components";
import TRIPLE_LOGO from '../../assets/img/triple2x.png'

interface StyledProps {
    opacityState: boolean
}

export const LogoContent = styled.div<StyledProps>`
  position: absolute;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  background-image: url('${TRIPLE_LOGO}');
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  top: ${(props) => (props.opacityState ? '180px;' : '150px;')}
  opacity: ${(props) => (props.opacityState ? 0 : 1)};
  transition: all 700ms ease-in;
`