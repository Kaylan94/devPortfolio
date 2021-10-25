//Import the Link API to support client-side navigation
import Link from 'next/link';
import Layout from '../components/MyLayout';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';

const linkStyle = {
	marginRight: 15
  }
/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => (
	<Layout>
	    <h1>Developer Portfolio</h1>
		<h3>Kaylan Palmer</h3>
	    <Image src="/static/kaylan - 150w.jpg" thumbnail />
		<br></br>
		<hr></hr>
		<br></br>
		<h2>Personal Information</h2>
		<Table striped bordered hover variant="dark">
			<tr>
				<td>Full Name</td>
				<td>Kaylan Patrick Palmer</td>
			</tr>
			<tr>
				<td>Age</td>
				<td>27</td>
			</tr>
			<tr>
				<td>Nationality</td>
				<td>South African</td>
			</tr>
			<tr>
				<td>Gender</td>
				<td>Male</td>
			</tr>
			<tr>
				<td>Adrress</td>
				<td>Johannesburg, South Africa</td>
			</tr>
		</Table>
		<hr></hr>
		<ListGroup horizontal>
			<ListGroup.Item>
					<a target = "_blank" href = "https://www.facebook.com/kaylan.palmer">FaceBook</a>
			</ListGroup.Item>   
			<ListGroup.Item >
					<a target = "_blank" href = "https://linkedin.com/in/kaylan-palmer-76905a137">LinkedIn</a>
			</ListGroup.Item>
			<ListGroup.Item>
				<a target = "_blank" href = "https://github.com/Kaylan94">Github</a>
			</ListGroup.Item>
		</ListGroup>
  	</Layout>
)