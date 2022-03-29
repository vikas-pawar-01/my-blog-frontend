import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import App from './App';
import { CounterContextProvider } from './pages/assignments/context/counter-context';
import store from './pages/assignments/store';

ReactDOM.render(
  <Provider store={store}>
    <CounterContextProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </CounterContextProvider>
  </Provider>,
  document.getElementById('root')
);