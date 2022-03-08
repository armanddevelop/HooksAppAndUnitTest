import { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  useEffect(() => {
    //console.log("Hey!!!");
  }, []);
  useEffect(() => {
    //console.log("Hey!!! form state");
  }, [formState]);
  useEffect(() => {
    //console.log("Hey!!! email");
  }, [email]);
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Escribe tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="ejemplo@mail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}
    </>
  );
};
