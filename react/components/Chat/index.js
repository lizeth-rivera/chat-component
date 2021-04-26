import React, { useState } from "react";

import './global.css';

const Chat = () => {
  const [bubble, setBubble] = useState(true);

  const handleClick = (e) => {
    MyG2C.API.chatAsk("Gracias por contactarte al chat de Almacenes Siman con gusto te podemos ayudar, ¿Con quién tenemos el gusto?", 10);
    /* setBubble(!bubble);
    let image = e.target.src
    if (image.includes('bubb')) {
      MyG2C.API.chatAsk("Solicitud de ayuda.", 10);
      setbox(true)
    } else if (image.includes('open')) {
      console.log('cerrar');
      setbox(false)
    } */
  }

  return (

    <div className="float">
      <span className="img-btn" onClick={handleClick}></span>
    </div>
  );
};
/* <>
     {box && <div className="box">Chat</div>}
     <div className="float">
       <div>
         {bubble ? <img src="https://siman.vtexassets.com/arquivos/chat-bubb.png" width="30%" onClick={handleClick} />
           : <img src="https://siman.vtexassets.com/arquivos/chat-open.png" width="30%" onClick={handleClick} />
         }
       </div>
     </div>
   </> */
export default Chat;
