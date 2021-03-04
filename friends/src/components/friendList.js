import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendList = () => {
  const [friends, SetFriends] = useState([{}]);

  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
  });

  const changeInput = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res.data);
        SetFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addFriend = (e) => {
    axiosWithAuth()
      .post("/api/friends", formInput)
      .then((res) => {
        console.log(res);
        SetFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={addFriend}>
        <label>
          Name
          <input
            type="text"
            onChange={changeInput}
            name="name"
            value={formInput.name}
          ></input>
        </label>

        <label>
          Age
          <input
            type="text"
            onChange={changeInput}
            name="age"
            value={formInput.age}
          ></input>
        </label>

        <label>
          Email
          <input
            type="text"
            onChange={changeInput}
            name="email"
            value={formInput.email}
          ></input>
        </label>

        <button>Add</button>
      </form>

      {friends.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendList;
