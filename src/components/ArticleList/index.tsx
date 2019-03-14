import * as React from "react"
import { graphql } from "gatsby"
import ArticleList from "./ArticleList"

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "article-images/meteor.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          src
          originalName
        }
      }
    }
  }
`

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

export default () => {
  return <ArticleList articles={articles} />
}
