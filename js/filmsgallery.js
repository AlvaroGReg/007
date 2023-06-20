const films = [{
   title: "Agente 007 contra el Dr. No", year: 1962, actor: "Sean Connery", src: "res/films/drno.jpg"
},{
    title: "Desde Rusia con amor", year: 1963, actor: "Sean Connery", src: "res/films/rusia.jpg"
},{
    title: "James Bond contra Goldfinger", year: 1964, actor: "Guy Hamilton", src: "res/films/goldfinger.webp"
},{
    title: "Operación Trueno", year: 1965, actor: "Sean Connery", src: "res/films/trueno.jpg"
},{
    title: "Sólo se vive dos veces", year: 1967, actor: "Sean Connery", src: "res/films/vive.jpg"
},{
    title: "007 al servicio secreto de su Majestad", year: 1969, actor: "George Lazenby", src: "res/films/majestad.jpg"
},{
    title: "Diamantes para la eternidad", year: 1971, actor: "Sean Connery", src: "res/films/diamantes.jpg"
},{
    title: "Vive y deja morir", year: 1973, actor: "Roger Moore", src: "res/films/morir.jpg"
},{
    title: "El Hombre de la Pistola de Oro", year: 1974, actor: "Roger Moore", src: "res/films/oro.jpg"
},{
    title: "La espía que me amó", year: 1977, actor: "Roger Moore", src: "res/films/espia.jpg"
},{
    title: "Sólo para sus ojos", year: 1981, actor: "Roger Moore", src: "res/films/ojos.jpg"
},{
    title: "Octopussy", year: 1983, actor: "Roger Moore", src: "res/films/pussy.webp"
},{
    title: "Panorama para matar", year: 1985, actor: "Roger Moore", src: "res/films/matar.jpg"
},{
    title: "007: Alta tensión", year: 1987, actor: "Timothy Dalton", src: "res/films/tension.jpg"
},{
    title: "007: Licencia para matar", year: 1989, actor: "Timothy Dalton", src: "res/films/licencia.jpg"
},{
    title: "Goldeneye", year: 1995, actor: "Pierce Brosnan", src: "res/films/golden.jpg"
},{
    title: "El mañana nunca muere", year: 1997, actor: "Pierce Brosnan", src: "res/films/manana.jpg"
},{
    title: "El mundo nunca es suficiente", year: 1999, actor: "Pierce Brosnan", src: "res/films/mundo.jpg"
},{
    title: "Muere otro día", year: 2002, actor: "Pierce Brosnan", src: "res/films/dia.jpg"
},{
    title: "Casino Royale", year: 2006, actor: "Daniel Craig", src: "res/films/royale.jpg"
},{
    title: "Quantum of Solace", year: 2008, actor: "Daniel Craig", src: "res/films/quantum.jpg"
},{
    title: "Skyfall", year: 2012, actor: "Daniel Craig", src: "res/films/skyfall.jpg"
},{
    title: "Spectre", year: 2015, actor: "Daniel Craig", src: "res/films/spectre.jpg"
},{
    title: "Sin tiempo para morir", year: 2021, actor: "Daniel Craig", src: "res/films/tiempo.jpg"
}]

const img = document.getElementById('filmimg');
const text = document.getElementById('filmtitle');
const next = document.getElementById('btn_next');
const previous = document.getElementById('btn_prev');

let currentIndex = 0;
let intervalId = null;

function displayFilm(index) {
  img.src = films[index].src;
  text.innerHTML = films[index].title + " (" + films[index].year + ") " + films[index].actor;
}

function nextFilm() {
  currentIndex = (currentIndex + 1) % films.length;
  displayFilm(currentIndex);
}

function prevFilm() {
  currentIndex = (currentIndex - 1 + films.length) % films.length;
  displayFilm(currentIndex);
}

next.addEventListener('click', function() {
  clearInterval(intervalId); // Reinicia el temporizador
  nextFilm();
});

previous.addEventListener('click', function() {
  clearInterval(intervalId); // Reinicia el temporizador
  prevFilm();
});

intervalId = setInterval(nextFilm, 3000); // Ejecuta automáticamente nextFilm cada 2 segundos
