import React from 'react'
import './UserInfo.css';

function UserInfo({user}) {

    const {profilePicture, name, email, role} = user;

    return (
        <div className='UserInfo'>
            <img src={profilePicture} alt="Profile" />
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    );

}

export default UserInfo

