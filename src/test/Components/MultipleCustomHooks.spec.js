import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { MultipleCustomHooks } from "../../Components/examples/MultipleCustomHooks";
import { useFetch } from "../../Hooks/useFetch";
jest.mock("../../Hooks/useFetch");
describe("Test to MultipleCustomHooks", () => {
  it("SnapShot MultipleCustomHooks", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("Should show information", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "licha",
          quote: "hola licha",
          quote_id: 1,
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    //console.log("Esto vael wrapper ", wrapper.html());
    expect(wrapper.find(".alert").exists()).toBeFalsy();
    expect(wrapper.find(".mb-5").text().trim()).toBe("hola licha");
    expect(wrapper.find("footer").text().trim()).toBe("licha");
    expect(wrapper.find("button").exists()).toBeTruthy();
  });
});
