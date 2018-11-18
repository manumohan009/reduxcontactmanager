import React, { Component } from 'react';

class Test extends Component {
  constructor() {
    super();
    console.log('constructor');
  }

  state = {
    title: '',
    body: ''
  };
  componentWillMount() {
    console.log('ComponentWillMount');
  }
  componentDidMount() {
    console.log('ComponentDidMount...');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  componentWillUpdate() {
    console.log('ComponentWillUpdate');
  }
  componentDidUpdate() {
    console.log('ComponentDidUpdate');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('ComponentWillReceiveProps');
  }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return { test: 'something' };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log('componentWillReceiveProps');
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
