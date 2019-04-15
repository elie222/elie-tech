import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = (props: any) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, description, twitter, image: imagePath },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          name
          twitter
          image
        }
      }
    }
  `)

  const image = `${siteUrl}${imagePath}`

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <html lang="en" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="canonical" href={siteUrl} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* <meta property="fb:app_id" content={fbAppID} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
