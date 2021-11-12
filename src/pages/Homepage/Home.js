import React from 'react';
import Navbar from '../../components/Home/Navbar/Navbar';
import { Container,Row,Col } from 'react-bootstrap';

const Home = () => {
return (
    <div>
        <Navbar />
	<div
	style={{
		display: 'flex',
		justifyContent: 'Center',
		alignItems: 'normal',
		height: '100vh'
	}}
	>
	<Container>
  <Row>
    <Col xs={{ order: 'last' }}>First, but last</Col>
    <Col xs>Second, but unordered</Col>
    <Col xs={{ order: 'first' }}>Third, but first</Col>
  </Row>
</Container>
	</div>
    </div>
);
};

export default Home;