import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ArticleList from "./ArticleList"

const now = new Date()

const articles = [
  {
    title: "Scaling Meteor",
    image: "article-images/meteor.png",
    description: "Some nice description about the article.",
    date: now,
    tags: ["javascript"],
    likes: 86,
  },
  {
    title: "TS tricks",
    image: "/images/react",
    description: "Some nice description about the article.",
    date: now,
    tags: ["javascript"],
    likes: 86,
  },
  {
    title: "CryptoFighters",
    image: "/images/react",
    description: "Some nice description about the article.",
    date: now,
    tags: ["javascript"],
    likes: 86,
  },
]

storiesOf("ArticleList", module).add("default", () => <ArticleList articles={articles} />)
