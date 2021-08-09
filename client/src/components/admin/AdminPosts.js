import React from 'react'
import FlexDiv from '../../design-system/FlexDiv'
import makeApiRequest from '../../services/makeApiRequest'
import MarkdownEditor from '../MarkdownEditor'
const AdminPosts = ({auth})=>{
    const handleSave = async(metaForm, value) => {
        const body = {metaForm, value}
        const response = await makeApiRequest(
            "blog/createNewPost",
            "POST",
            body,
            auth.token
          );
          console.log(response)
    }
    return(
        <div className="container" style={{width:800}}>
            <FlexDiv style={{marginBottom:16}}>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
            </FlexDiv>
            <MarkdownEditor auth={auth} handleSave={handleSave}/>
        </div>
    )
}

export default AdminPosts