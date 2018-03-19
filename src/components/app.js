import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Auth from './auth';
import Header from './header';
import Footer from './footer';
import About from '../routes/about';
import Login from '../routes/login';
import Home from '../routes/home';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
      <div id='app' class='container'>
        <Auth />
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path='/' />
          <About path='/about' />
          <Login path='/login' />
				</Router>
        <Footer />
			</div>
		);
	}
}
