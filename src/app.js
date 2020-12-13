import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from '@iso/assets/styles/globalStyle';
import { store } from './redux/store';
import Boot from './redux/boot';
import Routes from './router';

const App = () => (
  <Provider store={store}>
      <>
        <GlobalStyles />
        <Routes />
      </>
  </Provider>
);
Boot()
  .then(() => App())
  .catch(error => console.error(error));

export default App;
