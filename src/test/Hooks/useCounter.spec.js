import { useCounter } from "../../Hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Test to useCounter hook", () => {
  const mokUseCounter = 12;

  it("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    //console.log("esto vale reuslt ", result.current);
    const { counter, increment, decrement, reset } = result.current;
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
    expect(counter).toBe(10);
  });

  it("should return counter in 12", () => {
    const { result } = renderHook(() => useCounter(mokUseCounter));
    const { counter } = result.current;
    expect(counter).toEqual(mokUseCounter);
  });

  it("should works increment function", () => {
    const { result } = renderHook(() => useCounter(mokUseCounter));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toEqual(13);
  });

  it("should works decrement function", () => {
    const { result } = renderHook(() => useCounter(mokUseCounter));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toEqual(11);
  });

  it("should works reset function", () => {
    const { result } = renderHook(() => useCounter(mokUseCounter));
    const { reset, decrement } = result.current;
    act(() => {
      decrement();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toEqual(mokUseCounter);
  });
});
