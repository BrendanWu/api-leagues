import React from 'react'
import styled from 'styled-components'
import FlexDiv from './FlexDiv'
import { RippleWrapper } from './WithRipple'
// import { VariantOptions, Icon } from './Icon'

const StyledButton = styled.button`
  background-color: ${props => (props.theme.mode === "dark" ? 'white' : 'black')};
  color: ${props  => (props.theme.mode === "dark" ? 'black' : 'white')};
  width: 100%;
  height: 36px;
  cursor: pointer;
  font-size: 12px;
  border-radius:12px;
  border-color:black;
  ${({ alt, disabled }) =>
    !disabled &&
    `
    &:hover {
      background-color: ${props => (props.theme.mode === "dark" ? 'black' : 'white')};
      color: ${props => (props.theme.mode === "dark" ? '' : 'black')};
      border: solid 1px black;
    }
  `}

  &:focus {
    outline: 0;
  }
  ${({ disabled }) =>
    disabled &&
    `
  
     cursor: auto;
  `}
`


const Button = props => {
  if (props.disabled) {
    return (
      <StyledButton {...props}>
        <FlexDiv container justify="center" align="center">
          <p style={{ margin: 0 }}>{props.label}</p>
          {/* {props.icon ? <Icon variant={props.icon} size={10} /> : null} */}
        </FlexDiv>
      </StyledButton>
    )
  } else {
    return (
      <RippleWrapper className="rippleWrapper">
        <StyledButton {...props}>
          <FlexDiv container justify="center" align="center">
            <p style={{ margin: 0 }}>{props.label}</p>
            {/* {props.icon ? <Icon variant={props.icon} size={10} /> : null} */}
          </FlexDiv>
        </StyledButton>
      </RippleWrapper>
    )
  }
}

export default Button;