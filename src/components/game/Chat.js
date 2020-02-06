import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { Button, Form } from "react-bootstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import '../styles/Chat.css';
function Chat(props) {
    const [ message, setMessage ] = useState('')
    const [ chat, setChat ] = useState([])
    useEffect(() => {        
        setChat([])
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
console.log("Room data", props.charactersData)
    return (
        <div className="chatbox"  >
            <div className="screen room-name">
                <h5 style={{textAlign:"center", verticalAlign: "center", textTransform: "capitalize", fontSize: "1.8rem"}}>Location: {props.charactersData.title}</h5>
            </div>
            <Form onSubmit={handleSubmit} style={{ height: "100%", display: "flex", flexDirection: "column", margin: "10px"}}>
                <h5 className="chat-display screen">
                    <div style={{ transformOrigin: "50% 50%", transform: "rotate(180deg)", scrollBehavior:"reverseScroll()"}}>
                    {chat.length !== 0 && chat.map((msg, i) => {
                        return <p key={i}><span style={{ color: "silver " }}>>>> {msg.user}: </span> {msg.message} </p>
                    })}
                    </div> 
                </h5>
                 
                <input
                    style={{ fontFamily: "VT323", fontSize: "1.3rem", margin: "10px" }}
                    name="chat"
                    value={message}
                    onChange={handleChange}
                    type="text"
                    placeholder=">>> What's the buzz?"
                />
                <Button style={{backgroundColor: "purple", margin: "10px", maxWidth:"300px"}}className="send-btn" type="submit">Send</Button>
            </Form> 
        </div>

    )
}

export default Chat;