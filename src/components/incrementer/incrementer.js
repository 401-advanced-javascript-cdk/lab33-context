import React from 'react';

import { CounterContext } from '../context/counter-context.js';

const style = {
  backgroundColor: 'forestgreen',
  borderRadius: 10,
  color: '#f5f5f5',
  fontSize: '2em',
  fontFamily: 'monospace',
  marginLeft: '1em'
}

export default class Incrementer extends React.Component {
  render() {
    return(
      <CounterContext.Consumer>
        {
          context => {
            return(
              <button style={style} onClick={() => context.increment()}>+</button>
            );
          }
        }
      </CounterContext.Consumer>
    );
  }
}