import React, { Component } from 'react';

/*ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);*/

class Author extends React.component {
  render() {
    return <button>the Author is {this.props.name}</button>
  }
}
