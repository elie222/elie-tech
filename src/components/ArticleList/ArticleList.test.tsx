import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import ArticleList from "./ArticleList"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("ArticleList component", () => {
  it("should render correctly", () => {
    const wrapper = render(<ArticleList />)
    expect(wrapper).toMatchSnapshot()
  })
})
