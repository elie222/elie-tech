import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import Card from "./Card"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("Card component", () => {
  it("should render correctly", () => {
    const wrapper = render(<Card />)
    expect(wrapper).toMatchSnapshot()
  })
})
