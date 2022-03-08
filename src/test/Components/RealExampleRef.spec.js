import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { RealExampleRef } from "../../Components/useRef/RealExampleRef";
import { MultipleCustomHooks } from "../../Components/examples/MultipleCustomHooks";

describe("Test for RealExampleRef", () => {
  const container = shallow(<RealExampleRef />);
  it("Snapshot to RealExmapleRef", () => {
    expect(toJson(container)).toMatchSnapshot();
    expect(container.find("MultipleCustomHooks").exists()).toBeFalsy();
  });
  it("Should show the MultipleCustomHooks component", () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    container.find("button").simulate("click", () => {
      setStateMock();
    });
    expect(<MultipleCustomHooks />).toBeTruthy();
  });
});
