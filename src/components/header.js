import { h, Component } from 'preact';
import { connect } from 'unistore/preact'

import { Link } from 'preact-router/match';

export const User = connect('user')(
  ({ user }) => {
    if (user) {
      return <li><Link href='/me'>{ user.name }</Link></li>;
    }
    return null;
  }
);

export const Login = connect('user')(
  ({ user })=> {
    if (!user) {
      return <li><a class='button' href='/login'>Log In</a></li>
    }
    return null;
  }
);

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav class='top-nav top-nav-dark cf' role='navigation'>
          <input id='menu-toggle' class='menu-toggle' type='checkbox' />
          <label for='menu-toggle'>Menu</label>

          <ul class='pull-left list-unstyled list-inline cf'>
            <li><Link activeClassName='active' href='/'>lift.zone</Link></li>
          </ul>
          <ul class='pull-right list-unstyled list-inline cf'>
            <li class='has-dropdown'>
              <Link activeClassName='active' href='/workouts'>Workouts</Link>
              <div class='icon-arrow-down' />
              <ul class='list-unstyled dropdown cf'>
                <li><Link activeClassName='active' href='/workouts/new'>New</Link></li>
              </ul>
            </li>
            <li><Link activeClassName='active' href='/activities'>Activities</Link></li>
            <li><Link activeClassName='active' href='/tools'>Tools</Link></li>
            <User />
            <Login />
          </ul>
        </nav>
      </header>
    );
  }
}
