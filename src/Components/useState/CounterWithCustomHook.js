import { useCounter } from "../../Hooks/useCounter";
import "./counter.css";
export const CounterWithCustomHook = () => {
  const { counter, decrement, increment, reset } = useCounter(100);
  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => decrement(2)} className="btn btn-secondary">
        -1
      </button>
      <button onClick={() => reset()} className="btn btn-terciary">
        Reset
      </button>
    </>
  );
};
