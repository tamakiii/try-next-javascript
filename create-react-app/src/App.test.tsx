import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState }  from './types/index';
import { EnthusiasmAction } from './actions';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
