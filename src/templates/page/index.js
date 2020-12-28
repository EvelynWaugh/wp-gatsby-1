import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Page = ({ pageContext }) => {
  const page = pageContext.page
  return (
    <Layout>
      <SEO title={page.title} />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
    </Layout>
  )
}

export default Page
