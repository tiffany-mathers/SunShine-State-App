
import React from 'react';
import Message from './Message';
import {host} from "./host/host";

// Connect to MQTT server and subscribe to relevant topic.
const mqtt = require('mqtt');
const client = mqtt.connect(host);
const topic = "home/#"
client.on('connect', function() {
  client.subscribe(topic);
});

/**
 * This class connects to MQTT and creates the container for displaying messages.
 */
class MessageList extends React.Component {
   
    /**
     * Constructor sets initial state.
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            messages:[]
        };
    }
 
    /**
     * Updates the state as messages are received from MQTT.
     */
    addMessage = (message) => {
        let updated = this.state.messages;
        updated.push(message);
        this.setState({messages: updated});
    }

    /**
     * Once the component is mounted, subscribe to MQTT using client.
     */
    componentDidMount() {
        const self = this;
        client.on('message', function(topic, payload, packet) {
            self.addMessage({
                id: Date.now(),
                topic: topic,
                payload: payload.toString()
            });
        });
    }

    /**
     * Render method
     * 
     * retuns Object
     */
    render() {
        // Retrieve messages from the state, and use the values to create
        // Message objects.
        const messages = this.state.messages.map(function(message) {
            return (
                <Message key={message.id} id={message.id} message={message} />
            );
        });

        return (
            <div id="messageList" >
                <h1>Channel: {topic}</h1>
                <div className="messages">{messages}</div>
            </div>
        );
    }
}

export default MessageList;