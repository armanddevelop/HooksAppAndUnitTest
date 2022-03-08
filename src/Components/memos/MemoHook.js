import { useMemo, useState } from "react";
import { highProcess } from "../../helpers/highProcess";
import { useCounter } from "../../Hooks/useCounter";
import "../useState/counter.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memoHighProcess = useMemo(() => highProcess(counter), [counter]);
  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoHighProcess}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
