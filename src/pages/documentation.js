import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Documentation = () => (
  <Layout>
    <SEO title="Page two" />
      <article>
        <h3>Documentation</h3>
        <h4>How to Install</h4>
        <p>Visit the VSCode Marketplace</p>
        <button>VSC Marketplace</button>
        <h4>Using the Extension</h4>
        <h4>insert giphy of demo here</h4>
        <ul>
          <p>Open your current project in VSCode and pull down the Command Palette. Turn on auto-save.</p>
          insert still photo of process
          <p>In Entry Point, give your relative path from the root folder. Select your modules</p>
          insert still photo of process
          <p>Bundle! You will see your initial bundled stats.</p>
          <p>Optimize! This process includes the auto-bundpng. </p>
          <p>Your files will now contain optimizations/changes. You may undo/delete the changes you do not wish to keep.</p>
          insert still photo of process
          <il>Export! Export your new Webpack config file and your stats reports.</il>
          insert still photo of process
        </ul>
      </article>
  </Layout>
)

export default Documentation
