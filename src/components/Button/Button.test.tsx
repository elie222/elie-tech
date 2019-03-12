import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import Button from "./Button";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("Button component", () => {
  it("should render correctly", () => {
    const wrapper = render(<Button text='Click me' />);
    expect(wrapper).toMatchSnapshot();
  });
});
