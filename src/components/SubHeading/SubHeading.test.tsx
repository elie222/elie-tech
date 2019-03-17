import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import SubHeading from "./SubHeading"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("SubHeading component", () => {
  it("should render correctly", () => {
    const wrapper = render(<SubHeading>Heading</SubHeading>)
    expect(wrapper).toMatchSnapshot()
  })
})
