import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
// import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      video: [],
    };
  }

  componentDidMount() {
  this.VideoList();
  }

  VideoList() {
    axios.get('playlistItems?playlistId=PLq71IJk8mCV4-DqsZ7W6zRS7uzKOmmT8j')
      .then(response => {
        this.setState({ video: response.data.items });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">
          { this.state.video.map(item =>
              <h1 key={item.id}>{item.snippet.title}</h1>
          )}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
