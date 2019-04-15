import * as React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header/Header"
import SubHeading from "../components/SubHeading/SubHeading"
import Section from "../components/Section/Section"
import Footer from "../components/Footer/Footer"
import GetInTouchButton from "../components/Button/GetInTouchButton"
import ArticleList from "../components/ArticleList/ArticleList"
import TechnologyList from "../components/TechnologyList/TechnologyList"
import VideoList from "../components/VideoList/VideoList"

const attachImages = (allJson: { edges: any[] }, images: any[]) => {
  return allJson.edges.map(({ node }: any) => {
    const image = images.find((img: any) => img.node.base === node.image)

    // use publicURL for svgs
    return {
      ...node,
      image:
        (image && image.node.childImageSharp && image.node.childImageSharp.fluid) ||
        image.node.publicURL,
    }
  })
}

export default ({ data }: any) => {
  const technologies = attachImages(data.allTechnologiesJson, data.technologyImages.edges)
  const projects = attachImages(data.allProjectsJson, data.projectImages.edges)
  const articles = attachImages(data.allArticlesJson, data.articleImages.edges)
  const videos = attachImages(data.allVideosJson, data.videoImages.edges)

  return (
    <div>
      <Header />
      <Section >
        <SubHeading>Previous Projects</SubHeading>
        <TechnologyList technologies={projects} showLabel={false} imageWidth={180} />
      </Section>
      <Section coloredBackground>
        <SubHeading>Favourite Technologies</SubHeading>
        <TechnologyList technologies={technologies} showLabel imageWidth={120} />
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
  fragment Images on FileConnection {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
        base
        publicURL
      }
    }
  }

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
    technologyImages: allFile(filter: { relativeDirectory: { eq: "technologies" } }) {
      ...Images
    }
    projectImages: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      ...Images
    }
    articleImages: allFile(filter: { relativeDirectory: { eq: "articles" } }) {
      ...Images
    }
    videoImages: allFile(filter: { relativeDirectory: { eq: "videos" } }) {
      ...Images
    }
  }
`
