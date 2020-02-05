import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { Button, Form } from "react-bootstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
            console.log('there was a problem')
        })
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    return ([

            <Form onSubmit={handleSubmit}>
                <input
                    name="chat"
                    value={message}
                    onChange={handleChange}
                    type="text"
                />
                <Button type="submit">Send</Button>
            </Form>,
            <div>
                {chat.length !== 0 && chat.map(msg => {
                    return <p>{msg.message}</p>
                })}
            </div>
            
    ])
}

export default Chat;