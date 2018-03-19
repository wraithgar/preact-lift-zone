import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
	render() {
		return (
      <footer>
        <hr />
        <div class='pull-left'>
          <dl class='sub-nav'>
            <dd><Link activeClassName='active' href='/privacy'>Privacy</Link></dd>
            <dd><Link activeClassName='active' href="/about">About</Link></dd>
            <dd><Link activeClassName='active' href="/news">News</Link></dd>
            <dd><Link href='https://twitter.com/wraithgar'>Twitter</Link></dd>
          </dl>
        </div>
        <div class='pull-right'>
          <dl class='sub-nav'>
            <dd>© 2014-2018 Michael Garvin</dd>
          </dl>
        </div>
			</footer>
		);
	}
}

