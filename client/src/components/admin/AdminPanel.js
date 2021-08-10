import React from "react";
import Button from "../../design-system/Button";
import Container from "../../design-system/Container";
import FlexDiv from "../../design-system/FlexDiv";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import AdminScrape from "./AdminScrape"
import MarkdownEditor from '../MarkdownEditor'
import AdminPosts from './AdminPosts'
import AdminDocumentation from "./AdminDocumentation";
const AdminPanel = () => {
    const auth = useSelector((state) => state.auth);
    const history = useHistory()
    const historyPushTo =(route)=>{
      history.push(route);
    }
  return (
    <div>
          <FlexDiv container>
          <FlexDiv size={2} vert>
  
          </FlexDiv>
          <FlexDiv size={8} align="center" justify="space-between" pl="2em">
          <h3>Admin Panel</h3>
        <p>
        Logged in as {auth.email}
        </p>
          </FlexDiv>
      </FlexDiv>

      <FlexDiv container>
          <FlexDiv size={2} vert style={{background:"white", color:"black", padding:16}}>
            <div onClick={()=>historyPushTo("/")}>Exit</div>
            <div><a target="_blank" href="https://us-east-1.admin.amplifyapp.com/admin/d1ssam03exdti8/dev/home">AWS</a></div>
            <div onClick={()=>historyPushTo("/admin")}>Home</div>
            <div onClick={()=>historyPushTo("/admin/documentation")}>Documentation</div>
            <div onClick={()=>historyPushTo("/admin/scrape")}>Scraper</div>
            <div onClick={()=>historyPushTo("/admin/posts")}>Posts</div>
              {[1,2,3,4,5,6,7,8,9,10].map((tab, i)=>{
                  return (
                      <div>{`Tab ${tab}`}</div>
                  )
              })}
          </FlexDiv>
          <FlexDiv size={8} vert>
              {/* <h5 style={{margin:0}}>Tab contents</h5> */}
              <Route path="/admin/posts" exact>

            <AdminPosts auth={auth}/>
              </Route>
              <Route path="/admin/documentation" exact>

            <AdminDocumentation auth={auth}/>
              </Route>
              
            <Route path="/admin/scrape" exact>
            <AdminScrape auth={auth}/>
              </Route>
            
          </FlexDiv>
      </FlexDiv>
    </div>
  );
};

export default AdminPanel;
