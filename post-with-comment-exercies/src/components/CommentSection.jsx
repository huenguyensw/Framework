import React from 'react'
import UserInfo from './UserInfo'

const CommentSection = (props) => {
    
    return (
        <div className='comment-area'>
            <h1>Comment Section</h1>
            <div className='comment-content'>
                <section>
                    <h1>{props.note.content}</h1>
                    {props.note.date.toISOString().substring(0,10)}
                </section>
                <section>
                    <UserInfo author={props.note.author} />
                </section>

            </div>

        </div>
    )
}

export default CommentSection
