import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ArticleItem from "./ArticleItem"
import "../../css/reset.css"

storiesOf("ArticleItem", module).add("default", () => {
  const title: string = "Scaling Meteor"
  const date: string = "Dec 19"
  const tags: string[] = ["JavaScript", "Meteor"]
  const image: string = "/images/TODO"
  const likes = 186
  const link = "#"

  return (
    <ArticleItem title={title} date={date} tags={tags} image={image} likes={likes} link={link} />
  )
})
