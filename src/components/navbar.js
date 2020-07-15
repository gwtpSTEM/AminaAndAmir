import React from "react";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Container from 'react-bootstrap/Container'
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image"
import Col from 'react-bootstrap/Col'

class DarkMode extends React.Component {
    render() {
      return (
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                              className="checkbox"
              />{' '}
              <span className="toggle-switch"></span>
            </label>
          )}
        </ThemeToggler>
      )
    }
  }

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        title: file(relativePath: {eq: "title.png"}) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
  render={data => (
    <div style={{ marginBottom: `70px` }}>
    <div className="my-3">
      <Container>
      <div className="text-right"><DarkMode /></div>
      </Container>
    </div>
    <Container>
      <Col lg={8} className="mx-auto">
      <Img fluid={data.title.childImageSharp.fluid} />
      </Col>
    </Container>
    </div>
)}
/>
)
