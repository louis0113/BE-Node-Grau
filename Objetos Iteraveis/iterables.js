function* generator(playlist){
  for (const song of playlist.songs[Symbol.iterator]()){
    yield song;
  }
}

function showPlaylist(playlist, name){
  console.log("-".repeat(80));
  for (const song of generator(playlist)){
    console.log(`Added song ${song} to Playlist -> (${name})`);
  }
  console.log("-".repeat(80));
}

module.exports = {
  generator,
  showPlaylist
}
