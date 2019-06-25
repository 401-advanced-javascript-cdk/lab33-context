import React from 'react';

import  CounterContext  from './components/context/counter-context.js';

import Counter from './components/counter/counter.js';
import Incrementer from './components/incrementer/incrementer.js';
import Decrementer from './components/decrementer/decrementer.js';

import './App.css';

const style = {
  textAlign: 'center',
  maxWidth: '150px',
  minWidth: '150px',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'beige',
  borderRadius: '10px',
  boxShadow: '3px 3px lightgrey',
}

class App extends React.Component {
  render() {
    return (
      <CounterContext>
        <div style={style}>
          <Counter />
          <Decrementer />
          <Incrementer />
        </div>
      </CounterContext>
    );
  }
}

export default App;
