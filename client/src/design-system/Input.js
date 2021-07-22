import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input.attrs(props => ({
  placeholder: props.label,
  altTheme: props.altTheme,
}))(props => ({
  flex: 1,
  height: 50,
  background: props.altTheme ? 'white' : '#1c1c1c',
  color: props.altTheme ? 'black' : 'white',
  border: props.altTheme ? '2px solid lightgray' : '2px solid white',
  borderRadius:16,
  paddingLeft: '1em',
  fontFamily: 'Montserrat',
}))
const StyledTextArea = styled.textarea.attrs(props => ({
  placeholder: props.label,
  lines: props.lines,
  altTheme: props.altTheme,
}))(props => ({
  flex: 1,
  height: 20 * props.lines,
  background: props.altTheme ? 'white' : '#1c1c1c',
  color: props.altTheme ? 'black' : 'white',
  border: props.altTheme ? '2px solid lightgray' : '2px solid white',
  paddingLeft: '1em',
  borderRadius:16,
  fontFamily: 'Montserrat',
  paddingTop: '1em',
}))


export const Input = props => {
  if (props.lines) {
    return <StyledTextArea {...props} />
  }
  return <StyledInput {...props} />
}
