import { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const userRest = {};
  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null)}</pre>
      <button className="btn btn-warning" onClick={() => setUser(userRest)}>
        Log out
      </button>
    </div>
  );
};
