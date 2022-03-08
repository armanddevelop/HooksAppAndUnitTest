import { TodoListItems } from "./TodoListItems";
import PropTypes from "prop-types";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map(({ id, description, done }, idx) => {
        return (
          <TodoListItems
            key={id}
            description={description}
            done={done}
            idx={idx}
            id={id}
            handleDelete={handleDelete}
            handleToogle={handleToggle}
          />
        );
      })}
    </ul>
  );
};
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
