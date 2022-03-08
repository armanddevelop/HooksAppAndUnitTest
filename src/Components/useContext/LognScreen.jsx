import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LognScreen = () => {
  const { setUser } = useContext(UserContext);
  const userObj = {
    id: 123,
    name: "creting",
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(userObj)}>
        User
      </button>
    </div>
  );
};
