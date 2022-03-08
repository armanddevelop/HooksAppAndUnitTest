import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../Hooks/useForm";
describe("Test for useForm custom hook", () => {
  const initialForm = {
    name: "licha",
    email: "licha@test.com",
  };

  it("should return a form default", () => {
    const { result } = renderHook(() => useForm(initialForm));
    //console.log("esto vale current ", result.current);
    const { formState, handleInputChange, resetField } = result.current;
    const { name, email } = formState;
    expect(name).toEqual(initialForm.name);
    expect(email).toEqual(initialForm.email);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof resetField).toBe("function");
  });

  it("should change the form value name", async () => {
    const e = {
      target: {
        name: "name",
        value: "alissaheuche",
      },
    };
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;
    act(() => {
      handleInputChange(e);
    });
    const { formState } = result.current;
    expect(formState).toEqual({ ...initialForm, name: e.target.value });
  });

  it("should change the form value email", () => {
    const e = {
      target: {
        name: "email",
        value: "alissaheuche@test.com",
      },
    };
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;
    act(() => {
      handleInputChange(e);
    });
    const { formState } = result.current;
    expect(formState).toEqual({ ...initialForm, email: e.target.value });
  });

  it("reset the form with the reset function", () => {
    const e = {
      target: {
        name: "name",
        value: "alissaheuche",
      },
    };
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange, resetField, formState } = result.current;
    act(() => {
      handleInputChange(e);
      resetField();
    });
    expect(formState).toEqual(initialForm);
  });
});
