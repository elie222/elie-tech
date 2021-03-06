import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ArticleList from "./ArticleList"
// webpack problems
// import articles from "../../../data/articles.json"

const articles = [
  {
    title: "Scaling Meteor",
    image: "article-images/meteor.png",
    description: "Some nice description about the article.",
    date: "Dec 19",
    tags: ["javascript"],
    likes: 86,
    link: "#",
  },
  {
    title: "TS tricks",
    image: "/images/react",
    description: "Some nice description about the article.",
    date: "Dec 19",
    tags: ["javascript"],
    likes: 86,
    link: "#",
  },
  {
    title: "CryptoFighters",
    image: "/images/react",
    description: "Some nice description about the article.",
    date: "Dec 19",
    tags: ["javascript"],
    likes: 86,
    link: "#",
  },
]

storiesOf("ArticleList", module).add("default", () => <ArticleList articles={articles} />)
