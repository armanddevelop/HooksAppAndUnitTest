import PropTypes from "prop-types";
export const TodoListItems = ({
  description,
  done,
  idx,
  id,
  handleDelete,
  handleToogle,
}) => {
  return (
    <li className="list-group-item">
      <p
        className={`${done ? "complete" : ""}`}
        onClick={() => handleToogle(id)}
      >
        {idx + 1}.- {description}
      </p>
      <button onClick={() => handleDelete(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};
TodoListItems.prototype = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToogle: PropTypes.func.isRequired,
};
