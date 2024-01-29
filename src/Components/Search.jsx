import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find your friend"/>
      </div>
      <div className="userChat">
        <img  src="https://images.pexels.com/photos/6973694/pexels-photo-6973694.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};
