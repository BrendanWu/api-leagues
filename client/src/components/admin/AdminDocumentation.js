import React from 'react'
import Container from '../../design-system/Container'
import FlexDiv from '../../design-system/FlexDiv'
import makeApiRequest from '../../services/makeApiRequest'
import PostView from './components/PostView'

const AdminDocumentation = ({auth}) =>{
    const [posts, setPosts] = React.useState([])

    React.useEffect(async () => {
      const response = await makeApiRequest(
        `blog/getPostsByCategory/${"homePage"}`,
        "GET",
        {},
        auth.token
      )
      console.log(response)
      if (response.data.success) {
  
        setPosts(response.data.posts)
      }
  
    }, [])
  
    return (
    
        <FlexDiv vert>
        {posts.map((post, i) => {
          return <PostView post={post} />
        })}
      </FlexDiv>
     
    )
}

export default AdminDocumentation