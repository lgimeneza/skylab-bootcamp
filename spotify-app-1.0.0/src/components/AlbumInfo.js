import React, {Component} from 'react'
import logic from '../logic'
import './AlbumInfo.css'

class AlbumInfo extends Component{

    state = {
        album: {}
    }

    componentDidMount() {
        logic.getAlbumInfo(this.props.id)
            .then(album => this.setState({ album }))
    }

    render(){
        return(
            <div>
                <h1>{this.state.album.name}</h1>
                <h3>{this.state.album.release_date}</h3>
                {this.state.album.tracks &&  this.state.album.tracks.items.map(track => {
                    return(
                        <div key={track.id}>
                            {track.track_number} - {track.name}
                            <div className='player'><audio controls src={track.preview_url} ></audio></div> 
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default AlbumInfo