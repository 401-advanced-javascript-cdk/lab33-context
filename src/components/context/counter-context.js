import React from 'react';

export const CounterContext = React.createContext();

export default class CounterContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.count = 0;
    this.state.increment = this.increment;
    this.state.decrement = this.decrement;
  }

  increment = count => this.setState({count: this.state.count + 1});
  decrement = count => this.setState({count: this.state.count - 1});

  render() {
    return(
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}