import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      insert snappy logo here
    </div>
    <p>A VSCode Extension for Front End Optimization</p>
    <button>Get Snapping!</button> 
  </Layout>
)

export default IndexPage
