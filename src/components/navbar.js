import React from "react";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Container from 'react-bootstrap/Container'
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
              {/* <span className="toggle-switch"></span> */}
              <span className="alt-toggle"></span>
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
    <div>
    <div className="my-3">
      <Container>
      <Row className="justify-content-between justify-content-lg-end">
      <Col xs={4} className="d-lg-none">
      <Img fluid={data.title.childImageSharp.fluid} />
      </Col>
      <Col xs={5} className="text-right">
      <DarkMode />
      </Col>
      </Row>
      </Container>
    </div>
    <Container className="d-none d-lg-block">
      <Col lg={8} className="mx-auto">
      <Img fluid={data.title.childImageSharp.fluid} />
      </Col>
    </Container>
    </div>
)}
/>
)
