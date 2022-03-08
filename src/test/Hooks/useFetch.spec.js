import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../Hooks/useFetch";

describe("Test for useFetch hook", () => {
  it("Should fecth default info", () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    const { state } = result.current;
    //console.log("esto vale state ", state);
    const { data, loading, error } = state;
    expect(data).toEqual(null);
    expect(loading).toBeTruthy();
    expect(error).toEqual(null);
  });

  it("Should wait till the fecth bring data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    await waitForNextUpdate();
    const { state } = result.current;
    //console.log("esto vale state ", state);
    expect(state.data.length).toBe(1);
    expect(state.loading).toBeFalsy();
    expect(state.error).toBe(null);
  });

  it("Compare data", async () => {
    const dataUser = {
      data: [
        {
          quote_id: 1,
          quote: "I am not in danger, Skyler. I am the danger!",
          author: "Walter White",
          series: "Breaking Bad",
        },
      ],
      loading: false,
      error: null,
    };
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    await waitForNextUpdate();
    const { state } = result.current;
    //console.log("esto vale state ", state);
    expect(state).toEqual(dataUser);
  });

  it("Should handle error", async () => {
    const error = "no fetch data";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/apid/users?page=2")
    );
    await waitForNextUpdate();
    const { state } = result.current;
    expect(state.data).toEqual(null);
    expect(state.loading).toBeFalsy();
    expect(state.error).toEqual(error);
  });
});
