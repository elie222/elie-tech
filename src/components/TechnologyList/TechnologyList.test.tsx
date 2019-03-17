import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import TechnologyList from "./TechnologyList"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("TechnologyList component", () => {
  it("should render correctly", () => {
    const technologies: any[] = null // TODO assign real value

    const wrapper = render(
      <TechnologyList technologies={technologies} showLabel imageWidth={100} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
