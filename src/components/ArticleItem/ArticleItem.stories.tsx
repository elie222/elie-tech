import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, number } from "@storybook/addon-knobs"
import ArticleItem from "./ArticleItem"
import "../../css/reset.css"

storiesOf("ArticleItem", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const title = text("Title", "Learning Storybook")
    const date = text("Date", "Dec 19")
    const tags = ["JavaScript", "Meteor"]
    const image = text("Image", "/images/TODO")
    const likes = number("Likes", 1012)
    const link = text("Link", "#")

    return (
      <ArticleItem title={title} date={date} tags={tags} image={image} likes={likes} link={link} />
    )
  })
