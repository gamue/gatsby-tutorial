import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="This is my home page" />
      <h1>About Page</h1>
      <p>Lorem Ipsum</p>
    </Layout>
  )
}

export default About