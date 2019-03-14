import * as React from "react"
import ArticleItem, { ArticleItemProps } from "../ArticleItem/ArticleItem"

interface ArticleListProps {
  articles: ArticleItemProps[]
}

export default (props: ArticleListProps) => {
  return (
    <div>
      {props.articles.map(({ title, image, description, date, tags, likes }) => (
        <ArticleItem
          key={title}
          title={title}
          image={image}
          description={description}
          date={date}
          tags={tags}
          likes={likes}
        />
      ))}
    </div>
  )
}
