import * as React from "react"
import styled from "@emotion/styled"
import ArticleItem, { ArticleItemProps } from "../ArticleItem/ArticleItem"

const Wrapper = styled.div`
  width: 100%;
`

interface ArticleListProps {
  articles: ArticleItemProps[]
}

export default (props: ArticleListProps) => {
  return (
    <Wrapper>
      {props.articles.map(({ title, image, description, date, tags, likes, link }) => (
        <ArticleItem
          key={title}
          title={title}
          image={image}
          description={description}
          date={date || new Date()}
          tags={tags}
          likes={likes}
          link={link}
        />
      ))}
    </Wrapper>
  )
}
