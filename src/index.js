import { Provider } from 'unistore/preact'

import './style/index.styl';

import App from './components/app';
import store from './store'

if (module.hot) {
	require('preact/debug');
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
