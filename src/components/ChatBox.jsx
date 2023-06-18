import React from 'react'
import Message from './Message'

const ChatBox = () => {
    const messages = [{
        id: 1,
        text: 'Hello World',
        name: "Anirudh"
    },
    {
        id: 2,
        text: 'hi',
        name: "Ani"
    }
    ]

    return (
        <div className='pb-44 pt-20 conatinerWrap'>
            {messages.map(message=> (
                <Message key={message.id} message={message}/>
            ))}
        </div>
    )
}

export default ChatBox
