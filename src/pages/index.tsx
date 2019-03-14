import * as React from "react"
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

const technologies = [
  { title: "JavaScript", image: "/images/react" },
  { title: "TypeScript", image: "/images/react" },
  { title: "React", image: "/images/react" },
  { title: "MongoDB", image: "/images/react" },
  { title: "Elixir", image: "/images/react" },
  { title: "Solidity", image: "/images/react" },
  { title: "Ansible", image: "/images/react" },
  { title: "Docker", image: "/images/react" },
]

const projects = [
  { title: "Mercedes-Benz", image: "/images/react" },
  { title: "Draft Fantasy", image: "/images/react" },
  { title: "CryptoFighters", image: "/images/react" },
]

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

export default () => (
  <div>
    <Header />
    <Section>
      <SubHeading>Favourite Technologies</SubHeading>
      {technologies.map(({ title, image }) => (
        <TechnologyItem key={title} title={title} image={image} />
      ))}
    </Section>
    <Section coloredBackground>
      <SubHeading>Previous Projects</SubHeading>
      {projects.map(({ title, image }) => (
        <TechnologyItem key={title} title={title} image={image} />
      ))}
    </Section>
    <Section>
      <SubHeading>Articles</SubHeading>
      <ArticleList articles={articles} />
      {/* {articles.map(({ title, image, description, date, tags, likes }) => (
      <ArticleItem
        title={title}
        image={image}
        description={description}
        date={date}
        tags={tags}
        likes={likes}
      />
    ))} */}
    </Section>
    <Section coloredBackground>
      <SubHeading>Videos</SubHeading>
      <Button>GET IN TOUCH</Button>
    </Section>
    <Footer>2019 © Steinbock Software Limited</Footer>
  </div>
)
