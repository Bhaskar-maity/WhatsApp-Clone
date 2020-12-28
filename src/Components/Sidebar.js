import React from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import './Sidebar.css';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar />

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    
                    
                    
                </div>
            </div>

            <div className="sidebar__search">
                <SearchIcon />
                <input placeholder="chats" type="text" />
            </div>

            <div className="sidebar__chats">

            </div>
            
        </div>
    )
}

export default Sidebar;
