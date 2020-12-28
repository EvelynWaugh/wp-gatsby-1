import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Post = ({ pageContext }) => {
  const post = pageContext.post

  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <p>Here</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </Layout>
  )
}

export default Post
