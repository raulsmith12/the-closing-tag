import React, { Component } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = ({ children }) => {
	return (
		<>
			<TopNav />
			<Row>
				<Col>
					{children}
				</Col>
			</Row>
			<Footer />
		</>
	)
}

export default Page;