import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

function Panel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="read-button" onClick={handleShow}>
        Read Story
      </Button>

      <Modal show={show} onHide={handleClose} animation={true} className="story">
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Img fluid={props.image} className="card-img mb-3" />
          <p><strong>Age:</strong> {props.age} | <strong>Coutry:</strong> {props.country} {props.emoji}</p>
          <div className="mb-3" dangerouslySetInnerHTML={{
            __html: props.text,
            }} />
        </Modal.Body>
        <Modal.Footer>
          <Button className="read-button" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Video(props) {
  return (
      <Col md={6} className="mb-3 mb-0-lg">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={props.url} allowfullscreen title={props.title}></iframe>
          </div>
          <p aria-hidden="true" className="mt-2 smaller font-weight-bold">{props.title}</p>
      </Col>
  )
}

export default ({ data }) => (
<div>
  <Helmet>
    <title>The Awesome Adventures of Amina and Amir</title>
      
    <meta name="title" content="The Awesome Adventures of Amina and Amir" />
    <meta name="description" content="The goal of the State of American Democracy Project is to help deepen and broaden the present conversation about democracy and connect it to effective action to repair and strengthen democratic institutions." />
    
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.AminaAndAmir.com/" />
    <meta property="og:title" content="The Awesome Adventures of Amina and Amir" />
    <meta property="og:description" content="The goal of the State of American Democracy Project is to help deepen and broaden the present conversation about democracy and connect it to effective action to repair and strengthen democratic institutions." />
    <meta property="og:image" content="https://www.AminaAndAmir.com/og.png" />
    
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.AminaAndAmir.com/" />
    <meta property="twitter:title" content="The Awesome Adventures of Amina and Amir" />
    <meta property="twitter:description" content="The goal of the State of American Democracy Project is to help deepen and broaden the present conversation about democracy and connect it to effective action to repair and strengthen democratic institutions." />
    <meta property="twitter:image" content="https://www.AminaAndAmir.com/og.png" />
  </Helmet>
  <Layout>
    <Container className="my-5" >
    <Tab.Container id="left-tabs" defaultActiveKey="book">
      <Row>
        <Col md={3}>
          <Nav variant="pills" className="flex-column font-weight-bold">
            <Nav.Item className="mb-2">
              <Nav.Link eventKey="book"><span className="fas fa-book mr-2"></span>About the Book</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link eventKey="author"><span className="fas fa-pen-nib mr-2"></span>About the Author</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link eventKey="second"><span className="fas fa-hands-wash mr-2"></span>5 Healthy Habits</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link eventKey="third"><span className="fas fa-comment-smile mr-2"></span>Stories</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link eventKey="fourth"><span className="fas fa-pencil-paintbrush mr-2"></span>Activities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth"><span className="fas fa-globe mr-2"></span>Tools &amp; Resources</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9}>
          <Tab.Content>
            <Tab.Pane eventKey="book">
            <p className="mt-3 mt-md-0">If you find it difficult to talk to your child about COVID-19, then this book is for you. Join Amina, Amir, and their little sister Anissa on an awesome, STEM-based adventure that is jam-packed with laughter and loads of fun.</p>
            <p className="h3">Characters</p>
            <p>Maybe?</p>
            </Tab.Pane>
            <Tab.Pane eventKey="author">
            <p className="mt-3 mt-md-0">Jason Williams aka Professor STEM is the founder of Get with the Program, Inc., which is the number one, youth-STEM organization this side of the Milky Way. As a father of three African American and Japanese children, Jason grew frustrated with the lack of representation in children&rsquo;s STEM and STEM-related literature. However, being solution-focused, he formed a publishing company, BrainEngine, and wrote his first children&rsquo;s book. The Awesome Adventures of Amina and Amir, is a book series, based on his kids and their exploration through the STEM multiverse. Currently, Jason enjoys being near bodies of water, spur of the moment road trips, and looking at mansions. He&rsquo;s also learning how to code.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <p className="mt-3 mt-md-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna elit. Nullam justo sem, pretium et pulvinar ac, ullamcorper nec ipsum. Nullam libero ligula, mollis nec sodales eget, semper sed dolor. Nam luctus ipsum nulla, a tristique sem ullamcorper sit amet. In sed congue nulla, sodales fermentum est. Sed vel nulla finibus sapien convallis volutpat. Suspendisse eget ex libero. Maecenas sit amet libero ante.</p>
            <Row>
            {data.video.nodes.map(node => (
              <Video
                  url={node.data.url}
                  title={node.data.title}
              />
            ))}
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <p className="mt-3 mt-md-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna elit. Nullam justo sem, pretium et pulvinar ac, ullamcorper nec ipsum. Nullam libero ligula, mollis nec sodales eget, semper sed dolor. Nam luctus ipsum nulla, a tristique sem ullamcorper sit amet. In sed congue nulla, sodales fermentum est. Sed vel nulla finibus sapien convallis volutpat. Suspendisse eget ex libero. Maecenas sit amet libero ante.</p>
            <a href="https://go.gwtp.us/covid19" rel="noreferrer noopener" target="_blank"><Button variant="danger" className="mb-3">Submit Your Story</Button></a>
            <Row className="mt-3">
            {data.stories.nodes.map(node => (
              <Col md={6} lg={4} key={node.recordId}>
              <Card className="mb-4">
                <Img variant="top" fluid={node.data.photo.localFiles[0].childImageSharp.fluid} className="card-img" />
                <Card.Body>
                  <Card.Title className="text-dark">{node.data.name}</Card.Title>
                  <Card.Text className="text-dark">
                  <p>{node.data.age} | {node.data.countryname} {node.data.emoji}</p>
                  {/* <div className="mb-3" dangerouslySetInnerHTML={{
                    __html: node.data.message.childMarkdownRemark.excerpt,
                    }} /> */}
                  <Panel 
                    name={node.data.name}
                    image={node.data.photo.localFiles[0].childImageSharp.fluid}
                    age={node.data.age}
                    country={node.data.countryname}
                    emoji={node.data.emoji}
                    text={node.data.message.childMarkdownRemark.html}
                  />
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            ))}
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <ul className="mt-3 mt-md-0">
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
            <Row className="mt-3 mt-md-0">
            <Col>
            <h2>Tools</h2>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
            </Col>
            <Col>
            <h2>Resources</h2>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
            </Col>
            </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
  </Layout>
</div>
)

export const query = graphql`
{
    stories:allAirtable(filter: {data: {approved: {eq: true}}}, sort: {fields: data___date, order: DESC}) {
      nodes {
        recordId
        data {
          message {
            childMarkdownRemark {
              html
              excerpt(format: HTML, pruneLength: 80)
            }
          }
          date(formatString: "dddd, MMMM D, YYYY")
          name
          countryname
          age
          emoji
          modal
          photo {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 400, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    video:allAirtable(filter: {table: {eq: "Videos"}}, sort: {fields: data___order, order: ASC}) {
      nodes {
          data {
              title
              url
          }
      }
  }

}  
`;