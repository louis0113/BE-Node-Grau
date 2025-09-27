class Playlist {

	constructor(musicas){
	this.musicas = musicas || [];
	}

	 adicionarMusica(nome){
	 let sons = this.musicas;
		sons.push(nome);
	}
}

let primeiraPlaylist = new Playlist(["Kuduru", "Anunciação", "Garçom"])

primeiraPlaylist.adicionarMusica("Marvel Cinematic Song");

for (let musica of primeiraPlaylist.musicas[Symbol.iterator]()){
	console.log("Adicionada a música: " + musica);
}
