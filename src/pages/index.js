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
import Collapse from 'react-bootstrap/Collapse'

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
          <Img fluid={props.image} className="card-img mb-3" alt={props.alt} />
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

function MenuContent() {
  return (
  <Nav variant="pills" className="flex-column font-weight-bold">
  <Nav.Item className="mb-2">
    <Nav.Link eventKey="book"><span className="fas fa-book mr-2"></span>About the Book</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mb-2">
    <Nav.Link eventKey="author"><span className="fas fa-pen-nib mr-2"></span>About the Author</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mb-2">
    <Nav.Link eventKey="illustrator"><span className="fas fa-paint-brush mr-2"></span>About the Illustrator</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mb-2">
    <Nav.Link eventKey="habits"><span className="fas fa-hands-wash mr-2"></span>5 Healthy Habits</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mb-2">
    <Nav.Link eventKey="stories"><span className="fas fa-comment-smile mr-2"></span>Stories</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mb-2">
    <Nav.Link eventKey="activities"><span className="fas fa-pencil-paintbrush mr-2"></span>Activities</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="tools"><span className="fas fa-globe mr-2"></span>Tools &amp; Resources</Nav.Link>
  </Nav.Item>
  </Nav>
  )
}

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="hamburger-menu"
        aria-expanded={open}
        className="d-md-none mb-3 menu-button"
        size="lg"
        block
      >
        <span className="fas fa-hamburger mr-2"></span> Menu
      </Button>
      <Collapse in={open} className="d-md-none">
        <div id="hamburger-menu">
        <MenuContent />
        </div>
      </Collapse>
    </>
  );
}

export default ({ data }) => (
<div>
  <Helmet>
    <title>The Awesome Adventures of Amina and Amir</title>
      
    <meta name="title" content="The Awesome Adventures of Amina and Amir" />
    <meta name="description" content="Hard to talk to your child about the coronavirus? Then join Amina, Amir, and Anissa as they learn the 5 Healthy Habits to help limit the spread of COVID-19. You’ll find resources, activities and FUN for the entire family." />
    
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.AminaAndAmir.com/" />
    <meta property="og:title" content="The Awesome Adventures of Amina and Amir" />
    <meta property="og:description" content="Hard to talk to your child about the coronavirus? Then join Amina, Amir, and Anissa as they learn the 5 Healthy Habits to help limit the spread of COVID-19. You’ll find resources, activities and FUN for the entire family." />
    <meta property="og:image" content="https://www.AminaAndAmir.com/og.png" />
    
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.AminaAndAmir.com/" />
    <meta property="twitter:title" content="The Awesome Adventures of Amina and Amir" />
    <meta property="twitter:description" content="Hard to talk to your child about the coronavirus? Then join Amina, Amir, and Anissa as they learn the 5 Healthy Habits to help limit the spread of COVID-19. You’ll find resources, activities and FUN for the entire family." />
    <meta property="twitter:image" content="https://www.AminaAndAmir.com/og.png" />
  </Helmet>
  <Layout>
    <Container className="mt-0 mt-lg-5 mb-5" >
    <Tab.Container id="left-tabs" defaultActiveKey="book">
      <Row>
        <Col md={4}>
        {/* Display hamburger menu on small screens */}
        <Menu />
        {/* Hide hamburger menu and display vertical menu on larger screens */}
        <div className="d-none d-md-block">
          <MenuContent />
        </div>
        </Col>
        <Col md={8}>
          <Tab.Content>
            <Tab.Pane eventKey="book">
              <Row>
                <Col lg={7} className="mt-3 mt-lg-0 order-2 order-lg-1">
                <p>If you find it difficult to talk to your child about COVID-19, then this book is for you. Join Amina, Amir, and their little sister Anissa on an awesome, STEM-based adventure that is jam-packed with laughter and loads of fun.</p>
                <a href="https://www.amazon.com/dp/1735307009/" target="_blank" rel="noopener noreferrer"><Button variant="warning" size="lg"><span className="fab fa-amazon mr-2"></span>Purchase a Print Book</Button></a>
                <p className="mt-3">Consider making a tax-deductible donation to <a href="https://www.gwtp.us" target="_blank" rel="noopener noreferrer">Get with the Program, Inc.</a>, a 501(c)(3) charitable organization, <strong>to download a PDF version of the book</strong>.<br /><span className="small"><span className="fas fa-lightbulb-on mr-2"></span>Enter $0 to download without making a donation.</span></p>
                <a href="https://transactions.sendowl.com/products/78317108/535932F7/add_to_cart" target="_blank" rel="noopener noreferrer"><Button variant="danger"><span className="fas fa-box-heart mr-2"></span>Donate &amp; Download</Button></a>
                </Col>
                <Col lg={5} xs={8} className="mx-auto order-1 order-lg-2">
                <Img fluid={data.book.childImageSharp.fluid} alt="The Awesome Adventures of Amina and Amir: COVID-19 and the 5 Healthy Habits." />
                </Col>
              </Row>
              <Card text="light" bg="dark" className="mt-5">
              <Card.Header><strong>Update</strong></Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ul>
                      <li>New data suggests that, while COVID-19 mostly affects the respiratory system, it can also affect all organs of the body.</li>
                      <li>When washing your hands, using the proper technique is just as important as the amount of time washed.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane eventKey="author">
            <Row className="mt-3 mt-md-0">
              <Col xl={7} className="mt-3 mt-xl-0 order-2 order-xl-1">
                <p className="mt-3 mt-md-0"><strong>Jason Williams</strong> aka Professor STEM is the founder of Get with the Program, Inc., which is the number one, youth-STEM organization this side of the Milky Way. As a father of three African American and Japanese children, he grew frustrated with the lack of representation in children&rsquo;s STEM and STEM-related literature. However, being solution-focused, Jason wrote and published his first children&rsquo;s book. <em>The Awesome Adventures of Amina and Amir</em>, is a book series, based on his kids and their exploration through the STEM multiverse. Currently, he enjoys being near bodies of water, spur of the moment road trips, and looking at mansions (in preparation for his 😁). He&rsquo;s also learning how to code.</p>
              </Col>
              <Col xl={5} xs={8} lg={6} md={7} className="mx-auto order-1 order-xl-2">
                <Img fluid={data.author.childImageSharp.fluid} alt="An illustration of Jason Williams." />
              </Col>
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="illustrator">
            <Row className="mt-3 mt-md-0">
              <Col xl={7} className="mt-3 mt-xl-0 order-2 order-xl-1">
                <p className="mt-3 mt-md-0"><strong>Daniel Gregus</strong> is a digital illustrator who's been moonlighting as a bartender for the past twenty or so years. He is a self-taught artist with many professional commissions and private sales to date. This success has birthed Crownhill Concepts, a commission-based startup for which he wears all the hats. Daniel works primarily in a digital format with a strong focus on character art. A native of Amherst, Ohio, Daniel spent his youth drawing inspiration from Marvel Comics and Nintendo box art. Today he resides in his hometown, privileged to draw inspiration from the boundless imaginations of his three amazing daughters.</p>
                <p><span className="fas fa-envelope-open-text"></span> <a href="mailto:crownhillconcepts@gmail.com">Email</a> <span className="fab fa-instagram ml-3"></span> <a href="https://www.instagram.com/crownhill_concepts" target="_blank" rel="noopener noreferrer">Instagram</a></p>
              </Col>
              <Col xl={5} xs={8} lg={6} md={7} className="mx-auto order-1 order-xl-2">
                <Img fluid={data.illustrator.childImageSharp.fluid} alt="An illustration of Daniel Gregus." />
              </Col>
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="habits">
            <Col xs={6} className="mx-auto mb-4">
              <Img fluid={data.habits.childImageSharp.fluid} alt="5 healthy habits." />
            </Col>
            <p className="mt-3 mt-md-0">Do you remember all 5 Healthy Habits? Check out these videos to jog your memory and learn the proper way to practice the 5 Healthy Habits.</p>
            <Row>
            {data.video.nodes.map(node => (
              <Video
                  url={node.data.url}
                  title={node.data.title}
              />
            ))}
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="stories">
            <Row className="mt-3 mt-md-0">
              <Col xl={9} lg={8} className="mt-3 mt-xl-0 order-2 order-lg-1">
                <p className="mt-3 mt-md-0">We have collected kids&rsquo; pictures, and messages of hope and encouragement from around the world. By sharing how they are coping with the COVID-19 pandemic, we hope to provide comfort during this time of crisis. Click the button below to share your child&rsquo;s story to help comfort and inspire other children from across the globe.</p>
                <a href="https://go.gwtp.us/covid19" rel="noreferrer noopener" target="_blank"><Button variant="danger" className="mb-3">Share Youre Child&rsquo;s Story</Button></a>
              </Col>
              <Col xl={3} xs={4} lg={4} md={5} className="mx-auto order-1 order-lg-2">
                <Img fluid={data.anissa.childImageSharp.fluid} alt="Anissa reading a book." />
              </Col>
            </Row>
            <Row className="mt-3">
            {data.stories.nodes.map(node => (
              <Col xs={10} md={6} lg={4} key={node.recordId} className="mx-auto">
              <Card className="mb-4">
                <Img variant="top" fluid={node.data.photo.localFiles[0].childImageSharp.fluid} className="card-img" alt={node.data.name} />
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
                    alt={node.data.name}
                  />
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            ))}
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="activities">
            <h2 className="mt-3 mb-4 mt-md-0 h3">Coloring Pages</h2>
            <Row>
              {data.coloring.nodes.map(node => (
              <Col xs={4}>
              <a href={node.data.file.localFiles[0].publicURL} target="_blank" rel="noopener noreferrer"><Img fluid={node.data.image.localFiles[0].childImageSharp.fluid} alt={node.data.alt} key={node.recordId} className="mb-3" /></a>
              </Col>
              ))}
            </Row>
            <h2 className="h3 mt-4">Free Books</h2>
            <ul>
              <li><a href="https://transactions.sendowl.com/products/78317108/535932F7/add_to_cart" target="_blank" rel="noopener noreferrer"><em>The Awesome Adventures of Amina and Amir: COVID-19 and the 5 Healthy Habits</em></a><span className="fas fa-file-pdf mx-2"></span>(Please donate if/what you can)</li>
              <li><a href="https://nycdoe.libguides.com/COVID-19ebooks/free" target="_blank" rel="noopener noreferrer">Free COVID-19 Children&rsquo;s Books</a><span className="far fa-external-link-square ml-2"></span></li>
            </ul>
            <Row className="mt-0 mt-xl-5 mb-5">
              <Col xl={5} xs={6} lg={5} md={7} className="mx-xl-auto ml-auto order-2">
                <Img fluid={data.amina.childImageSharp.fluid} alt="Amina with a paintbrush and a palette." />
              </Col>
              <Col xl={7} className="mt-3 mt-xl-0 order-1">
                <h2 className="h3">Fun for the Whole Family</h2>
                <ul>
                  <li><a href="https://www.cnn.com/videos/health/2020/04/25/entire-cnn-sesame-street-coronavirus-town-hall-part-1-vpx.cnn" target="_blank" rel="noopener noreferrer">Sesame Street The ABC&rsquo;s of COVID-19</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://kidsforpeaceglobal.org/wp-content/uploads/2020/04/Ideas-Activities-for-Families-During-the-COVID-19-Pandemic.pdf" target="_blank" rel="noopener noreferrer">Kids for Peace Activities During COVID-19</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://www.who.int/news-room/campaigns/connecting-the-world-to-combat-coronavirus/healthyathome/healthyathome---physical-activity" target="_blank" rel="noopener noreferrer">World Health Organization: Healthy at Home Activities</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://www.youtube.com/watch?v=r51YroAFPds" target="_blank" rel="noopener noreferrer">No-Sew DIY Face Mask</a><span className="far fa-external-link-square ml-2"></span></li>
                </ul>
              </Col>
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="tools">
            <Row className="mt-3 mt-md-0">
              <Col xs={5} lg={4} md={6} className="mx-xl-auto ml-auto order-2 align-bottom">
                <Img fluid={data.amir.childImageSharp.fluid} alt="Amir with a hard hat." />
              </Col>
              <Col xl={8} className="mt-3 mt-xl-0 order-1">
                <h2 className="mt-3 mt-md-0 h3">Protecting Yourself from COVID-19</h2>
                <ul>
                  <li><a href="https://medical.mit.edu/four-ways-to-protect" target="_blank" rel="noopener noreferrer">MIT: 4 Ways To Protect Yourself From COVID-19</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank" rel="noopener noreferrer">CDC COVID Prevention</a><span className="far fa-external-link-square ml-2"></span></li>
                </ul>
                <h2 className="h3 mt-4">Talking to Kids About COVID-19</h2>
                <ul>
                  <li><a href="https://uichildrens.org/health-library/talking-children-and-teens-about-covid-19-coronavirus" target="_blank" rel="noopener noreferrer">University of Iowa</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://childmind.org/coping-during-covid-19-resources-for-parents/#coping" target="_blank" rel="noopener noreferrer">Child Mind Institute</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://www.unicef.org/coronavirus/how-talk-your-child-about-coronavirus-covid-19" target="_blank" rel="noopener noreferrer">UNICEF</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/kids-covid-19/art-20482508" target="_blank" rel="noopener noreferrer">Mayo Clinic</a><span className="far fa-external-link-square ml-2"></span></li>
                </ul>
                <h2 className="h3 mt-4">Mental Health &amp; Stress Management</h2>
                <ul>
                  <li><a href="https://childmind.org/coping-during-covid-19-resources-for-parents/#coping" target="_blank" rel="noopener noreferrer">Child Mind Institute Parent Resource</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://uichildrens.org/health-library/managing-stress-during-coronavirus-covid-19-outbreak" target="_blank" rel="noopener noreferrer">University of Iowa Managing Stress</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html" target="_blank" rel="noopener noreferrer">CDC Managing Stress &amp; Anxiety</a><span className="far fa-external-link-square ml-2"></span></li>
                </ul>
                <h2 className="h3 mt-4">Parent Resources/Family Toolkits</h2>
                <ul>
                  <li><a href="https://rednoseday.org/news/how-talk-your-children-about-coronavirus-15-free-resources-parents-and-kids" target="_blank" rel="noopener noreferrer">Red Nose Day Family Resources</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://uichildrens.org/covid" target="_blank" rel="noopener noreferrer">University of Iowa Family Toolkit</a><span className="far fa-external-link-square ml-2"></span></li>
                  <li><a href="https://childmind.org/coping-during-covid-19-resources-for-parents/" target="_blank" rel="noopener noreferrer">Child Mind Institute Parent Resources</a><span className="far fa-external-link-square ml-2"></span></li>
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

  book: file(relativePath: {eq: "book.png"}) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  author: file(relativePath: {eq: "author.png"}) {
    childImageSharp {
      fluid(maxWidth: 350) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  illustrator: file(relativePath: {eq: "illustrator.png"}) {
    childImageSharp {
      fluid(maxWidth: 350) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  habits: file(relativePath: {eq: "habits.png"}) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  anissa: file(relativePath: {eq: "stories.png"}) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  amina: file(relativePath: {eq: "activities.png"}) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  amir: file(relativePath: {eq: "tools.png"}) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  coloring: allAirtable(filter: {table: {eq: "Activities"}, data: {category: {eq: "coloring"}}}, sort: {fields: data___name, order: ASC}) {
    nodes {
      data {
        alt
        file {
          localFiles {
            publicURL
          }
        }
        image {
          localFiles {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      recordId
    }
  }

}  
`;