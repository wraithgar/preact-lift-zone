import { Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'unistore/preact'
import linkState from 'linkstate'

const actions = store => ({
  async login(state, { email, password }) {
    const body = JSON.stringify({ email, password });
    const login_response = await fetch('http://localhost:3001/user/login', {
      body,
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    });
    if (login_response.ok) {
      const response_json = await login_response.json();
      localStorage.access_token = response_json.token;
      store.setState({ access_token: response_json.token });
      return true;
    }
  }
});

export class FormError extends Component {
  render({ error }) {
    if (error) {
      return (<div class='message message-error'>{error}</div>);
    }
    return null;
  }
}
export class Form extends Component {
  submit = async (e) => {
    this.setState({ error: null });
    e.preventDefault();
    const success = await this.props.login(this.state);
    if (!success) {
      this.setState({ error: 'Login incorrect' });
    }
  }
  render({ login }) {
    return (
      <div class='container'>
        <h1>Welcome to lift.zone</h1>
        <hr />
        <FormError error={this.state.error} />
        <form method='post' onSubmit={this.submit}>
          <fieldset>
            <legend>Please work out</legend>
            <div class='form-element label-inline grid-flex-container'>
              <div class='grid-flex-cell-1of3'>
                <label for='email'>Email</label>
              </div>
              <div class='grid-flex-cell-2of3'>
                <input type='email' id='email' name='email' placeholder='email' required autocapitalize='off' autocorrect='off' onInput={linkState(this, 'email')} />
              </div>
            </div>
            <div class='form-element label-inline grid-flex-container'>
              <div class='grid-flex-cell-1of3'>
                <label for='password'>Password</label>
              </div>
              <div class='grid-flex-cell-2of3'>
                <input type='password' id='password' name='password' placeholder='password' required onInput={linkState(this, 'password')} />
              </div>
            </div>
            <div class='form-element grid-flex-container'>
              <div class='grid-flex-cell'>
                <input type='submit' class='button' value='Log in' />
              </div>
            </div>
            <div class='form-element grid-flex-container'>
              <div class='grid-flex-cell'>
                <a href='/recover' class='button button-small'>Forgot your password? Click here to recover it.</a>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
};

export const Login = connect('access_token', actions)(
  ({ access_token, login }) => {
    if (!access_token) {
      return <Form login={login} />;
    }
    route('/', true);
  }
);

export default Login;
