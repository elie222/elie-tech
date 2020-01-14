import * as React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Header from "../components/Header/Header"
import SubHeading from "../components/SubHeading/SubHeading"
import Section from "../components/Section/Section"
import Footer from "../components/Footer/Footer"
import GetInTouchButton from "../components/Button/GetInTouchButton"
import TechnologyList from "../components/TechnologyList/TechnologyList"

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

  return (
    <div>
      <SEO />
      <Header />
      <Section coloredBackground>
        <SubHeading>Technologies I Use</SubHeading>
        <TechnologyList technologies={technologies} showLabel imageWidth={150} />
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
    technologyImages: allFile(filter: { relativeDirectory: { eq: "technologies" } }) {
      ...Images
    }
  }
`
