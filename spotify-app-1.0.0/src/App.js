import React, { Component } from 'react';
import logic from './logic/index'
import token from './private/index' // Remove this line or replace whith your own file
import './App.css';
import AlbumInfo from './components/AlbumInfo'

// https://beta.developer.spotify.com/documentation/web-api/reference/

class App extends Component {

  state = {
    albums: [],
    query:'',
    albumId: ''
  }

  _handlerSearchAlbums = (e) => {
    e.preventDefault()

    // Replace this line whith your token. Do something like logic.token = 'your token'
    logic.token = token.getToken()

    logic.searchAlbums(this.state.query)
    .then(albums => {
      this.setState({
        albums,
        query: '',
        albumId: ''
      })
    })
  }

  _handlerGetAlbumInfo = (id) => {
    this.setState({albumId: id})
  }

  _hadleWriteQuery = (e) =>{
    this.setState({query: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handlerSearchAlbums}>
            <input type="text" value={this.state.query} onChange={this._hadleWriteQuery}/>
            <button type='submit' >Buscar album</button>
        </form>
        {this.state.albumId ? <AlbumInfo id={this.state.albumId} /> : (
          <section>
            <ul>
              {this.state.albums.map(album => {
                return(
                  <li key={album.id} onClick={() => this._handlerGetAlbumInfo(album.id)} >{album.name}</li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    );
  }
}

export default App;
