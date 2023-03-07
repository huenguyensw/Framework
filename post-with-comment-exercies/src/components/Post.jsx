import React, { useState } from 'react'
import CommentSection from './CommentSection'
import UserInfo from './UserInfo'

const Post = ({name,comment}) => {
    const [displayComment, setDisplayComment] = useState(true);
    const toggleState = () => {
        setDisplayComment(!displayComment)
    }
    return (
        <div className='post-area'>
            <h1>{name.headline}</h1>
            {name.date.toISOString().substring(0, 10)}
            <p>{name.content}</p>
            <UserInfo author={name.author} />
            <br />
            <button onClick={toggleState}>Show/hide comments</button>
            <br />
            {displayComment ? <CommentSection note={comment} /> : null}

        </div>
    )
}

export default Post
