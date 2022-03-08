import { useEffect, useRef, useState } from "react";
const initialState = {
  data: null,
  loading: true,
  error: null,
};
export const useFetch = (url) => {
  const [state, setState] = useState(initialState);
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    setState(initialState);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setTimeout(() => {
          if (isMounted.current) {
            setState({
              data,
              loading: false,
              error: null,
            });
          } else {
            console.log("no se llamo al setState");
          }
        });
      })
      .catch(() =>
        setState({ data: null, loading: false, error: "no fetch data" })
      );
  }, [url]);
  return {
    state,
  };
};
