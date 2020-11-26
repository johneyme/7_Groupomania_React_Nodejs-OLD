import React from 'react';
import "./Messages.css"

const Message = (props) => {
    
    return (
        <div className='messages'>
            <h3>Titre : {props.children} </h3>
            <p>Message : </p>
        </div>
    )
}

export default Message;