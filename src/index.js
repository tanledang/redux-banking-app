// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from 'redux';

console.log("Starting Banking App");

const defaultState = {
  balance: 0,
  authorizedUsers: [],
};

const actionIncrement = {
	type: 'increment'
};

const actionDecrement = {
	type: 'decrement'
};

const actionSet = {
  type: 'set',
  payload: 100
}

const actionAddAuthorizedUser = {
  type: 'add-user',
  payload: {
    name: "Tan",
    ssn: "123-456-7890"
  }
}


function account(state=defaultState, action) {
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        balance: state.balance + 1
      }
    case 'decrement': 
      return {
        ...state,
        balance: state.balance - 1
      }
    case 'set':
      return {
        ...state,
        balance: action.payload
      }
    case 'add-user':
      return {
        ...state,
        authorizedUsers: [...state.authorizedUsers, action.payload]
      }
    default:
      return state
  }
}

const store = createStore(account);

store.subscribe(() => {
  console.log('=== state has updated ===');
  const state = store.getState();
  console.log(state);
})

window.store = store;
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement;
window.actionSet = actionSet;
window.actionAddAuthorizedUser = actionAddAuthorizedUser;