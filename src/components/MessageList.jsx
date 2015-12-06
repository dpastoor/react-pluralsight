import React, { Component } from 'react';
import Message from "./Message.jsx"
export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'hello how are you',
                'I am fine, and you'
            ]
        }
    }
    render() {
        var messageNodes = this.state.messages.map((message) => {
            return (
                <Message message={message} />
            );
        });
        return (
            <div>{messageNodes}</div>
        )
    }
}


