import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default () => (
<div className="bg-yellow py-5">
    <Container>
        <Row>
            <Col lg={6} className="ml-auto order-lg-2">
                <h2 className="mb-4" id="sscontact">Contact Us</h2>
                <form name="contact" netlify-honeypot="bot-field" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group d-none">
                    <label>Don’t fill this out if you're human:<input name="bot-field" /></label>
                    </div>
                    <div className="form-group">
                        <div id="nameId" className="sr-only">Your Name</div>
                        <input type="text" className="form-control" name="Name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <div id="emailId" className="sr-only">Your Email</div>
                        <input type="email" className="form-control" name="Email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <div id="messageId" className="sr-only">Message</div>
                        <textarea type="text" className="form-control" name="Message" rows="5" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger">Send</button>
                </form>
            </Col>
            <Col lg={5} className="order-lg-1">
                <div className="flex-column font-weight-bold">
                    <p className="mt-3">2020 &copy; Jason Williams</p>
                    <p className="pt-3 border-top border-dark mb-0">Illustrations by Daniel Gregus</p>
                    <p>Website designed and developed by Arisa Williams</p>
                </div>
            </Col>
        </Row>
    </Container>
</div>
)