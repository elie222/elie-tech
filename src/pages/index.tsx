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

const attachImages = (allJson: { edges: any[] }, images: any[]) => {
  return allJson.edges.map(({ node }: any) => {
    const image = images.find(
      (img: any) => img.node.childImageSharp.fluid.originalName === node.image,
    )

    return { ...node, image: image && image.node.childImageSharp.fluid }
  })
}

export default ({ data }: any) => {
  const articles = attachImages(data.allArticlesJson, data.articleImages.edges)
  const videos = attachImages(data.allVideosJson, data.videoImages.edges)

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
        <ArticleList articles={articles} />
      </Section>
      <Section coloredBackground>
        <SubHeading>Videos</SubHeading>
        <VideoList videos={videos} />
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
    articleImages: allFile(filter: { relativeDirectory: { eq: "articles" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalName
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    videoImages: allFile(filter: { relativeDirectory: { eq: "videos" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              originalName
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
