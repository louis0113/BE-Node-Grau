class Playlist {

  constructor(musicas){
    this.musicas = musicas || [];
  }

  adicionarMusica(nome){
    this.musicas.push(nome);
  }
}

function* generator(playlist){
  for (const musica of playlist.musicas[Symbol.iterator]()){
    yield musica;
  }
}

function mostrarPlaylist(playlist,nome){
  console.log("-".repeat(80));
  for (const musica of generator(playlist)){
    console.log(`Adicionada a música ${musica} para a Playlist -> (${nome})`);
  }
  console.log("-".repeat(80));
}

const primeiraPlaylist = new Playlist(["Kuduru", "Anunciação", "Garçom"]);
primeiraPlaylist.adicionarMusica("Marvel Cinematic Song");

const segundaPlaylist = new Playlist([]);
segundaPlaylist.adicionarMusica("Blue Bird");
segundaPlaylist.adicionarMusica("Forest Songs");
segundaPlaylist.adicionarMusica("Drums Songs");

mostrarPlaylist(primeiraPlaylist,"Eclético Ever");
mostrarPlaylist(segundaPlaylist,"Sóbrio... por enquanto");

