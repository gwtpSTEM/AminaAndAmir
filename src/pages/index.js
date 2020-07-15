import React from 'react';
import Container from 'react-bootstrap/Container'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
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
    <Container className="my-5 text-center" >
      <h1 className="display-3">Coming soon...</h1>
    </Container>
  </Layout>
</div>
)