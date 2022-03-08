import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./layout.css";

export const RealUseLayOutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { state } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const [boxWidth, setBoxWidth] = useState(0);
  const { quote } = !!state.data && state.data[0];
  const pTag = useRef();
  useLayoutEffect(() => {
    console.log("se ejecuto useLayOutEffect");
    const { width } = pTag.current.getBoundingClientRect();
    setBoxWidth(width);
  }, [quote]);
  return (
    <>
      <h1>LayoutEffects</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p className="mb-5" ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <pre>{boxWidth}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </>
  );
};
