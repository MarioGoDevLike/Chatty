import React from 'react';
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { Messages } from './Messages';
import { Input } from './Input';

export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={Cam}/>
          <img src={Add}/>
          <img src={More}/>
        </div>
      </div>
      <Messages />
      <Input />

    </div>
  )
}