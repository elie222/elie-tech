/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default
const ArticleItemReadme = require("./README.md")

import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ArticleItem from "./ArticleItem"
import "../../css/reset.css"

storiesOf("ArticleItem", module)
  .addDecorator(withReadme(ArticleItemReadme))
  .add("default", () => {
    const title: string = "Scaling Meteor"
    const description: string =
      "I recently went through the challenge and ordeal of having to scale my Meteor app. " +
      "It’s a project that had already been running in production for about a year. " +
      "This summer the app became a lot more popular with thousands of"
    const date: Date = new Date()
    const tags: string[] = ["JavaScript", "Meteor"]
    const image: string = "/images/TODO"

    return (
      <ArticleItem title={title} description={description} date={date} tags={tags} image={image} />
    )
  })
