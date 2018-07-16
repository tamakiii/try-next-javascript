import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import './App.css';
import Hello from './containers/Hello';

import logo from './logo.svg';

export interface Props {
  store: Store
}

class App extends React.Component <Props, object> {
  public render() {
    const { store } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Provider store={store}>
          <Hello />
        </Provider>
      </div>
    );
  }
}

export default App;
