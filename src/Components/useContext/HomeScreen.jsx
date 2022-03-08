import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  //console.log("esto vale userContext ", user);
  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null)}</pre>
    </div>
  );
};
