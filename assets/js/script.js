const videosMPS = (() => {
    /* VARIABLES PRIVADAS */
    let musicaV = document.getElementById("musica");
    let peliculaV = document.getElementById("peliculas");
    let serieV = document.getElementById("series");
    /* FUNCIONES PRIVADAS */
    musicaFP = (videoM) => {
        musicaV.insertAdjacentHTML("afterbegin", videoM);
    };
    peliculaFP = (videoP) => {
        peliculaV.insertAdjacentHTML("afterbegin", videoP);
    };
    serieFP = (videoS) => {
        serieV.insertAdjacentHTML("afterbegin", videoS);
    };

    return {
        /* FUNCIONES PUBLICAS */
        musicaPU: (Vmusica) => {
            musicaFP(Vmusica);
        },
        peliculaPU: (Vpelicula) => {
            peliculaFP(Vpelicula);
        },
        seriePU: (Vserie) => {
            serieFP(Vserie);
        },
    };
})();

/* VARIABLES PUBLICAS CON VIDEOS*/
let EtiqMusica = '<iframe width="560" height="315" src="https://www.youtube.com/embed/bpOSxM0rNPM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
let EtiqPelicula = '<iframe width="560" height="315" src="https://www.youtube.com/embed/NVw3DnN9WoA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
let EtiqSerie = '<iframe width="560" height="315" src="https://www.youtube.com/embed/i1eJMig5Ik4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

/* CLASE PADRE */
class Video {
    constructor(videoMusica,videoPelicula,videoSeries){
        this._videoMusica = videoMusica;
        this._videoPelicula = videoPelicula;
        this._videoSeries = videoSeries;
    }
    get videoMusica(){
        return this._videoMusica;
    }
    get videoPelicula(){
        return this._videoPelicula;
    }
    get videoSeries(){
        return this._videoSeries;
    }
    mostrarMusica(){
        return videosMPS.musicaPU(this.videoMusica);
    }
    mostrarPelicula(){
        return videosMPS.peliculaPU(this.videoPelicula);
    }
    mostrarSeries(){
        return videosMPS.seriePU(this.videoSeries);
    }
};

/* CLASES HIJOS */
class Musica extends Video {
    constructor(videoMusica,videoPelicula,videoSeries){
        super(videoMusica,videoPelicula,videoSeries)
    }
    mostrarMusica(){
        return videosMPS.musicaPU(this.videoMusica);
    }
}

class Pelicula extends Video {
    constructor(videoMusica,videoPelicula,videoSeries){
        super(videoMusica,videoPelicula,videoSeries)
    }
    mostrarPelicula(){
        return videosMPS.peliculaPU(this.videoPelicula);
    }
}

class Serie extends Video {
    constructor(videoMusica,videoPelicula,videoSeries){
        super(videoMusica,videoPelicula,videoSeries)
    }
    mostrarSeries(){
        return videosMPS.seriePU(this.videoSeries);
    }
}

/* INSTANCIAS */
let musica1 = new Musica(EtiqMusica,'URL-Pelicula','URL-Serie');
let pelicula1 = new Pelicula('URL-Musica',EtiqPelicula,'URL-Serie');
let series1 = new Serie('URL-Musica','URL-Pelicula',EtiqSerie);

/* EJECUCION INTEGRACION VIDEOS */
musica1.mostrarMusica();
pelicula1.mostrarPelicula();
series1.mostrarSeries();