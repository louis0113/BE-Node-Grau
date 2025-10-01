const PlaylistTemplate = require("./playlist");
const {generator, showPlaylist} = require("./iterables");
let prompt = require("prompt-sync")();

function options(){
  console.log("\n" + "-".repeat(40) + "\n" + "1 - CREATE PLAYLIST\n2 - LIST PLAYLISTS\n3 - ADD SONGS\n4 - LIST SONGS FROM A PLAYLIST\n0 - EXIT\n" + "-".repeat(40)) + "\n\n";
}

let x = -1, playlistName, listName, newSong, totalSongs;

const playlists = [];

while (x != 0){
  options();
  x = parseInt(prompt("Enter option: "));

  switch(x){
    case 1:
      playlistName = prompt("Enter the Playlist name: ");

      const list = new PlaylistTemplate([]);

      const playlistInfo = {
        name : playlistName,
        list : list
      }

      console.log(`Creating Playlist ${playlistName}`);
      playlists.push(playlistInfo);
      console.log("Playlist created successfully!")
      break;
    case 2:
      console.log("\nThe total number of playlists is " + playlists.length);
      console.log("\nHere's the list of all added Playlists:\n");

      for (let playlist of playlists){
        console.log(`\nPlaylist Name: ${playlist.name}`)
        showPlaylist(playlist.list, playlist.name);
      }

      break;
    case 3:
      listName = prompt("Enter the Playlist name: ")

      for (let playlist of playlists){
        if ((playlist.name.toUpperCase() === listName.toUpperCase())){
          registeredSongs = parseInt(prompt(`Enter how many songs you want to register in Playlist (${playlist.name}): `));
          for ( let x = 1; x <= registeredSongs; x++){
            newSong = prompt(`Enter the name of the ${x}th song: `);
            playlist.list.addSong(newSong);
            totalSongs = parseInt(playlist.list.songs.length);
            console.log(`The ${totalSongs}th song was added to ${playlist.name} which is ${newSong}`);
          }
        } 
      }

      break;
    case 4:
      listName = prompt("Enter the Playlist name: ")

      for (let playlist of playlists){
        if ((playlist.name.toUpperCase()) === (listName.toUpperCase())){
          console.log(`\nPlaylist Name: ${playlist.name}`)
          showPlaylist(playlist.list, playlist.name)
        }
      }

      break;
    case 0:
      console.log("Program ended!");
      break;
    default:
      console.log(`Value entered: ${x}`);
      if (isNaN(x)){
        console.log("The value is not a number!");
      } 

      if (x > 4){
        console.log("Value is greater than 4");
      }

      if (x < 0){
        console.log("Value is less than 0");
      }

  }

  if(x === 0){
    break;
  }
}
