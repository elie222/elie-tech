import { render, configure } from "enzyme"
import "jest"
import * as React from "react"
import ArticleItem from "./ArticleItem"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16")
configure({ adapter: new Adapter() })

describe("ArticleItem component", () => {
  it("should render correctly", () => {
    const title: string = "Some Title" // TODO assign real value
    const description: string = "Some desc" // TODO assign real value
    const date: Date = new Date() // TODO assign real value
    const tags: string[] = [] // TODO assign real value
    const likes: number = 86
    const image: string = "/images/TODO"

    const wrapper = render(
      <ArticleItem
        title={title}
        description={description}
        date={date}
        tags={tags}
        likes={likes}
        image={image}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
