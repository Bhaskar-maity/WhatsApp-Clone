import { Avatar, IconButton } from '@material-ui/core';
import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import './Chat.css';
import { AttachFile, InsertEmoticon, Message, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed]  = useState('');
    const { roomId } = useParams();

    useEffect(() => {
        setSeed( Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput("");
    }

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
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a mesage</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
