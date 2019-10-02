import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Introduction = () => (
  <Layout>
    <SEO title="Introduction" />
      <article>
          <h2>Getting Started</h2>
          <h4>What is snAppy?</h4>
        <p>snAppy is a VSCode Extension that automates code splitting by replacing your static imports with dynamic imports to optimize your bundling load times</p>
        <h4>Why snAppy?</h4>
        <p>snAppy is a one-stop shop that uses Webpack to bundle your application, automate optimization processes, and rebundles for your convenience. We incorporate Webview panel to visualize the difference.</p>
      </article>
  </Layout>
)

export default Introduction
