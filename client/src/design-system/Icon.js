import React from "react";
import styled from "styled-components";
// import calendar from "./icons/calendar.png";
// import close_tab from "./icons/close_tab.png";
// import close from "./icons/close.png";
// import detail_panel from "./icons/detail_panel.png";
// import diamond from "./icons/diamond.png";
// import down from "./icons/down.png";
// import edit from "./icons/edit.png";
// import hierarchies from "./icons/hierarchies.png";
// import highlight_differences from "./icons/highlight_differences.png";
// import home from "./icons/home.png";
// import model from "./icons/model.png";
// import new_entity_type from "./icons/new_entity_type.png";
// import new_entity from "./icons/new_entity.png";
// import open_menu from "./icons/open_menu.png";
// import open from "./icons/open.png";
// import recluster from "./icons/recluster.png";
// import refresh from "./icons/refresh.png";
// import remediation from "./icons/remediation.png";
// import reset from "./icons/reset.png";
// import retire from "./icons/retire.png";
// import sas from "./icons/sas.png";
// import save from "./icons/save.png";
// import search from "./icons/search.png";
// import show_method from "./icons/show_method.png";
// import show_retired_records from "./icons/show_retired_records.png";
// import source from "./icons/source.png";
// import splitor from "./icons/splitor.png";
// import tool from "./icons/tool.png";
// import up from "./icons/up.png";
// import saslogo from "./saslogo.svg";
// import ReactTooltip from 'react-tooltip';
// import reason from './icons/reason.png';
import removeIcon from './icons/removeIcon.jpeg';
 
const StyledIcon = styled.img.attrs((props) => ({src: 
    // props.variant === "refresh" ? refresh :
    // props.variant === "close_tab" ? close_tab :
    // props.variant === "calendar" ? calendar :
    // props.variant === "close" ? close :
    // props.variant === "detail_panel" ? detail_panel :
    // props.variant === "diamond" ? diamond :
    // props.variant === "down" ? down :
    // props.variant === "edit" ? edit :
    // props.variant === "hierarchies" ? hierarchies :
    // props.variant === "highlight_differences" ? highlight_differences :
    // props.variant === "home" ? home :
    // props.variant === "model" ? model :
    // props.variant === "new_entity_type" ? new_entity_type :
    // props.variant === "new_entity" ? new_entity :
    // props.variant === "open_menu" ? open_menu :
    // props.variant === "open" ? open :
    // props.variant === "recluster" ? recluster :
    // props.variant === "remediation" ? remediation :
    // props.variant === "reset" ? reset :
    // props.variant === "retire" ? retire :
    // props.variant === "sas" ? sas :
    // props.variant === "save" ? save :
    // props.variant === "search" ? search :
    // props.variant === "show_method" ? show_method :
    // props.variant === "show_retired_records" ? show_retired_records :
    // props.variant === "source" ? source :
    // props.variant === "splitor" ? splitor :
    // props.variant === "up" ? up :
    // props.variant === "saslogo" ? saslogo :
    // props.variant === "reason" ? reason :
    props.variant === "remove" ? removeIcon :
    
    props.variant === "tool" && removeIcon
    
}))((props) => ({
  height: props.logo ? props.logo + '%' : props.size + "px",
  width: props.logo ? null : props.size + "px",
  padding: props.padding ? props.padding + 'rem' : .2 + 'rem',
  disabled: props.disabled ? true : false,
  opacity: props.opacity ? props.opacity : 1,
  filter: props.disabled ? 'grayscale(100%)' : 'grayscale(1%)',
  cursor: 'pointer',
  tooltip: props.tooltip ? props.tooltip : null,
  "&: hover": {
    border: '0.5px solid gray'
  }
}));
 
const Icon = (props) => {
  return (
    <>
      <StyledIcon {...props} />
      {/* <ReactTooltip /> */}
    </>
  );
};
 
export { Icon };