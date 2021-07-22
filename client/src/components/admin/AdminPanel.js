import React from "react";
import Button from "../../design-system/Button";
import Container from "../../design-system/Container";
import FlexDiv from "../../design-system/FlexDiv";
import { useSelector } from "react-redux";
const AdminPanel = () => {
    const auth = useSelector((state) => state.auth);
  return (
    <>
          <FlexDiv container>
          <FlexDiv size={2} vert>
  
          </FlexDiv>
          <FlexDiv size={8} align="center" justify="space-between" pl="1em">
          <h3>Admin Panel</h3>
        <p>
        Logged in as {auth.email}
        </p>
          </FlexDiv>
      </FlexDiv>

      <FlexDiv container>
          <FlexDiv size={2} vert>
              {[1,2,3,4,5,6,7,8,9,10].map((tab, i)=>{
                  return (
                      <Button label={`Tab ${tab}`}/>
                  )
              })}
          </FlexDiv>
          <FlexDiv size={8} vert pl="1em">
              <h5 style={{margin:0}}>Tab contents</h5>
            
          </FlexDiv>
      </FlexDiv>
    </>
  );
};

export default AdminPanel;
