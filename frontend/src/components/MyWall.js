import React, { Component } from 'react';
import Message from './Messages'

class MyWall extends Component {
    render() {
        return (
            <div>
                <h2>Bonjour, {this.props.nom} !</h2>
                <Message>Salut 1</Message>
                <Message>Salut 2</Message>
                <Message>Salut 3</Message>
            </div>
        )
    }
}

export default MyWall;