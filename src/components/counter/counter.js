import React from 'react';

import { CounterContext } from '../context/counter-context.js';

const style = {
  fontFamily: 'fantasy',
  textShadow: '2px 3px grey',
  marginBottom: 10,
  fontSize: '3em',
  color: 'darkgrey',
}

const negativeStyle = {
  fontFamilty: 'fantasy',
  textShadow: '2px 3px grey',
  marginBottom: 10,
  fontSize: '3em',
  color: 'red',
}
export default class Counter extends React.Component {
  render() {
    return(
      <CounterContext.Consumer>
        {
          context => {
            return(
              <h3 style={
                context.count >= 0 ? style : negativeStyle
              }>
                {context.count}
              </h3>
            );
          }
        }
      </CounterContext.Consumer>
    );
  }
}