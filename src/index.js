import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import App from './App';
import { CounterContextProvider } from './features/components/context/counter-context';
import store from './features/components/store';

// React 18
// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//     <Provider store={store}>
//         <CounterContextProvider>
//             <RecoilRoot>
//                 <App />
//             </RecoilRoot>
//         </CounterContextProvider>
//     </Provider>
// );

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