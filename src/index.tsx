import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppStore } from './app';
import * as View from './view'

const store =  new AppStore();
ReactDOM.render(<View.TimerView store={store} />, document.getElementById('root'));
