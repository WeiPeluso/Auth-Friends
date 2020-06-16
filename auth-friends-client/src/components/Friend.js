import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const Friend = (props) => {
  const deleteFriend = (e) => {
    axiosWithAuth()
      .delete(`api/friends/${props.friend.id}`)
      .then((res) => {
        props.setList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <p> Name:&nbsp;{props.friend.name}</p>
      <p> Age:&nbsp;{props.friend.age}</p>
      <p> Email:&nbsp;{props.friend.email}</p>
      <button onClick={deleteFriend}>Delete</button>
    </div>
  );
};

export default Friend;
