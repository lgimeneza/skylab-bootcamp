import React, { Component } from 'react';
import logic from '../logic'
import token from '../private' // Remove this line or replace whith your own file

// https://beta.developer.spotify.com/documentation/web-api/reference/

class Spotify extends Component {

state = {
    albums: [],
    query:'',
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
        })
    })
}

_hadleWriteQuery = (e) =>{
    this.setState({query: e.target.value})
}

_handlerGetAlbumInfo = (id) => {
    this.props.history.push(`/AlbumInfo/${id}`)
}

render(){return(

    <div>
        <form onSubmit={this._handlerSearchAlbums}>
            <input type="text" value={this.state.query} onChange={this._hadleWriteQuery}/>
            <button type='submit'>Buscar album</button>
        </form>
        <section>
            <ul>
            {this.state.albums.map(album => {
                return(
                <li key={album.id} onClick={() => this._handlerGetAlbumInfo(album.id)} >{album.name}</li>
                );
            })}
            </ul>
        </section>
    </div>

)}}

export default Spotify;