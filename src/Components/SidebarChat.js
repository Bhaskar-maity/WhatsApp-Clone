import { Avatar } from '@material-ui/core';
import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import "./SidebarChat.css";

import db from '../firebase'

function SidebarChat({addNewChat, id, name }) {

    const [seed, setSeed]  = useState('');

    useEffect(() => {
        setSeed( Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name of the chat");

        if(roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last messege...</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat}
        className='sidebarChat'>
            <h2>Add new chat</h2>
        </div>    
    )
}

export default SidebarChat
