import React from "react";

export const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/6973694/pexels-photo-6973694.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/6973694/pexels-photo-6973694.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
      </div>
    </div>
  );
};
