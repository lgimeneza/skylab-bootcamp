const logic = {
    url: 'https://api.spotify.com/v1',
    token:'',

    headers() {
        return { 
            headers: { 
                Authorization: `Bearer ${this.token}`
            }
        }
    },

    searchAlbums(album){
        return fetch(`${this.url}/search?q=${album}&type=album`, this.headers())
            .then(resp => resp.json())
            .then(data => data.albums.items)
    },

    getAlbumInfo(id){
        return fetch(`${this.url}/albums/${id}`, this.headers())
            .then(resp => resp.json())
            .then(data => data)
    }

}

export default logic