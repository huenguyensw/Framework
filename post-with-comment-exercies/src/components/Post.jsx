import React, { useState } from 'react'
import CommentSection from './CommentSection'
import UserInfo from './UserInfo'

const Post = (props) => {
    const [displayComment, setDisplayComment] = useState(true);
    const toggleState = () => {
        setDisplayComment(!displayComment)
    }
    return (
        <div className='post-area'>
            <h1>{props.name.headline}</h1>
            {props.name.date.toISOString().substring(0, 10)}
            <p>{props.name.content}</p>
            <UserInfo author={props.name.author} />
            <br />
            <button onClick={toggleState}>Show/hide comments</button>
            <br />
            {displayComment ? <CommentSection note={props.comment} /> : null}

        </div>
    )
}

export default Post
