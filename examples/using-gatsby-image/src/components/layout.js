import React from "react"
import Img from "gatsby-image"
import styled from "react-emotion"

import Navigation from "./navigation"
import { rhythm } from "../utils/typography"
import logo from "../images/monogram.svg"
import presets from "../utils/presets"

const { gutter } = presets

const Container = styled(`div`)({
  position: `relative`,
  left: `0%`,
  padding: gutter.default,
  marginTop: `calc(67vh - ${gutter.default}px)`,
  background: `#fff`,
  [presets.Tablet]: {
    maxWidth: 600,
    marginLeft: `${presets.offset}%`,
    background: `#fff`,
    position: `relative`,
    marginTop: 0,
    padding: gutter.tablet,
  },
  [presets.Desktop]: {
    padding: presets.gutter.desktop,
  },
})

const Image = styled(Img)({
  top: 20,
  left: 20,
  right: 20,
  bottom: `33vh`,
  [presets.Tablet]: {
    bottom: 0,
    left: 0,
    top: 0,
    right: `55vw`,
  },
})

const Main = styled(`main`)({
  background: `#fff`,
  position: `relative`,
  zIndex: presets.zIndex.overlay,
  paddingTop: gutter.default,
})

const LogoLink = styled(`a`)({
  position: `fixed`,
  top: gutter.tablet,
  right: gutter.tablet,
  "&&": {
    background: `transparent`,
  },
  [presets.Tablet]: {
    top: `auto`,
    bottom: gutter.tablet,
    left: gutter.tablet,
    zIndex: presets.zIndex.overlay + 1,
  },
})

const Logo = styled(`img`)({
  display: `inline-block`,
  height: rhythm(0.875),
  width: rhythm(0.875),
  margin: 0,
  verticalAlign: `middle`,
})

const MainLayout = ({ children, image, imageBackgroundColor }) => (
  <Container>
    {image && (
      <Image
        fluid={image}
        style={{ position: `fixed` }}
        backgroundColor={imageBackgroundColor ? imageBackgroundColor : false}
      />
    )}
    <Navigation />
    <Main>
      {children}
      <h2>Documentation</h2>
      <ul>
        <li>
          See the
          {` `}
          <a href="https://www.gatsbyjs.org/packages/gatsby-image/">
            project README for documentation
          </a>
          {` `}
          on using the plugin.
        </li>
        <li>
          Read the docs on
          {` `}
          <a href="https://www.gatsbyjs.org/docs/using-gatsby-image/">
            using gatsby-image to prevent image bloat
          </a>
        </li>
      </ul>
    </Main>
    <LogoLink href="https://www.gatsbyjs.org/">
      <Logo src={logo} alt="Gatsby" />
    </LogoLink>
  </Container>
)

export default MainLayout
