import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Frined from "./Friend";

const FriendsList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {list.map((friend) => {
        return <Frined key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
