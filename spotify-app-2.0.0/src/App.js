import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Spotify from './components/Spotify'
import AlbumInfo from './components/AlbumInfo'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Spotify'>Spotify</Link>
            </li>
          </ul>

          <hr/>

          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Spotify' component={Spotify} />
          <Route path='/AlbumInfo/:id' render={props => <AlbumInfo id={props.match.params.id}/> } />

        </div>  
      </BrowserRouter>
    );
  }
}

export default App;
