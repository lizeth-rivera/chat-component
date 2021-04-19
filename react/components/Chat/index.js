import React, { useState } from "react";

import './global.css';

const Chat = () => {
  const [bubble, setBubble] = useState(true);

  const handleClick = (e) => {
    MyG2C.API.chatAsk("Solicitud de ayuda.", 10);
  }

  return (
    <div className="float">
      <span className="img-btn" onClick={handleClick}></span>
    </div>
  );
};

export default Chat;
