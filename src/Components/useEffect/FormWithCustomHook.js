//import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "../../Hooks/useForm";

import "./effects.css";

export const FormWithCustomHook = () => {
  const { formState, handleInputChange } = useForm();
  const { name, email, password } = formState;
  useEffect(() => {
    console.log("email cambio");
  }, [email]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
