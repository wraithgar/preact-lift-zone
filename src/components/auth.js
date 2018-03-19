import { connect } from 'unistore/preact'

const actions = store => ({
  clear_token(state) {
    localStorage.access_token = null;
    store.setState({ access_token: null });
  },
  async get_me(state) {
    const me_response = await fetch('http://localhost:3001/user', {
      method: 'get',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${state.access_token}`
      }
    });
    if (me_response.ok) {
      const me_json = await me_response.json();
      store.setState({ user: me_json });
      return true;
    }
  }
});

export const Auth = connect('access_token', actions)(
  async ({ access_token, clear_token, get_me }) => {
    if (access_token) {
      const success = await get_me();
      if (success) {
        return;
      }
      clear_token();
    }
  }
);

export default Auth;
