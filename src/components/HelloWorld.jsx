import React, { useEffect, useState } from "react";
import { getMessages, createMessage } from "../services/api";

function HelloWorld() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    getMessages().then((data) => setMessages(data));
  }, []);

  const handleAddMessage = async () => {
    if (!newMessage.trim()) return;
    const saved = await createMessage(newMessage);
    setMessages([...messages, saved]);
    setNewMessage("");
  };

  return (
    <div>
      <h3>Messages from Backend</h3>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            {msg.id}: {msg.message}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleAddMessage}>Add</button>
    </div>
  );
}

export default HelloWorld;
