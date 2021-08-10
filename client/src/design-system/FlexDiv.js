import React from 'react'
import styled from 'styled-components'
import useBreakpoint from '../hooks/useBreakpoint'

const StyledFlexDiv = styled.div(props => ({
    display: "flex",
    flexWrap: props.container ? "nowrap" : "wrap",
    flex: props.size ? props.size : 1,
    justifyContent: props.justify && props.justify,
    alignItems: props.align && props.align,
    flexDirection: props.vert ? "column" : "row",
    boxShadow: props.card && "0 4px 8px 0 rgba(0,0,0,0.2)",
    // flexDirection: (props.container && props.breakpoint === "sm" || props.container && props.breakpoint === "xs" )? "column" : "row",
    // padding:5,
    // margin:5,
    // border:"1px solid black",
    gap:16,
    paddingLeft : props.pl && props.pl,
    paddingRight: props.pr && props.pr,
    paddingTop: props.pt && props.pb,
    paddingBottom: props.pb && props.pb,
    padding: props.padding && props.padding,
    marginLeft : props.ml && props.ml,
    marginRight: props.mr && props.mr,
    marginTop: props.mt && props.mb,
    marginBottom: props.mb && props.mb,
    background: props.card &&"white",
    color: props.card  &&"black"


}));

export default function FlexDiv(props) {
   
    const breakpoint = useBreakpoint()
    return (
        
        <StyledFlexDiv {...props} breakpoint={breakpoint}>
            {props.children}
        </StyledFlexDiv>
    )
}
