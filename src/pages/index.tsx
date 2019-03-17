import * as React from "react"
import { withPrefix, graphql } from "gatsby"
import Header from "../components/Header/Header"
import SubHeading from "../components/SubHeading/SubHeading"
import Section from "../components/Section/Section"
import Footer from "../components/Footer/Footer"
import GetInTouchButton from "../components/Button/GetInTouchButton"
import ArticleList from "../components/ArticleList/ArticleList"
import TechnologyList from "../components/TechnologyList/TechnologyList"
import VideoList from "../components/VideoList/VideoList"

const withImagePrefix = (items: any[]) => {
  return items.map((item) => ({
    ...item,
    image: withPrefix(item.image),
  }))
}

export default ({ data }: any) => {
  // console.log(data)
  return (
    <div>
      <Header />
      <Section>
        <SubHeading>Favourite Technologies</SubHeading>
        <TechnologyList
          technologies={withImagePrefix(
            data.allTechnologiesJson.edges.map(({ node }: any) => node),
          )}
          showLabel
          imageWidth={120}
        />
      </Section>
      <Section coloredBackground>
        <SubHeading>Previous Projects</SubHeading>
        <TechnologyList
          technologies={withImagePrefix(data.allProjectsJson.edges.map(({ node }: any) => node))}
          showLabel={false}
          imageWidth={180}
        />
      </Section>
      <Section>
        <SubHeading>Articles</SubHeading>
        <ArticleList
          articles={withImagePrefix(data.allArticlesJson.edges.map(({ node }: any) => node))}
        />
      </Section>
      <Section coloredBackground>
        <SubHeading>Videos</SubHeading>
        <VideoList
          videos={withImagePrefix(data.allVideosJson.edges.map(({ node }: any) => node))}
        />
        <GetInTouchButton />
      </Section>
      <Footer>2019 © Steinbock Software Limited</Footer>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allTechnologiesJson {
      edges {
        node {
          id
          title
          image
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          id
          image
          title
          description
          link
        }
      }
    }
    allArticlesJson {
      edges {
        node {
          id
          title
          image
          tags
          likes
          link
          date
        }
      }
    }
    allVideosJson {
      edges {
        node {
          id
          title
          image
          link
        }
      }
    }
  }
`
