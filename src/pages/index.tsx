import * as React from "react"
import { withPrefix } from "gatsby"
import Header from "../components/Header/Header"
import SubHeading from "../components/SubHeading/SubHeading"
import Section from "../components/Section/Section"
import Footer from "../components/Footer/Footer"
import GetInTouchButton from "../components/Button/GetInTouchButton"
import ArticleList from "../components/ArticleList/ArticleList"
import TechnologyList from "../components/TechnologyList/TechnologyList"
import VideoList from "../components/VideoList/VideoList"
import technologies from "../../data/technologies.json"
import projects from "../../data/projects.json"
import articles from "../../data/articles.json"
import videos from "../../data/videos.json"

const withImagePrefix = (items: any[]) => {
  return items.map((item) => ({
    ...item,
    image: withPrefix(item.image),
  }))
}

export default () => (
  <div>
    <Header />
    <Section>
      <SubHeading>Favourite Technologies</SubHeading>
      <TechnologyList technologies={withImagePrefix(technologies)} showLabel imageWidth={120} />
    </Section>
    <Section coloredBackground>
      <SubHeading>Previous Projects</SubHeading>
      <TechnologyList technologies={withImagePrefix(projects)} showLabel={false} imageWidth={180} />
    </Section>
    <Section>
      <SubHeading>Articles</SubHeading>
      <ArticleList articles={withImagePrefix(articles)} />
    </Section>
    <Section coloredBackground>
      <SubHeading>Videos</SubHeading>
      <VideoList videos={withImagePrefix(videos)} />
      <GetInTouchButton />
    </Section>
    <Footer>2019 © Steinbock Software Limited</Footer>
  </div>
)
