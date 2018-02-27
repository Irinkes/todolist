import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list.js'

class App extends React.Component {
  render() {
    return (
        <List />
    );
  }
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<App />, MOUNT_NODE);
