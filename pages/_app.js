import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import Page from '../components/Page';
import { Container } from 'react-bootstrap';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};
  
Router.onRouteChangeError = () => {
	NProgress.done();
};

const MyApp = ({ Component, pageProps }) => {
	return (
		<Container fluid className="mb-5 pb-5 px-0">
			<Meta />
			<TopNav />
			<Component {...pageProps} />
			<Footer />
		</Container>
	)
}

export default MyApp;
