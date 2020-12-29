import { Avatar, IconButton } from '@material-ui/core';
import React, {useEffect, useState } from 'react'


import './Chat.css';
import { AttachFile, InsertEmoticon, Message, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {

    const [seed, setSeed]  = useState('');

    useEffect(() => {
        setSeed( Math.floor(Math.random() * 5000))
    }, []);

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    
                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${false && "chat__reciever"}`}>
                    <span className="chat__name">bhaskar</span>
                        hi
                    <span className="chat__timestamp">10:30am</span>
                    
                </p>
                
                
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button>Send a mesage</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
