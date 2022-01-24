import * as React from "react"
import About from "../components/About"
import Landing from "../components/Landing"
import Roadmap from "../components/Roadmap"
import Tokenomics from "../components/Tokenomics"
import PoweredBy from "../components/PoweredBy"

import Layout from "../components/layout"


const IndexPage = (props) => (
  <Layout displayCard pathname={props.location.pathname} title="Zebra Finanace Homepage" description="Zebra Finance is the world's first 'zp' decentralised finance application.">
    <Landing
      text={
        <h2>
        Enter The Safari!
        </h2>
      }
    />
    <About/>
    <Tokenomics/>
    <Roadmap />
    <PoweredBy />
  </Layout>
)

export default IndexPage
