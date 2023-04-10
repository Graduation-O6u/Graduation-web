import React, { useState } from 'react';
import '../not.css';
import styles from "../notfications.module.css";
import Image1 from "../../../images/avatar1.png";
import Image2 from "../../../images/avatar2.png";
import Image4 from "../../../images/avatar3.png" ;
function App() {
      const [unreadCount, setUnreadCount] = useState(2);
  const [messages, setMessages] = useState([
    {
      id: 1,
      avatar: Image1 ,
      user: "Amany Mohamed sayed sayed ",
      time: "1m ago",
      message: "Thinking about emigrating for work? Nearly half of young Arabs in MENA are either actively looking to do so or considering it.",
      isUnread: true
    },
    {
      id: 2,
      avatar: Image2,
      user: "Asmaa",
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "5m ago",
      isUnread: true
    },
    {
      id: 4,
      avatar: Image4 ,
      user: "Nourhan Mohamed ",
      time: "2 weeks ago",
      message: "Thinking about emigrating for work? Nearly half of young Arabs in MENA are either actively looking to do so or considering it.",
      isUnread: false
    }
  ]);
  const handleUnreadMessageClick = (id) => {
    const updatedMessages = messages.map((message) =>
      message.id === id ? { ...message, isUnread: false } : message
    );
    setMessages(updatedMessages);
    setUnreadCount(updatedMessages.filter(message => message.isUnread).length);
  };

  const handleMarkAllRead = () => {
    const updatedMessages = messages.map((message) =>
      message.isUnread ? { ...message, isUnread: false } : message
    );
    setMessages(updatedMessages);
    setUnreadCount(0);
  };
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.notif_box} >
          <h2 className={styles.title}>Notifications</h2>
          <span className={styles.notifes}>{unreadCount}</span>
        </div>
        <p id="mark_all" onClick={handleMarkAllRead}>Mark all as read</p>
      </header>
      <main>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`notif_card ${message.isUnread ? "unread" : ""}`}
            onClick={() => handleUnreadMessageClick(message.id)}
          >
            <div className={styles.description}>
              <img src={message.avatar} className={styles.avatar} alt=" " />
              <p className={styles.user_activity}>
                <strong>{message.user}</strong>{" "}
              </p>
              <p className={styles.time}>{message.time}</p>
            </div>
            <div className={styles.message}>
                <p>{message.message}</p>
              </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
