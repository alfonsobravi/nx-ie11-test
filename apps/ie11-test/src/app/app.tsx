import './app.css';

import axios, { AxiosResponse } from 'axios';
import produce from 'immer';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, IModuleStore } from 'redux-dynamic-modules-core';

import { getAuthModule } from '@nx-ie11-test/domains';
import { Xyz } from '@nx-ie11-test/ui';

import Abx from './abx';
import Formx from './formx';
import Patientx from './patientx';

const todos = [{ text: 'one', done: false }, { text: 'two', done: true }];

const nextTodos = produce(todos, draft => {
    draft.push({ text: 'learn immer', done: true });
    draft[1].done = true;
});

// old state is unmodified
console.log(todos.length); // 2
console.log(todos[1].done); // false

// new state reflects the draft
console.log(nextTodos.length); // 3
console.log(nextTodos[1].done); // true

// structural sharing
console.log(todos === nextTodos); // false
console.log(todos[0] === nextTodos[0]); // true
console.log(todos[1] === nextTodos[1]); // false

const list = axios
      .get('/patients?_start=0&_end=20')
      .then((response: AxiosResponse<any[]>) => response)
      .catch(error => ({ error }));

list.then(x => console.log('AXIOS Res', x));

class App extends Component {
  private store: IModuleStore<any>;
  constructor(props: any, context: any) {
      super(props, context);
      this.store = createStore({ extensions: [] }, ...getAuthModule());
  }
  render(): React.ReactNode {
    /*
    * Replace the elements below with your own.
    *
    * Note: The corresponding styles are in the ./${fileName}.${style} file.
    */
    return (
      <Provider store={this.store}>
      <div className="app">
        <header className="flex">
          <img
            alt=""
            width="75"
            src="https://nx.dev/assets/images/nx-logo-white.svg"
          />
          <h1>Welcome to ie11-test!</h1>
        </header>
        <main>
          <h2>Library dependency</h2>
          <Xyz />

          <h2>Redux</h2>
          <Abx />

          <h2>Formik + Yup</h2>
          <Formx />
          
          <h2>Patients</h2>
          <Patientx />
          
        </main>
      </div>
      </Provider>
    );
  }
};

export default App;
