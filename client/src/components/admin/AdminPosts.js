import React from 'react'
import FlexDiv from '../../design-system/FlexDiv'
import { Icon } from '../../design-system/Icon';
import makeApiRequest from '../../services/makeApiRequest'
import MarkdownEditor from '../MarkdownEditor'

import PostView from './components/PostView';
const AdminPosts = ({ auth }) => {

    const [posts, setPosts] = React.useState([])
    const handleRemove = async (_id) => {
        const body = {_id}
        const response = await makeApiRequest(
            "blog/deletePostById",
            "DELETE",
            body,
            auth.token
        )
        if(response.data.success){
            setPosts(response.data.posts)
        }
    }
    React.useEffect(() => {
        getAllPosts()
    }, [])

    const handleSave = async (metaForm, markdownString) => {
        const body = { metaForm, markdownString }
        const response = await makeApiRequest(
            "blog/createNewPost",
            "POST",
            body,
            auth.token
        );
        if(response.data.success){
            setPosts([...posts, response.data.post])
        }
        console.log(response)
    }
    const getAllPosts = async () => {
        const response = await makeApiRequest(
            "blog/getAllPosts",
            "GET",
            {},
            auth.token
        )
        console.log(response)
        if (response.data.success) {
            setPosts(response.data.posts)
        }

    }
    return (
        <div className="container" style={{ width: 800 }}>
            {/* <FlexDiv style={{marginBottom:16}}>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
            </FlexDiv> */}
            <FlexDiv vert>
                {posts.map((p, i) => {
                    return <FlexDiv padding={8} card justify="space-between"><p>{p.title}</p><p>{p.category}</p><Icon onClick={()=>handleRemove(p._id)} variant="remove" width={16} height={16}/></FlexDiv>
                })}
            </FlexDiv>

            <MarkdownEditor auth={auth} handleSave={handleSave} />
        </div>
    )
}

export default AdminPosts