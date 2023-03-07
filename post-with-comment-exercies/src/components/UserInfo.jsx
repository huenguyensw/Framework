import React from 'react'

const UserInfo = ({ author }) => {
    return (
        <div className='userInfo'>
            <p>{author.fullname}</p>
            <img src={author.image} alt="profile-image" height='50'></img>

        </div>
    )
}

export default UserInfo
