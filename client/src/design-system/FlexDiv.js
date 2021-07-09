import React from 'react'
import styled from 'styled-components'


const StyledFlexDiv = styled.div(props => ({
    display: "flex",
    flexWrap: props.container ? "nowrap" : "wrap",
    flex: props.size ? props.size : 1,
    justifyContent: props.justify && props.justify,
    alignItems: props.align && props.align,
    flexDirection: props.vert ? "column" : "row",
    paddingLeft : props.pl && props.pl,
    paddingRight: props.pr && props.pr,
    paddingTop: props.pt && props.pb,
    paddingBottom: props.pb && props.pb,
    marginLeft : props.ml && props.ml,
    marginRight: props.mr && props.mr,
    marginTop: props.mt && props.mb,
    marginBottom: props.mb && props.mb,


}));

export default function FlexDiv(props) {
    return (
        
        <StyledFlexDiv {...props}>
            {props.children}
        </StyledFlexDiv>
    )
}
