import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import VideoList from "./VideoList"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("VideoList component", () => {
  it("should render correctly", () => {
    const videos: any[] = null // TODO assign real value

    const wrapper = render(<VideoList videos={videos} />)
    expect(wrapper).toMatchSnapshot()
  })
})
