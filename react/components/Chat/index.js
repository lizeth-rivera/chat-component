import React from "react";
import { Button } from 'vtex.styleguide';

import './global.css';

const Chat = () => {
  const handleClick = () => {
    MyG2C.API.chatAsk("Solicitud de ayuda.", 10);
  }

  return (
    <div className="float">
      <Button variation="primary" onClick={handleClick} >Chat</Button>
    </div>

  );
};

export default Chat;
