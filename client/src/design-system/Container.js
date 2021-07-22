import React from 'react'
import styled from 'styled-components'
import FlexDiv from './FlexDiv'

export default function Container(props) {
    return (
        
        <FlexDiv justify="center">
            <FlexDiv style={{maxWidth:724, padding:"1em"}} vert>
            {props.children}

            </FlexDiv>
        </FlexDiv>
    )
}
