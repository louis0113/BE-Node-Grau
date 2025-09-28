class Playlist {

  constructor(songs){
    this.songs = songs || [];
  }

  addSong(name){
    this.songs.push(name);
  }
}

module.exports = Playlist;
