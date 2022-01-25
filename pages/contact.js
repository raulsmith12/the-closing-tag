import React, { useState } from 'react';
import axios from 'axios';
import {
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import swal from 'sweetalert';

const API_PATH = 'https://www.theclosingtag.com/api/contact/index.php';

const Contact = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [contactTime, setContactTime] = useState('');
    const [contactMethod, setContactMethod] = useState('');
    const [message, setMessage] = useState('');
    const [mailSent, setMailSent] = useState(false);

    const handleContactTime = (e) => setContactTime(e.target.value);
    const handleContactMethod = (e) => setContactMethod(e.target.value);
    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { customerName, customerEmail, customerPhone, contactTime, contactMethod, message }
        })
        .then(result => 
            setMailSent(result.data.sent),
            swal("Success!", "We have received your message and will respond in the next couple days.", "success")
        )
        .catch(error => swal("Uh oh!", "Something went wrong", "error"));
    };

    return (
        <Form className="form" onSubmit={e => handleFormSubmit(e)}>
            <Row>
                <Col>
                    <h6 className="text-center display-5"><a href="mailto:contact@theclosingtag.com">contact@theclosingtag.com</a></h6>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Form.Group>
                        <Form.Label for="customerName" className="h4">Name</Form.Label>
                        <Form.Control type="text" name="customerName" id="customerName" bsSize="lg" placeholder="Please Enter a Name" required value={customerName} onChange={e => setCustomerName(e.target.value)} />
                        <Form.Control.Feedback>Name is required to submit form</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group>
                        <Form.Label for="customerEmail" className="h4">Email</Form.Label>
                        <Form.Control type="email" name="customerEmail" id="customerEmail" bsSize="lg" placeholder="Please Enter an Email" required value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                        <Form.Control.Feedback>Please enter a valid email address to submit form</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Form.Group>
                        <Form.Label for="customerPhone" className="h4">Phone</Form.Label>
                        <Form.Control type="phone" name="customerPhone" id="customerPhone" bsSize="lg" placeholder="Please Enter a Phone Number" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} />
                    </Form.Group>
                    <h4>Preferred Time to Contact You?</h4>
                    <Form.Group>
                        <Form.Label>
                            <Form.Check type="radio" name="timeRadio" value="day" checked={contactTime==='day'} onChange={handleContactTime} label="Day" />{' '}
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <Form.Check type="radio" name="timeRadio" value="afternoon" checked={contactTime==='afternoon'} onChange={handleContactTime} label="Afternoon" />{' '}
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <Form.Check type="radio" name="timeRadio" value="evening" checked={contactTime==='evening'} onChange={handleContactTime} label="Evening" />{' '}
                        </Form.Label>
                    </Form.Group>
                    <h4>Which Way Do You Prefer We Contact You?</h4>
                    <Form.Group>
                        <Form.Label>
                            <Form.Check type="radio" name="contactRadio" value="email" checked={contactMethod==='email'} onChange={handleContactMethod} label="Email" />{' '}
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <Form.Check type="radio" name="contactRadio" value="phone" checked={contactMethod==='phone'} onChange={handleContactMethod} label="Phone" />{' '}
                        </Form.Label>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group>
                        <Form.Label for="messageArea" className="h4">Message</Form.Label>
                        <Form.Control type="textarea" name="messageArea" id="messageArea" bsSize="lg" style={{height: '200px'}} placeholder="Please Leave a Message, a Comment, a Compliment, or a Suggestion" value={message} onChange={e => setMessage(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary">Submit</Button>{' '}
                </Col>
            </Row>
            <div>
                {mailSent}
            </div>
        </Form>
    )
}

export default Contact;