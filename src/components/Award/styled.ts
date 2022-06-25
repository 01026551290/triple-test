import styled from "styled-components";

interface ContainerProps {
    opacityState: boolean
}

interface AwardProps {
    imageUrl: string
}

export const Award = styled.div<AwardProps>`
  position: relative;
  display: inline-block;
  height: 54px;
  padding: 5px 0 5px 62px;
  margin-right: 39px;
  background-size: 54px 54px;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
`

export const Container = styled.div<ContainerProps>`
  position: relative;
  margin: 50px 0 140px 623px;
  white-space: nowrap;
  top: ${(props) => (props.opacityState ? '30px;' : '0px;')}
  opacity: ${(props) => (props.opacityState ? 0 : 1)};
  transition: all 700ms ease-in;
`