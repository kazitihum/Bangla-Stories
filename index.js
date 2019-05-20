import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      video: []
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.VideoList();
    }, 50000)
  }

  async VideoList() {
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLq71IJk8mCV4-DqsZ7W6zRS7uzKOmmT8j&key=AIzaSyBzqHmkT5G4Ja6wcG-lPgqYwuGDulisc5A')
      .then(function (response) {
        this.setState({ video: response.results });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">
          {this.state.video.map((item) => {
            return (
              <h1>{item.snippet.title}</h1>

            )
          })}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
