import React from "react";

const Friend = (props) => {
  return (
    <div>
      <p> Name:&nbsp;{props.friend.name}</p>
      <p> Age:&nbsp;{props.friend.age}</p>
      <p> Email:&nbsp;{props.friend.email}</p>
    </div>
  );
};

export default Friend;
