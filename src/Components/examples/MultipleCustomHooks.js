import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../useState/counter.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  //const { loading, data } = state;
  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />
      {loading && (
        <div className="alert alert-info text-center">Loading..........</div>
      )}
      {!loading &&
        data.map(({ author, quote, quote_id }) => {
          return (
            <blockquote className="blockquote text-right" key={quote_id}>
              <p className="mb-5">{quote}</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
          );
        })}
      {!loading && (
        <button className="btn btn-primary" onClick={increment}>
          Next quote
        </button>
      )}
    </>
  );
};
