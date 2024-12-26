import React from "react";
import "./userprofile.css";

function UserProfile() {
    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s" alt="Profile" />
            <p>UserName: Mudassir Muneer</p>
            <p>Created at: 12/25/2024</p>
            <p>Bio: I am a passionate full-stack web developer with a strong background in JavaScript, HTML, CSS, and React. I am always eager to learn new technologies and expand my skill set. I am a team player with excellent communication skills. I enjoy solving problems and working on projects.</p>
            <h3>Products sold:</h3>
            <ul>
                <li>Laptop</li>
                <li>Smartphone</li>
                <li>Headphones</li>
            </ul>
        </div>
    );
}

export default UserProfile;