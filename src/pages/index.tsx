import * as React from "react"
import { withPrefix } from "gatsby"
import "typeface-open-sans"
import "typeface-titillium-web"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import SubHeading from "../components/SubHeading/SubHeading"
import TechnologyItem from "../components/TechnologyItem/TechnologyItem"
import ArticleList from "../components/ArticleList/ArticleList"
import "../css/reset.css"
import Section from "../components/Section/Section"
import Footer from "../components/Footer/Footer"
import technologies from "../../data/technologies.json"
import projects from "../../data/projects.json"
import articles from "../../data/articles.json"

const withImagePrefix = (items: any[]) => {
  return items.map((item) => ({
    ...item,
    image: withPrefix(item.image),
  }))
}

const contact = () => window.open("mailto:elie@dappworks.co", "_blank")

export default () => (
  <div>
    <Header />
    <Section>
      <SubHeading>Favourite Technologies</SubHeading>
      {withImagePrefix(technologies).map(({ title, image }: any) => (
        <TechnologyItem key={title} title={title} image={image} />
      ))}
    </Section>
    <Section coloredBackground>
      <SubHeading>Previous Projects</SubHeading>
      {withImagePrefix(projects).map(({ title, image }: any) => (
        <TechnologyItem key={title} title={title} image={image} />
      ))}
    </Section>
    <Section>
      <SubHeading>Articles</SubHeading>
      <ArticleList articles={withImagePrefix(articles)} />
    </Section>
    <Section coloredBackground>
      <SubHeading>Videos</SubHeading>
      <Button onClick={contact}>GET IN TOUCH</Button>
    </Section>
    <Footer>2019 © Steinbock Software Limited</Footer>
  </div>
)
