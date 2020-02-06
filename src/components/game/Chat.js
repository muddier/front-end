import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { Button, Form } from "react-bootstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import './Chat.css';
function Chat(props) {
    const [ message, setMessage ] = useState('')
    const [ chat, setChat ] = useState([])
    useEffect(() => {        
        
        Pusher.logToConsole = true;
        
        const pusher = new Pusher('2dad5e9a4335ac2f740f', {
          cluster: 'us2',
          forceTLS: true
        });
      
        let channel = pusher.subscribe(`room-${props.roomId}`);
        channel.bind('broadcast', data => {
        setChat(oldChat => [...oldChat, data])
        });
    }, [props.roomId])

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosWithAuth()
        .post("https://mudierthegame.herokuapp.com/api/adv/say/", {message} )
        .then(res => {
            setMessage('')
        })
        .catch(err => {
            return err
        })
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className="chatbox"  >
            <Form onSubmit={handleSubmit} style={{ height: "50%", display: "flex", flexDirection: "column", margin: "10px"}}>
                <h5 className="chat-display">
                <div style={{ transformOrigin: "50% 50%", transform: "rotate(180deg)", scrollBehavior:"reverseScroll()"}}>
                {chat.length !== 0 && chat.map(msg => {
                    return <p><span style={{ color: "silver " }}>>>> {msg.user}: </span> {msg.message} </p>
                })}
                </div> 
                </h5>
                 
                <input
                    style={{ fontFamily: "VT323", fontSize: "1.3rem" }}
                    name="chat"
                    value={message}
                    onChange={handleChange}
                    type="text"
                    placeholder=">>> What's the buzz?"
                />
                <Button style={{backgroundColor: "purple", margin: "1rem 0" }}className="send-btn" type="submit">Send</Button>
            </Form> 
        </div>

    )
}

export default Chat;