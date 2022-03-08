import { useRef } from "react";
import "../useEffect/effects.css";
export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log("esto vale ref ", inputRef);
  };
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input className="form-control" placeholder="name" ref={inputRef}></input>
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
