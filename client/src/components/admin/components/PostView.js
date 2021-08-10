import React from 'react'
import MDEditor from '@uiw/react-md-editor';

const PostView = ({post}) => {

    return (
        <div>

             <MDEditor.Markdown source={post.markdownString} />
        </div>
    )
}

export default PostView