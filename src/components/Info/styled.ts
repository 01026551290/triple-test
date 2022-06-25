import styled from "styled-components";

interface StyledProps {
    opacityState: boolean
}

export const Container = styled.div<StyledProps>`
  position: relative;
  margin-left: 623px;
  padding-top: 150px;
  top: ${(props) => (props.opacityState ? '30px;' : '0px;')}
  opacity: ${(props) => (props.opacityState ? 0 : 1)};
  transition: all 700ms ease-in;
`

export const Info = styled.div`
  position: relative;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`