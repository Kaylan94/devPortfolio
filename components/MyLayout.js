import Head from 'next/head';
import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}


const Layout = (props) => (
   <div>
	<Head>
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-05MY4X0QXQ"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments)}
			gtag('js', new Date());

			gtag('config', 'G-05MY4X0QXQ');
		</script>
	    <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
	</Head>
  	<div style={layoutStyle}>
    	<Header />
    	{props.children}
		< style jsx> {`
		div {
			background: white;
		}
		`}</style>
  	</div>
  </div>
)

export default Layout
