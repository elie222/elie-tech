import * as React from "react"
import styled from "@emotion/styled"
import ArticleItem, { ArticleItemProps } from "../ArticleItem/ArticleItem"

const Wrapper = styled.div`
  width: 100%;
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
  justify-items: center;
  grid-row-gap: 25px;
  grid-column-gap: 25px;
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
