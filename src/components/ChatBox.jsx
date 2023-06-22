import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../firebase';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef();

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50),
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages)
        });

        return () => unsubscribe;
    }, []);

    return (
        <div className='pb-44 pt-20 conatinerWrap'>
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef}>

            </div>
        </div>
    );
};

export default ChatBox
