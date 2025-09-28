const PlaylistTemplate = require("./playlist");
const {generator, showPlaylist} = require("./iterables");

const firstPlaylist = new PlaylistTemplate(["Kuduru", "Anunciação", "Garçom"]);

firstPlaylist.addSong("Marvel Cinematic Songs");

const result = "-".repeat(80) + "\n" + Array.from(generator(firstPlaylist)).map(song => `Added song ${song} to Playlist -> (Too Eclectic)`).join("\n") + "\n" + "-".repeat(80);

let message = "The correct output should be what's below: \n" + result + "\n";

test(message, () => {
  expect(showPlaylist(firstPlaylist, "Too Eclectic")).toBe(console.log(result))
})
