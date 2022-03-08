import React from "react";
import { useForm } from "../../../Hooks/useForm";
import PropTypes from "prop-types";
export const TodoAdd = ({ handleAddToDo }) => {
  const { formState, handleInputChange, resetField } = useForm({
    description: "",
  });
  const { description } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    handleAddToDo(newTodo);
    resetField();
  };
  return (
    <>
      <h4>Add Task</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="learn code"
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          ADD
        </button>
      </form>
    </>
  );
};
TodoAdd.propTypes = {
  handleAddToDo: PropTypes.func.isRequired,
};
