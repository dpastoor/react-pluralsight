import React, { Component } from 'react';
import Channel from "./Channel.jsx"
import mui, {Card, List } from 'material-ui'

export default class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                "Channel 1",
                "Channel 2"
            ]
        }
    }
    render() {
        var channelNodes = this.state.channels.map((channel) => {
            return (
                <Channel channel={channel} />
            );
        });
        return (
            <Card>
                <List>
                    {channelNodes}
                </List>
            </Card>
        )
    }
}


