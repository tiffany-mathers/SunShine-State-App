import React from "react";

/**
 * This class will render each individual message received from MQTT.
 */
class Message extends React.Component {
    render() {
        const payload = this.props.message.payload;

        // ToDo: parse relevant data to render cleanly on page. Will need
        // structure of solar panel data.

        return (
            <div key={this.props.id} className="message">{payload}</div>
        );
    }
}

export default Message;