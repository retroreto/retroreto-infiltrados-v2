var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");

// src/data/hitos.ts
var HITOS_DATASET = [
  {
    id: 1,
    categoria: "Historia Moderna",
    hito: "La Ca\xEDda del Muro de Berl\xEDn",
    pista: "Ocurri\xF3 a finales del a\xF1o 1989 y marc\xF3 la reunificaci\xF3n de Alemania.",
    imagen: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    categoria: "Ciencia y Espacio",
    hito: "La llegada del Apolo 11 a la Luna",
    pista: "Sucedi\xF3 en julio de 1969 con Neil Armstrong liderando la tripulaci\xF3n.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    categoria: "Historia Antigua",
    hito: "El incendio de la Biblioteca de Alejandr\xEDa",
    pista: "Se perdieron miles de pergaminos invaluables del saber cl\xE1sico en Egipto.",
    imagen: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    categoria: "Historia de la Medicina",
    hito: "El descubrimiento de la Penicilina",
    pista: "Alexander Fleming la descubri\xF3 en 1928 de forma accidental mediante hongos.",
    imagen: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    categoria: "Artes",
    hito: "El estreno de la Novena Sinfon\xEDa de Beethoven",
    pista: "Ocurri\xF3 en Viena en 1824 por un compositor alem\xE1n que ya sufr\xEDa de sordera profunda.",
    imagen: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    categoria: "Cultura Pop 80s",
    hito: "El lanzamiento del \xE1lbum Thriller de Michael Jackson",
    pista: "A\xF1o 1982. Se convirti\xF3 en el \xE1lbum m\xE1s vendido de todos los tiempos revolucionando los videoclips.",
    imagen: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    categoria: "Historia Geek",
    hito: "El lanzamiento de la primera computadora Macintosh",
    pista: "Presentada por Steve Jobs en enero de 1984 con un ic\xF3nico comercial de televisi\xF3n.",
    imagen: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    categoria: "Cultura Pop 70s",
    hito: "El estreno de la primera pel\xEDcula de Star Wars",
    pista: "George Lucas cambi\xF3 el cine de ciencia ficci\xF3n para siempre en mayo de 1977.",
    imagen: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    categoria: "Historia de la Computaci\xF3n",
    hito: "La creaci\xF3n de la World Wide Web (WWW)",
    pista: "Tim Berners-Lee desarroll\xF3 el sistema en el CERN alrededor de 1989-1990.",
    imagen: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    categoria: "Grandes Inventos",
    hito: "La patente del tel\xE9fono por Alexander Graham Bell",
    pista: "Registrada en marzo de 1876, iniciando la era de las telecomunicaciones globales.",
    imagen: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    categoria: "Cultura Pop 90s",
    hito: "El lanzamiento de la consola PlayStation en Jap\xF3n",
    pista: "Diciembre de 1994. Sony introduce los gr\xE1ficos en 3D revolucionando los videojuegos dom\xE9sticos.",
    imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    categoria: "Historia de la Animaci\xF3n",
    hito: "El estreno de Toy Story de Pixar",
    pista: "A\xF1o 1995. El primer largometraje totalmente animado por computadora en la historia del cine.",
    imagen: "https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    categoria: "Historia del Deporte",
    hito: "El Maracanazo en el Mundial de F\xFAtbol",
    pista: "Julio de 1950. Uruguay derrota a Brasil en R\xEDo de Janeiro silenciando a todo un pa\xEDs.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    categoria: "Eventos Hist\xF3ricos",
    hito: "El hundimiento del RMS Titanic",
    pista: "Abril de 1912. El transatl\xE1ntico supuestamente insumergible choca contra un iceberg en su viaje inaugural.",
    imagen: "https://images.unsplash.com/photo-1500077423678-25eead48513a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Pac-Man en Arcades",
    pista: "Mayo de 1980 en Jap\xF3n. Desarrollado por Toru Iwatani, se convirti\xF3 en un fen\xF3meno cultural masivo.",
    imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    categoria: "Historia de la Aviaci\xF3n",
    hito: "El primer vuelo controlado de los Hermanos Wright",
    pista: "Diciembre de 1903 en Kitty Hawk. Dur\xF3 apenas 12 segundos pero cambi\xF3 el transporte humano.",
    imagen: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    categoria: "Cultura Pop 60s",
    hito: "La m\xEDtica presentaci\xF3n de The Beatles en el Show de Ed Sullivan",
    pista: "Febrero de 1964. Desat\xF3 oficialmente la 'Beatleman\xEDa' en todo el territorio norteamericano.",
    imagen: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    categoria: "Grandes Descubrimientos",
    hito: "La presentaci\xF3n de la Teor\xEDa de la Relatividad Especial",
    pista: "A\xF1o 1905. Publicada por un joven Albert Einstein mientras trabajaba en una oficina de patentes.",
    imagen: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    categoria: "Artes Visuales",
    hito: "La inauguraci\xF3n de la Torre Eiffel en Par\xEDs",
    pista: "Presentada en la Exposici\xF3n Universal de 1889 para conmemorar el centenario de la Revoluci\xF3n Francesa.",
    imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    categoria: "Historia Medieval",
    hito: "La coronaci\xF3n de Carlomagno como Emperador",
    pista: "Sucedi\xF3 en la Navidad del a\xF1o 800 en Roma, unificando gran parte de Europa Occidental.",
    imagen: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Volver al Futuro",
    pista: "Julio de 1985. Robert Zemeckis inmortaliza el autom\xF3vil DeLorean como la m\xE1quina del tiempo definitiva.",
    imagen: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    categoria: "Historia Geek",
    hito: "El lanzamiento de la consola NES en Norteam\xE9rica",
    pista: "Octubre de 1985. Nintendo rescata a la industria de los videojuegos tras la gran crisis del 83.",
    imagen: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    categoria: "Grandes Inventos",
    hito: "La primera emisi\xF3n de televisi\xF3n p\xFAblica",
    pista: "Llevada a cabo por la BBC en Londres en 1936, usando el sistema mec\xE1nico de John Logie Baird.",
    imagen: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    categoria: "Historia del Deporte",
    hito: "Los goles de Maradona contra Inglaterra en el Mundial",
    pista: "Junio de 1986. 'La Mano de Dios' y el 'Gol del Siglo' ocurren en el Estadio Azteca de M\xE9xico.",
    imagen: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 25,
    categoria: "Historia de la M\xFAsica",
    hito: "El festival de Woodstock",
    pista: "Agosto de 1969. Tres d\xEDas de paz, amor y m\xFAsica que definieron a la generaci\xF3n contracultural.",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 26,
    categoria: "Historia Antigua",
    hito: "El asesinato de Julio C\xE9sar en los Idus de Marzo",
    pista: "A\xF1o 44 a.C. Un grupo de senadores apu\xF1ala al dictador romano en el Teatro de Pompeyo.",
    imagen: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 27,
    categoria: "Cultura Pop 90s",
    hito: "El lanzamiento de Windows 95",
    pista: "Agosto de 1995. Microsoft introduce el bot\xF3n de Inicio y revoluciona el software de consumo masivo.",
    imagen: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 28,
    categoria: "Ciencia y Espacio",
    hito: "El lanzamiento del Telescopio Espacial Hubble",
    pista: "Abril de 1990. Puesto en \xF3rbita para capturar las im\xE1genes m\xE1s profundas del universo lejano.",
    imagen: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 29,
    categoria: "Historia Geek",
    hito: "El lanzamiento de la Game Boy de Nintendo",
    pista: "A\xF1o 1989. Dise\xF1ada por Gunpei Yokoi, populariz\xF3 el juego port\xE1til empaquetada junto con Tetris.",
    imagen: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 30,
    categoria: "Historia Moderna",
    hito: "El accidente nuclear de Chern\xF3bil",
    pista: "Abril de 1986. Una explosi\xF3n en el reactor 4 de la planta ucraniana libera radiaci\xF3n masiva.",
    imagen: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 31,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula Jurassic Park",
    pista: "Junio de 1993. Steven Spielberg asombra al mundo mezclando animatr\xF3nicos con efectos CGI revolucionarios.",
    imagen: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 32,
    categoria: "Grandes Descubrimientos",
    hito: "El hallazgo de la tumba de Tutankam\xF3n",
    pista: "Noviembre de 1922. Howard Carter abre la c\xE1mara intacta en el Valle de los Reyes en Egipto.",
    imagen: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 33,
    categoria: "Historia de la imprenta",
    hito: "La impresi\xF3n de la Biblia de Gutenberg",
    pista: "Hacia 1455 en Maguncia, Alemania. Da inicio de manera oficial a la era de la imprenta de tipos m\xF3viles.",
    imagen: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 34,
    categoria: "Historia de la M\xFAsica",
    hito: "El concierto Live Aid en Wembley y Filadelfia",
    pista: "Julio de 1985. Organizado por Bob Geldof, destaca la ic\xF3nica actuaci\xF3n de Queen liderada por Freddie Mercury.",
    imagen: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 35,
    categoria: "Historia Geek",
    hito: "El nacimiento de Linux",
    pista: "Agosto de 1991. Un estudiante finland\xE9s llamado Linus Torvalds anuncia un n\xFAcleo de sistema operativo libre.",
    imagen: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 36,
    categoria: "Historia del Arte",
    hito: "Leonardo da Vinci finaliza la Mona Lisa",
    pista: "Hacia 1503-1506 en Florencia. Se convierte en la obra cumbre del Renacimiento y del uso del sfumato.",
    imagen: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 37,
    categoria: "Ciencia y Medicina",
    hito: "La erradicaci\xF3n oficial de la Viruela",
    pista: "La OMS la declara extinta en el mundo en 1980 tras una campa\xF1a global intensiva de vacunaci\xF3n.",
    imagen: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 38,
    categoria: "Cultura Pop 70s",
    hito: "El estreno de la pel\xEDcula El Padrino",
    pista: "Marzo de 1972. Francis Ford Coppola redefine el cine de mafias bas\xE1ndose en la novela de Mario Puzo.",
    imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 39,
    "categoria": "Historia del Deporte",
    "hito": "El debut profesional de Michael Jordan en la NBA",
    "pista": "Octubre de 1984. Juega su primer partido oficial vistiendo la camiseta de los Chicago Bulls.",
    "imagen": "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 40,
    categoria: "Historia de la Exploraci\xF3n",
    hito: "Crist\xF3bal Col\xF3n llega a las islas del Caribe",
    pista: "Octubre de 1492. La expedici\xF3n espa\xF1ola toca tierra firme creyendo haber alcanzado las Indias Orientales.",
    imagen: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 41,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la serie de televisi\xF3n Friends",
    pista: "Septiembre de 1994 en la NBC. Seis amigos de Nueva York irrumpen en la televisi\xF3n marcando a una generaci\xF3n.",
    imagen: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 42,
    categoria: "Historia de la Computaci\xF3n",
    hito: "La derrota de Garry Kasparov ante la supercomputadora Deep Blue",
    pista: "Mayo de 1997. El sistema desarrollado por IBM vence al campe\xF3n mundial de ajedrez en un encuentro formal.",
    imagen: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 43,
    categoria: "Grandes Inventos",
    hito: "Thomas Edison presenta la bombilla incandescente comercial",
    pista: "Octubre de 1879. Logra que un filamento de carbono brille por m\xE1s de 13 horas en su laboratorio.",
    imagen: "https://images.unsplash.com/photo-1517524006283-7b4433cbb161?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 44,
    categoria: "Historia Antigua",
    hito: "La construcci\xF3n de la Gran Pir\xE1mide de Guiza",
    pista: "Hacia 2560 a.C. Erigida como tumba para el fara\xF3n Keops, fue la estructura m\xE1s alta por miles de a\xF1os.",
    imagen: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 45,
    categoria: "Ciencia y Espacio",
    hito: "El lanzamiento del sat\xE9lite Sputnik 1 por la URSS",
    pista: "Octubre de 1957. El primer objeto artificial en orbitar la Tierra, desatando la carrera espacial.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 46,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Doom de id Software",
    pista: "Diciembre de 1993. Distribuido como shareware, populariz\xF3 masivamente los juegos de disparos en primera persona.",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 47,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula E.T., el extraterrestre",
    pista: "Junio de 1982. Dirigida por Steven Spielberg, conmueve al mundo entero con la amistad entre Elliott y un alien\xEDgena.",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 48,
    categoria: "Historia del Deporte",
    hito: "Nadia Com\u0103neci logra el primer '10 perfecto' en Gimnasia",
    pista: "Julio de 1976 en los Juegos Ol\xEDmpicos de Montreal. El marcador digital no estaba preparado y mostr\xF3 1.00.",
    imagen: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 49,
    categoria: "Historia de la M\xFAsica",
    hito: "El inicio de las transmisiones del canal MTV",
    pista: "Agosto de 1981. El primer videoclip emitido en la se\xF1al estadounidense fue 'Video Killed the Radio Star'.",
    imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 50,
    categoria: "Historia de la Medicina",
    hito: "La clonaci\xF3n de la oveja Dolly",
    pista: "Julio de 1996 en Escocia. El primer mam\xEDfero clonado con \xE9xito a partir de una c\xE9lula adulta.",
    imagen: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 51,
    categoria: "Cultura Pop 70s",
    hito: "El lanzamiento de la consola Atari 2600",
    pista: "Septiembre de 1977. Populariz\xF3 el sistema de cartuchos intercambiables en los hogares del mundo.",
    imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 52,
    categoria: "Historia Geek",
    hito: "El lanzamiento de Windows 1.0",
    pista: "Noviembre de 1985. Bill Gates presenta la primera interfaz gr\xE1fica de usuario operativa sobre MS-DOS.",
    imagen: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 53,
    categoria: "Eventos Hist\xF3ricos",
    hito: "La firma de la Declaraci\xF3n de Independencia de EE.UU.",
    pista: "Julio de 1776 en Filadelfia. Las trece colonias rompen formalmente lazos con el Imperio Brit\xE1nico.",
    imagen: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 54,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula Matrix",
    pista: "Marzo de 1999. Las hermanas Wachowski revolucionan los efectos visuales con la t\xE9cnica del 'bullet time'.",
    imagen: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 55,
    categoria: "Ciencia y F\xEDsica",
    hito: "Isaac Newton publica los Principia Mathematica",
    pista: "A\xF1o 1687. Se enuncian las leyes del movimiento y la ley de la gravitaci\xF3n universal b\xE1sica.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 56,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Super Mario Bros.",
    pista: "Septiembre de 1985 en Jap\xF3n. Shigeru Miyamoto crea la plantilla definitiva para los juegos de plataformas.",
    imagen: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 57,
    categoria: "Historia del Deporte",
    hito: "Ayrton Senna gana su primer Campeonato Mundial de F1",
    pista: "Octubre de 1988 en el Gran Premio de Jap\xF3n tras una remontada hist\xF3rica pilotando para McLaren Honda.",
    imagen: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 58,
    categoria: "Historia de la M\xFAsica",
    hito: "El lanzamiento del \xE1lbum The Dark Side of the Moon de Pink Floyd",
    pista: "Marzo de 1973. Se convierte en un hito de la m\xFAsica progresiva y de la ingenier\xEDa de sonido.",
    imagen: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 59,
    categoria: "Grandes Inventos",
    hito: "La invenci\xF3n de la Dinamita por Alfred Nobel",
    pista: "Patentada en 1867. Un invento industrial cuyo remordimiento posterior dar\xEDa origen a los Premios Nobel.",
    imagen: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 60,
    categoria: "Historia de la Literatura",
    hito: "Se publica la primera parte de Don Quijote de la Mancha",
    pista: "A\xF1o 1605 en Madrid. Miguel de Cervantes Saavedra revoluciona y funda la novela moderna.",
    imagen: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 61,
    categoria: "Cultura Pop 80s",
    hito: "El lanzamiento del Cubo de Rubik a nivel mundial",
    pista: "A\xF1o 1980. El rompecabezas mec\xE1nico inventado por Ern\u0151 Rubik se vuelve la obsesi\xF3n de la d\xE9cada.",
    imagen: "https://images.unsplash.com/photo-1591238372638-1b739973216a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 62,
    categoria: "Historia Geek",
    hito: "La creaci\xF3n del juego Tetris por Alexey Pajitnov",
    pista: "Junio de 1984 en Mosc\xFA. Creado en una computadora Electronika 60 detr\xE1s de la cortina de hierro.",
    imagen: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 63,
    categoria: "Historia de la Astronom\xEDa",
    hito: "Galileo Galilei apunta su telescopio al espacio",
    pista: "A\xF1o 1609 en Padua. Descubre los cuatro sat\xE9lites mayores de J\xFApiter y las fases de Venus.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 64,
    categoria: "Historia del Cine",
    hito: "El estreno de El cantante de jazz",
    pista: "Octubre de 1927. La primera pel\xEDcula con sonido sincronizado que pone fin a la era del cine mudo.",
    imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 65,
    categoria: "Historia de la Medicina",
    hito: "Louis Pasteur prueba la vacuna contra la Rabia",
    pista: "Julio de 1885. Salva la vida del ni\xF1o Joseph Meister aplicando un tratamiento experimental exitoso.",
    imagen: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 66,
    categoria: "Cultura Pop 90s",
    hito: "El lanzamiento del juego Pok\xE9mon Rojo y Verde en Jap\xF3n",
    pista: "Febrero de 1996. Satoshi Tajiri inicia una de las franquicias multimedia m\xE1s rentables de la historia.",
    imagen: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 67,
    categoria: "Historia del Deporte",
    hito: "Pel\xE9 gana su tercer Mundial de F\xFAtbol",
    pista: "Junio de 1970 en el Estadio Azteca de M\xE9xico. Consagra definitivamente a la m\xEDtica selecci\xF3n brasile\xF1a.",
    imagen: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 68,
    categoria: "Ciencia y Espacio",
    hito: "Yuri Gagarin se convierte en el primer hombre en el espacio",
    pista: "Abril de 1961 a bordo de la nave Vostok 1, completando una \xF3rbita a la Tierra en 108 minutos.",
    imagen: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 69,
    categoria: "Historia de la Arqueolog\xEDa",
    hito: "El descubrimiento de la Piedra de Rosetta",
    pista: "Julio de 1799 por soldados franceses en Egipto. Clave definitiva para descifrar los jerogl\xEDficos.",
    imagen: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 70,
    categoria: "Historia de la Computaci\xF3n",
    hito: "El lanzamiento del IBM PC original",
    pista: "Agosto de 1981. Establece la arquitectura est\xE1ndar de hardware x86 en la computaci\xF3n comercial.",
    imagen: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 71,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula El Imperio Contraataca",
    pista: "Mayo de 1980. Contiene una de las revelaciones m\xE1s impactantes del cine: 'No, yo soy tu padre'.",
    imagen: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 72,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Sonic the Hedgehog",
    pista: "Junio de 1991. SEGA estrena su mascota oficial para competir directamente con el monopolio de Nintendo.",
    imagen: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 73,
    categoria: "Grandes Inventos",
    hito: "Guglielmo Marconi logra la primera transmisi\xF3n de radio transatl\xE1ntica",
    pista: "Diciembre de 1901. Env\xEDa la letra 'S' en c\xF3digo morse desde Inglaterra hasta Canad\xE1 sin cables.",
    imagen: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 74,
    categoria: "Historia del Deporte",
    hito: "Muhammad Ali derrota a George Foreman en 'The Rumble in the Jungle'",
    pista: "Octubre de 1974 en Zaire. Ali recupera el t\xEDtulo mundial usando la t\xE9cnica t\xE1ctica de 'rope-a-dope'.",
    imagen: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 75,
    categoria: "Historia de la M\xFAsica",
    hito: "El estreno de la \xF3pera El Fantasma de la \xD3pera en Londres",
    pista: "Octubre de 1986. El musical de Andrew Lloyd Webber inicia su reinado como uno de los m\xE1s longevos.",
    imagen: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 76,
    categoria: "Historia Moderna",
    hito: "Nelson Mandela es liberado de prisi\xF3n",
    pista: "Febrero de 1990. Abandona la prisi\xF3n de Victor Verster tras 27 a\xF1os de cautiverio por el Apartheid.",
    imagen: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 77,
    categoria: "Cultura Pop 90s",
    hito: "El lanzamiento del juego Final Fantasy VII en la PlayStation",
    pista: "Enero de 1997. Populariza globalmente los juegos de rol japoneses con secuencias cinem\xE1ticas en 3D.",
    imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 78,
    categoria: "Ciencia y Espacio",
    hito: "La tragedia del Transbordador Espacial Challenger",
    pista: "Enero de 1986. Se desintegra a los 73 segundos de su lanzamiento debido a una falla en las juntas t\xF3ricas.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 79,
    categoria: "Historia de la Qu\xEDmica",
    hito: "Dmitri Mendel\xE9yev publica su primera Tabla Peri\xF3dica",
    pista: "A\xF1o 1869. Organiza los elementos por peso at\xF3mico dejando huecos para los que a\xFAn no se descubr\xEDan.",
    imagen: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 80,
    categoria: "Historia del Deporte",
    hito: "El 'Dream Team' de EE.UU. deslumbra en los JJ.OO. de Barcelona",
    pista: "Agosto de 1992. Por primera vez juegan estrellas activas de la NBA reunidas en una selecci\xF3n.",
    imagen: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 81,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Terminator",
    pista: "Octubre de 1984. James Cameron consagra a Arnold Schwarzenegger en el cine de acci\xF3n y ciencia ficci\xF3n.",
    imagen: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 82,
    categoria: "Historia Geek",
    hito: "El lanzamiento de la consola Sega Mega Drive / Genesis",
    pista: "Octubre de 1988 en Jap\xF3n. Inicia la legendaria guerra de consolas de 16 bits bajo el lema 'Sega does what Nintendon't'.",
    imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 83,
    categoria: "Grandes Inventos",
    hito: "Los Hermanos Lumi\xE8re realizan la primera funci\xF3n de cine paga",
    pista: "Diciembre de 1895 en Par\xEDs. Exhiben cortometrajes como 'La salida de los obreros de la f\xE1brica'.",
    imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 84,
    categoria: "Historia de la Literatura",
    hito: "Mary Shelley publica Frankenstein o el moderno Prometeo",
    pista: "A\xF1o 1818 de forma an\xF3nima en Londres. Considerada la primera obra de ciencia ficci\xF3n real de la historia.",
    imagen: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 85,
    categoria: "Historia de la M\xFAsica",
    hito: "El lanzamiento de Queen del sencillo Bohemian Rhapsody",
    pista: "Octubre de 1975. Desaf\xEDa las reglas radiales de la \xE9poca con sus m\xE1s de 6 minutos de duraci\xF3n.",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 86,
    categoria: "Historia Antigua",
    hito: "La fundaci\xF3n de Roma por R\xF3mulo seg\xFAn la tradici\xF3n",
    pista: "A\xF1o 753 a.C. Marcando el inicio m\xEDtico del que ser\xEDa uno de los mayores imperios del mundo cl\xE1sico.",
    imagen: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 87,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula Titanic de James Cameron",
    pista: "Diciembre de 1997. Se convierte en la primera pel\xEDcula en recaudar m\xE1s de mil millones de d\xF3lares.",
    imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 88,
    categoria: "Ciencia y Biolog\xEDa",
    hito: "Charles Darwin publica El origen de las especies",
    pista: "Noviembre de 1859 en Londres. Introduce formalmente la teor\xEDa de la evoluci\xF3n por selecci\xF3n natural.",
    imagen: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 89,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Street Fighter II en arcades",
    pista: "A\xF1o 1991 por Capcom. Establece los cimientos y combos del g\xE9nero de videojuegos de lucha moderno.",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 90,
    categoria: "Historia del Deporte",
    hito: "Mark Spitz gana 7 medallas de oro en los JJ.OO. de M\xFAnich",
    pista: "Septiembre de 1972. El nadador establece un r\xE9cord mundial en cada una de sus pruebas.",
    imagen: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 91,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la serie animada Los Simpson",
    pista: "Diciembre de 1989 en FOX de manera independiente, tras aparecer como cortos en El Show de Tracey Ullman.",
    imagen: "https://images.unsplash.com/photo-1608889174637-3c44f6326f20?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 92,
    categoria: "Historia de la Computaci\xF3n",
    hito: "El lanzamiento del microprocesador Intel 4004",
    pista: "Noviembre de 1971. El primer microprocesador comercial en un solo chip de la historia.",
    imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 93,
    categoria: "Grandes Inventos",
    hito: "La patente de la ametralladora Gatling",
    pista: "A\xF1o 1862 durante la Guerra de Secesi\xF3n de EE.UU. El primer dise\xF1o exitoso de fuego r\xE1pido c\xEDclico.",
    imagen: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 94,
    categoria: "Historia del Deporte",
    hito: "Pel\xE9 debuta y gana su primer Mundial a los 17 a\xF1os",
    pista: "Junio de 1958 en Suecia. Convirti\xE9ndose en el campe\xF3n del mundo m\xE1s joven de la historia del torneo.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 95,
    categoria: "Historia de la M\xFAsica",
    hito: "El lanzamiento del \xE1lbum Nevermind de Nirvana",
    pista: "Septiembre de 1991. Populariza masivamente el movimiento grunge desplazando al pop de las listas.",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 96,
    categoria: "Historia de la Exploraci\xF3n",
    hito: "La expedici\xF3n de Magallanes-Elcano completa la primera vuelta al mundo",
    pista: "Septiembre de 1522. La nao Victoria arriba a Espa\xF1a capitaneada por Juan Sebasti\xE1n Elcano.",
    imagen: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 97,
    categoria: "Cultura Pop 90s",
    hito: "El estreno del anime Neon Genesis Evangelion",
    pista: "Octubre de 1995 en Jap\xF3n. Hideaki Anno revoluciona y deconstruye el g\xE9nero de los robots gigantes.",
    imagen: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 98,
    categoria: "Ciencia y F\xEDsica",
    hito: "Wilhelm R\xF6ntgen descubre los Rayos X de forma accidental",
    pista: "Noviembre de 1895 en Alemania. Realiza la famosa primera radiograf\xEDa con la mano de su esposa.",
    imagen: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 99,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego The Legend of Zelda en la NES",
    pista: "Febrero de 1986 en Jap\xF3n. El primer juego de consola casera en incluir una bater\xEDa interna para guardar partidas.",
    imagen: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 100,
    categoria: "Historia Moderna",
    hito: "La disoluci\xF3n formal de la Uni\xF3n Sovi\xE9tica (URSS)",
    pista: "Diciembre de 1991. Mijail Gorbachov renuncia y la bandera roja es arriada definitivamente del Kremlin.",
    imagen: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 101,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Indiana Jones: Cazadores del Arca Perdida",
    pista: "Junio de 1981. Harrison Ford da vida al arque\xF3logo m\xE1s famoso del cine bajo la direcci\xF3n de Spielberg.",
    imagen: "https://images.unsplash.com/photo-15334447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 102,
    categoria: "Historia Geek",
    hito: "El lanzamiento de la consola Nintendo 64 en Jap\xF3n",
    pista: "Junio de 1996. Introduce el stick anal\xF3gico y revoluciona los mundos 3D gracias a Super Mario 64.",
    imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 103,
    categoria: "Grandes Inventos",
    hito: "Karl Benz patenta el primer autom\xF3vil con motor de combusti\xF3n",
    pista: "Enero de 1886 en Alemania. El 'Benz Patent-Motorwagen' da inicio formal a la era automotriz.",
    imagen: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 104,
    categoria: "Historia del Deporte",
    hito: "Roberto Clemente alcanza su hit n\xFAmero 3,000",
    pista: "Septiembre de 1972. El legendario puertorrique\xF1o logra la m\xEDtica cifra en su \xFAltimo turno al bate de temporada.",
    imagen: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 105,
    categoria: "Historia de la M\xFAsica",
    hito: "El lanzamiento de la canci\xF3n We Are the World",
    pista: "Marzo de 1985. Escrita por Michael Jackson y Lionel Richie para recaudar fondos contra la hambruna en \xC1frica.",
    imagen: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 106,
    categoria: "Historia Antigua",
    hito: "Alejandro Magno derrota a Dar\xEDo III en la Batalla de Gaugamela",
    pista: "A\xF1o 331 a.C. Provoca el colapso definitivo del Imperio Persa Aquem\xE9nida.",
    imagen: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 107,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula El Rey Le\xF3n",
    pista: "Junio de 1994. Se convierte en la pel\xEDcula de animaci\xF3n tradicional m\xE1s taquillera de la historia de Disney.",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 108,
    categoria: "Ciencia y Medicina",
    hito: "Edward Jenner desarrolla la primera vacuna de la historia",
    pista: "A\xF1o 1796 en Inglaterra. Utiliza la viruela de las vacas para inmunizar a humanos contra la enfermedad.",
    imagen: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 109,
    categoria: "Historia Geek",
    hito: "El lanzamiento de Microsoft Windows 3.1",
    pista: "Abril de 1992. Introduce las fuentes TrueType y el buscaminas, vendiendo millones de copias r\xE1pidamente.",
    imagen: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 110,
    categoria: "Historia del Deporte",
    hito: "Florence Griffith Joyner rompe el r\xE9cord mundial de los 100m",
    pista: "Julio de 1988 en las pruebas ol\xEDmpicas de EE.UU., registrando un tiempo inalcanzable de 10.49 segundos.",
    imagen: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 111,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Cazafantasmas",
    pista: "Junio de 1984. \xC9xito masivo de comedia de ciencia ficci\xF3n liderado por Bill Murray y Dan Aykroyd.",
    imagen: "https://images.unsplash.com/photo-1608889174637-3c44f6326f20?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 112,
    categoria: "Historia Geek",
    hito: "El lanzamiento de la consola Super Nintendo (SNES) en Jap\xF3n",
    pista: "Noviembre de 1990 bajo el nombre de Super Famicom, agot\xE1ndose las 300,000 unidades en pocas horas.",
    imagen: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 113,
    categoria: "Grandes Inventos",
    hito: "La patente del fon\xF3grafo por Thomas Edison",
    pista: "Febrero de 1878. El primer dispositivo capaz de grabar y reproducir sonido mec\xE1nico real.",
    imagen: "https://images.unsplash.com/photo-1546114227-cd6b31e11400?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 114,
    categoria: "Historia de la Literatura",
    hito: "George Orwell publica la novela transgresora 1984",
    pista: "Junio de 1949 en Londres. Acu\xF1a los conceptos del 'Gran Hermano' y la vigilancia estatal absoluta.",
    imagen: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 115,
    categoria: "Historia de la M\xFAsica",
    hito: "Madonna lanza el pol\xE9mico sencillo y \xE1lbum Like a Virgin",
    pista: "Noviembre de 1984. Consolida a la artista como el mayor \xEDcono pop femenino global del siglo.",
    imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 116,
    categoria: "Historia Medieval",
    hito: "La ca\xEDda de Constantinopla ante el Imperio Otomano",
    pista: "Mayo de 1453. Las tropas de Mehmed II toman la ciudad, poniendo fin definitivo al Imperio Romano de Oriente.",
    imagen: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 117,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula Pulp Fiction de Quentin Tarantino",
    pista: "Mayo de 1994 en el Festival de Cannes. Redefine la narrativa cinematogr\xE1fica no lineal de los noventa.",
    imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 118,
    categoria: "Ciencia y Astronom\xEDa",
    hito: "Nicol\xE1s Cop\xE9rnico publica De revolutionibus orbium coelestium",
    pista: "A\xF1o 1543. Presenta formalmente el modelo helioc\xE9ntrico desplazando a la Tierra del centro del universo.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 119,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Mortal Kombat en Arcades",
    pista: "Octubre de 1992 por Midway. Sus gr\xE1ficos digitalizados y violencia extrema propiciaron la creaci\xF3n de la ESRB.",
    imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 120,
    categoria: "Historia del Deporte",
    hito: "Mike Tyson se convierte en el campe\xF3n mundial de peso pesado m\xE1s joven",
    pista: "Noviembre de 1986 a los 20 a\xF1os de edad, noqueando de forma implacable a Trevor Berbick en el segundo asalto.",
    imagen: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 121,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Scarface",
    pista: "Diciembre de 1983. Dirigida por Brian De Palma y protagonizada magistralmente por Al Pacino como Tony Montana.",
    imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 122,
    categoria: "Historia de la Computaci\xF3n",
    hito: "La fundaci\xF3n de Apple Computer por Jobs y Wozniak",
    pista: "Abril de 1976 en el garaje de los Jobs, lanzando a la venta el kit de computadora Apple I.",
    imagen: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 123,
    categoria: "Grandes Inventos",
    hito: "La invenci\xF3n de la fotograf\xEDa por Louis Daguerre",
    pista: "A\xF1o 1839 en Par\xEDs. Se presenta p\xFAblicamente el daguerrotipo como el primer proceso fotogr\xE1fico pr\xE1ctico.",
    imagen: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 124,
    categoria: "Historia del Deporte",
    hito: "Babe Ruth conecta su cuadrangular n\xFAmero 60 en una temporada",
    pista: "Septiembre de 1927 con los Yankees de Nueva York, estableciendo un r\xE9cord m\xEDtico que durar\xEDa 34 a\xF1os.",
    imagen: "https://images.unsplash.com/photo-1544045564-448f3223035b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 125,
    categoria: "Historia de la M\xFAsica",
    hito: "El lanzamiento del sencillo Video Killed the Radio Star de The Buggles",
    pista: "Septiembre de 1979. Augura prof\xE9ticamente el cambio de era hacia el consumo visual musical.",
    imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 126,
    categoria: "Historia Antigua",
    hito: "La Batalla de las Term\xF3pilas",
    pista: "A\xF1o 480 a.C. Tespios y espartanos liderados por Le\xF3nidas retrasan el avance del ej\xE9rcito persa de Jerjes.",
    imagen: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 127,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula Forrest Gump",
    pista: "Julio de 1994. Tom Hanks protagoniza un recorrido \xFAnico a trav\xE9s de los eventos clave de la historia de EE.UU.",
    imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 128,
    categoria: "Ciencia y F\xEDsica",
    hito: "Marie Curie descubre los elementos Radio y Polonio",
    pista: "Diciembre de 1898 en Par\xEDs junto a su esposo Pierre, acu\xF1ando el t\xE9rmino 'radiactividad'.",
    imagen: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 129,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Chrono Trigger de Square",
    pista: "Marzo de 1995 en la SNES. Una obra maestra de los viajes en el tiempo creada por el 'Dream Team' del JRPG.",
    imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 130,
    categoria: "Historia del Deporte",
    hito: "Larry Bird y Magic Johnson se enfrentan en las Finales de la NBA",
    pista: "Mayo de 1984. El primer choque directo en finales entre los Celtics y los Lakers de esa hist\xF3rica rivalidad de los 80.",
    imagen: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 131,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Blade Runner",
    pista: "Junio de 1982. Ridley Scott crea la est\xE9tica ciberpunk definitiva basada en la novela de Philip K. Dick.",
    imagen: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 132,
    categoria: "Historia de la Computaci\xF3n",
    hito: "La fundaci\xF3n de Microsoft por Gates y Allen",
    pista: "Abril de 1975 en Albuquerque, inicialmente para desarrollar un int\xE9rprete de BASIC para la Altair 8800.",
    imagen: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 133,
    categoria: "Grandes Inventos",
    hito: "James Watt patenta la m\xE1quina de vapor moderna con condensador separado",
    pista: "A\xF1o 1769 en Escocia. Se convierte en la fuerza motriz principal de la Primera Revoluci\xF3n Industrial.",
    imagen: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 134,
    categoria: "Historia del Deporte",
    hito: "Uruguay gana el primer Mundial de F\xFAtbol de la historia",
    pista: "Julio de 1930. Derrota 4-2 a Argentina en el Estadio Centenario de Montevideo.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 135,
    categoria: "Historia de la M\xFAsica",
    hito: "El lanzamiento del \xE1lbum Abbey Road de The Beatles",
    pista: "Septiembre de 1969. Destaca por su m\xEDtica foto de portada cruzando el paso de peatones londinense.",
    imagen: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 136,
    categoria: "Historia Contempor\xE1nea",
    hito: "La Batalla de Waterloo",
    pista: "Junio de 1815. Napole\xF3n Bonaparte es derrotado definitivamente por la S\xE9ptima Coalici\xF3n exili\xE1ndolo a Santa Elena.",
    imagen: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 137,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula El show de Truman",
    pista: "Junio de 1998. Jim Carrey anticipa de forma brillante la obsesi\xF3n global por la telerrealidad del nuevo milenio.",
    imagen: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 138,
    categoria: "Ciencia y Medicina",
    hito: "Watson y Crick presentan la estructura de doble h\xE9lice del ADN",
    pista: "Abril de 1953 en la revista Nature, utilizando la difracci\xF3n de rayos X clave de Rosalind Franklin.",
    imagen: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 139,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Resident Evil en PlayStation",
    pista: "Marzo de 1996 por Capcom. Shinji Mikami define de forma oficial las pautas del g\xE9nero Survival Horror.",
    imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 140,
    categoria: "Historia del Deporte",
    hito: "Steffi Graf logra el 'Golden Slam' en el Tenis",
    pista: "A\xF1o 1988. Gana los cuatro Grand Slams de la temporada y la medalla de oro ol\xEDmpica en Se\xFAl de manera consecutiva.",
    imagen: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 141,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula El resplandor",
    pista: "Mayo de 1980. Stanley Kubrick adapta de forma libre y magistral la novela de terror de Stephen King.",
    imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 142,
    categoria: "Historia Geek",
    hito: "La creaci\xF3n de la primera red de computadoras ARPANET",
    pista: "Octubre de 1969. Se env\xEDa el primer mensaje de nodo a nodo ('LO') entre la UCLA y Stanford.",
    imagen: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 143,
    categoria: "Grandes Inventos",
    hito: "La patente del rev\xF3lver por Samuel Colt",
    pista: "Febrero de 1836. Introduce el cilindro giratorio mec\xE1nico revolucionando el dise\xF1o de las armas de fuego.",
    imagen: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 144,
    categoria: "Historia del Deporte",
    hito: "Jesse Owens gana 4 medallas de oro en los JJ.OO. de Berl\xEDn",
    pista: "Agosto de 1936. El atleta afroamericano pulveriza en la pista las teor\xEDas de superioridad del r\xE9gimen nazi.",
    imagen: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 145,
    categoria: "Historia de la M\xFAsica",
    hito: "Bruce Springsteen lanza el \xE1lbum Born in the U.S.A.",
    pista: "Junio de 1984. Se convierte en uno de los discos de rock de estadio m\xE1s exitosos e incomprendidos pol\xEDticamente.",
    imagen: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 146,
    categoria: "Historia Antigua",
    hito: "La destrucci\xF3n de Pompeya por la erupci\xF3n del Vesubio",
    pista: "Agosto del a\xF1o 79 d.C. La ciudad romana queda sepultada bajo una espesa capa de ceniza y piedra p\xF3mez.",
    imagen: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 147,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula El silencio de los inocentes",
    pista: "Febrero de 1991. Anthony Hopkins inmortaliza a Hannibal Lecter barriendo con los 5 grandes premios Oscar.",
    imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 148,
    categoria: "Ciencia y Espacio",
    hito: "La sonda Voyager 1 toma la famosa fotograf\xEDa 'Un punto azul p\xE1lido'",
    pista: "Febrero de 1990 desde una distancia r\xE9cord, inspirando la c\xE9lebre reflexi\xF3n c\xF3smica de Carl Sagan.",
    imagen: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 149,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Super Mario 64 en Jap\xF3n",
    pista: "Junio de 1996. Establece las reglas definitivas del movimiento tridimensional libre de c\xE1maras en los juegos.",
    imagen: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 150,
    categoria: "Historia Moderna",
    hito: "La tr\xE1gica muerte de la Princesa Diana de Gales",
    pista: "Agosto de 1997. Fallece en un accidente automovil\xEDstico en el t\xFAnel del Alma en Par\xEDs mientras hu\xEDa de fot\xF3grafos.",
    imagen: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 151,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Aliens: El regreso",
    pista: "Julio de 1986. James Cameron cambia el tono de la franquicia hacia la acci\xF3n militar de ciencia ficci\xF3n con \xE9xito.",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 152,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Tomb Raider",
    pista: "Octubre de 1994. Core Design y Eidos presentan al mundo a Lara Croft convirti\xE9ndose en icono cultural inmediato.",
    imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 153,
    categoria: "Grandes Inventos",
    hito: "La invenci\xF3n del Concierto de Alambre por Valdemar Poulsen",
    pista: "A\xF1o 1898. El primer dispositivo capaz de realizar grabaci\xF3n magn\xE9tica de audio de la historia.",
    imagen: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 154,
    categoria: "Historia del Deporte",
    hito: "Niki Lauda sufre su grave accidente en N\xFCrburgring",
    pista: "Agosto de 1976. Su Ferrari se incendia en la pista, regresando milagrosamente a competir seis semanas despu\xE9s.",
    imagen: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 155,
    categoria: "Historia de la M\xFAsica",
    hito: "Guns N' Roses lanza su \xE1lbum debut Appetite for Destruction",
    pista: "Julio de 1987. Trae de vuelta el rock sucio y crudo a las listas comerciales dominadas por el glam metal.",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 156,
    categoria: "Historia Antigua",
    hito: "La coronaci\xF3n de Alejandro Magno como rey de Macedonia",
    pista: "A\xF1o 336 a.C. Tras el asesinato de su padre Filipo II, asume el mando para forjar un imperio colosal.",
    imagen: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 157,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula de Jim Carrey Ace Ventura",
    pista: "Febrero de 1994. Dispara la carrera actoral de Carrey y marca la comedia absurda e irreverente de la d\xE9cada.",
    imagen: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 158,
    categoria: "Ciencia y Astronom\xEDa",
    hito: "William Herschel descubre el planeta Urano",
    pista: "Marzo de 1781. El primer planeta descubierto mediante el uso de un telescopio en la era moderna.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 159,
    categoria: "Historia Geek",
    hito: "El lanzamiento de Diablo por Blizzard North",
    pista: "Diciembre de 1996. Redefine por completo el g\xE9nero Action RPG para PC introduciendo el multijugador por Battle.net.",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 160,
    categoria: "Historia del Deporte",
    hito: "Bj\xF6rn Borg gana su quinto t\xEDtulo consecutivo de Wimbledon",
    pista: "Julio de 1980. Vence en una final \xE9pica a cinco sets contra su gran rival estadounidense John McEnroe.",
    imagen: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 161,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Depredador",
    pista: "Junio de 1987. Arnold Schwarzenegger se enfrenta a un cazador alien\xEDgena en plena selva centroamericana.",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 162,
    categoria: "Historia de la Computaci\xF3n",
    hito: "El lanzamiento de la computadora Commodore 64",
    pista: "Agosto de 1982. Se convierte en el modelo de computadora personal \xFAnica m\xE1s vendido de toda la historia.",
    imagen: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 163,
    categoria: "Grandes Inventos",
    hito: "Charles Goodyear patenta el proceso de Vulcanizaci\xF3n del caucho",
    pista: "Junio de 1844 en EE.UU. Logra que el caucho sea resistente al calor y al fr\xEDo de forma accidental.",
    imagen: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 164,
    categoria: "Historia del Deporte",
    hito: "Bojan Krki\u0107 se convierte en el goleador m\xE1s joven del Barcelona en liga",
    pista: "Octubre de 2007 superando el r\xE9cord previo de Lionel Messi tras una asistencia del propio argentino.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 165,
    categoria: "Historia de la M\xFAsica",
    hito: "Bob Marley lanza el \xE1lbum recopilatorio Legend",
    pista: "Mayo de 1984. Se convierte en el \xE1lbum de m\xFAsica reggae m\xE1s vendido de la historia a nivel mundial.",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 166,
    categoria: "Historia Antigua",
    hito: "El c\xF3digo de Hammurabi es tallado en una estela de basalto",
    pista: "Hacia 1750 a.C. en Babilonia. Uno de los conjuntos de leyes escritas m\xE1s antiguos fundados bajo la ley del tali\xF3n.",
    imagen: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 167,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula El club de la pelea de David Fincher",
    pista: "Octubre de 1999. Protagonizada por Brad Pitt y Edward Norton, analiza la alienaci\xF3n de fin de siglo.",
    imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 168,
    categoria: "Ciencia y Medicina",
    hito: "Robert Koch anuncia el descubrimiento del bacilo de la Tuberculosis",
    pista: "Marzo de 1882 en Berl\xEDn, lo que le valdr\xEDa el Premio Nobel de Medicina a\xF1os m\xE1s tarde.",
    imagen: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 169,
    categoria: "Historia Geek",
    hito: "El lanzamiento de StarCraft por Blizzard Entertainment",
    pista: "Marzo de 1998. Revoluciona la estrategia en tiempo real y se convierte en pionero de los Esports en Corea.",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 170,
    categoria: "Historia del Deporte",
    hito: "Monica Seles es apu\xF1alada en la cancha durante un partido",
    pista: "Abril de 1993 en Hamburgo. Un fan\xE1tico de su rival Steffi Graf la ataca por la espalda cambiando el tenis femenino.",
    imagen: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 171,
    categoria: "Cultura Pop 80s",
    hito: "El ascenso de Tony Montana en la pel\xEDcula Scarface",
    pista: "Cl\xE1sico cinematogr\xE1fico de 1983 que inmortaliz\xF3 la cultura del cine criminal en Miami.",
    imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 172,
    categoria: "Historia Geek",
    hito: "El lanzamiento de la consola Game Gear de SEGA",
    pista: "Octubre de 1990 en Jap\xF3n. Pantalla a color y retroiluminada para competir ferozmente contra Game Boy.",
    imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 173,
    categoria: "Grandes Inventos",
    hito: "John Logie Baird realiza la primera demostraci\xF3n de televisi\xF3n en directo",
    pista: "Enero de 1926 en Londres ante miembros de la Royal Institution con im\xE1genes en movimiento mec\xE1nicas.",
    imagen: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 174,
    categoria: "Historia del Deporte",
    hito: "Carl Lewis gana cuatro medallas de oro en los JJ.OO. de Los \xC1ngeles",
    pista: "Agosto de 1984. Iguala la m\xEDtica haza\xF1a de Jesse Owens de 1936 en velocidad y salto de longitud.",
    imagen: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 175,
    categoria: "Historia de la M\xFAsica",
    hito: "El lanzamiento del \xE1lbum Purple Rain de Prince",
    pista: "Junio de 1984 de forma simult\xE1nea con la pel\xEDcula hom\xF3nima, consagr\xE1ndolo como el genio de Minneapolis.",
    imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 176,
    categoria: "Historia Moderna",
    hito: "El colapso de la Bolsa de Nueva York en el 'Martes Negro'",
    pista: "Octubre de 1929. Marca el estallido definitivo de la Gran Depresi\xF3n econ\xF3mica mundial.",
    imagen: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 177,
    categoria: "Cultura Pop 90s",
    hito: "El estreno del juego Metal Gear Solid en PlayStation",
    pista: "Septiembre de 1998. Hideo Kojima revoluciona el cine interactivo y el g\xE9nero de espionaje t\xE1ctico.",
    imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 178,
    categoria: "Ciencia y Espacio",
    hito: "La estaci\xF3n espacial Mir es lanzada por la URSS",
    pista: "Febrero de 1986. La primera estaci\xF3n de investigaci\xF3n modular de larga duraci\xF3n habitada en el espacio.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 179,
    categoria: "Historia de la F\xEDsica",
    hito: "Max Planck presenta las bases de la F\xEDsica Cu\xE1ntica",
    pista: "Diciembre de 1900 en Berl\xEDn, postulando que la energ\xEDa se emite en paquetes discretos llamados cuantos.",
    imagen: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 180,
    categoria: "Historia del Deporte",
    hito: "Zinedine Zidane lidera a Francia para ganar su primer Mundial",
    pista: "Julio de 1998. Anota dos goles de cabeza en la gran final contra Brasil en el Stade de France.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 181,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Cuenta conmigo (Stand by Me)",
    pista: "Agosto de 1986. Dirigida por Rob Reiner bas\xE1ndose en un relato dram\xE1tico de Stephen King.",
    imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 182,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Half-Life por Valve",
    pista: "Noviembre de 1998. Redefine la narrativa inmersiva en los juegos de disparos sin cortar el control del jugador.",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 183,
    categoria: "Grandes Inventos",
    hito: "La patente del dinamo el\xE9ctrico por Werner von Siemens",
    pista: "A\xF1o 1867 en Alemania. Permite la generaci\xF3n masiva de electricidad para el desarrollo industrial urbano.",
    imagen: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 184,
    categoria: "Historia del Deporte",
    hito: "Uruguay conquista la medalla de oro en f\xFAtbol en Par\xEDs",
    pista: "Junio de 1924 deslumbrando al p\xFAblico europeo, siendo el preludio de su dominio en los mundiales.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 185,
    categoria: "Historia de la M\xFAsica",
    hito: "The Clash lanza el influyente \xE1lbum doble London Calling",
    pista: "Diciembre de 1979 en el Reino Unido, expandiendo los horizontes del punk rock hacia el reggae y el ska.",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 186,
    categoria: "Historia Antigua",
    hito: "El fin del calendario de la cuenta larga Maya",
    pista: "Diciembre de 2012. Desata malinterpretaciones y teor\xEDas apocal\xEDpticas globales en la cultura pop.",
    imagen: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 187,
    categoria: "Cultura Pop 90s",
    hito: "La transmisi\xF3n hist\xF3rica de El show de Truman",
    pista: "Obra cinematogr\xE1fica emblem\xE1tica sobre el libre albedr\xEDo y los medios de comunicaci\xF3n.",
    imagen: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 188,
    categoria: "Ciencia y Espacio",
    hito: "La tripulaci\xF3n del Apolo 8 toma la ic\xF3nica foto 'Earthrise'",
    pista: "Diciembre de 1968. La primera imagen a color de la Tierra flotando sobre el horizonte gris de la Luna.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 189,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Castlevania: Symphony of the Night",
    pista: "Marzo de 1997 en PlayStation. Koji Igarashi consolida y acu\xF1a la mitad del g\xE9nero 'Metroidvania'.",
    imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 190,
    categoria: "Historia del Deporte",
    hito: "Pete Sampras rompe el r\xE9cord de Grand Slams ganados en Wimbledon",
    pista: "Julio de 2000. Consigue su t\xEDtulo de Grand Slam n\xFAmero 14 derrotando en la final a Patrick Rafter.",
    imagen: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 191,
    categoria: "Cultura Pop 80s",
    hito: "El estreno de la pel\xEDcula Los Goonies",
    pista: "Junio de 1985. Aventura juvenil ic\xF3nica producida por Steven Spielberg y dirigida por Richard Donner.",
    imagen: "https://images.unsplash.com/photo-15334447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 192,
    categoria: "Historia de la Computaci\xF3n",
    hito: "El lanzamiento de la supercomputadora Cray-1",
    pista: "A\xF1o 1976. Revoluciona el procesamiento vectorial instal\xE1ndose el primer sistema en Los \xC1lamos.",
    imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 193,
    categoria: "Grandes Inventos",
    hito: "La invenci\xF3n de la desmotadora de algod\xF3n por Eli Whitney",
    pista: "Patentada en 1794, transformando por completo la econom\xEDa agraria y la historia industrial textil.",
    imagen: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 194,
    categoria: "Historia del Deporte",
    hito: "El regreso de Michael Jordan a las canchas con un fax",
    pista: "Marzo de 1995. Su m\xEDtica declaraci\xF3n oficial de apenas dos palabras: 'I'm back'",
    imagen: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 195,
    categoria: "Historia de la M\xFAsica",
    hito: "U2 lanza el \xE1lbum comercial aclamado The Joshua Tree",
    pista: "Marzo de 1987. El disco que catapulta definitivamente a la banda irlandesa al estatus de superestrellas masivas.",
    imagen: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 196,
    categoria: "Historia Antigua",
    hito: "La coronaci\xF3n de Tutankam\xF3n como fara\xF3n",
    pista: "Hacia 1332 a.C. en el Antiguo Egipto, ascendiendo al trono a la edad de nueve a\xF1os.",
    imagen: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 197,
    categoria: "Cultura Pop 90s",
    hito: "El estreno de la pel\xEDcula El quinto elemento",
    pista: "Mayo de 1997. Luc Besson presenta una colorida e impactante visi\xF3n oper\xEDstica del futuro de ciencia ficci\xF3n.",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 198,
    categoria: "Ciencia y Espacio",
    hito: "El lanzamiento de la sonda Cassini-Huygens hacia Saturno",
    pista: "Octubre de 1997. Misi\xF3n conjunta para estudiar a fondo el planeta de los anillos y sus lunas.",
    imagen: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 199,
    categoria: "Historia Geek",
    hito: "El lanzamiento del juego Age of Empires por Ensemble Studios",
    pista: "Octubre de 1997. Define las bases de la estrategia hist\xF3rica en tiempo real en sistemas de PC.",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 200,
    categoria: "Cultura Pop 90s",
    hito: "El estreno mundial de la pel\xEDcula Matrix (Cierre de Era)",
    pista: "Marzo de 1999. Cierra el milenio con una profunda met\xE1fora ciberpunk filos\xF3fica y efectos visuales eternos.",
    imagen: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  }
];
function getRandomHito(categoryFilter) {
  let pool = HITOS_DATASET;
  if (categoryFilter && categoryFilter !== "Todas las Eras") {
    const filtered = HITOS_DATASET.filter((item) => item.categoria === categoryFilter);
    if (filtered.length > 0) pool = filtered;
  }
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

// server.ts
var app = (0, import_express.default)();
var PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3e3;
app.use(import_express.default.json());
var rooms = /* @__PURE__ */ new Map();
var roomSseClients = /* @__PURE__ */ new Map();
function broadcastRoomUpdate(roomCode) {
  const room = rooms.get(roomCode);
  if (!room) return;
  const clients = roomSseClients.get(roomCode);
  if (clients) {
    const data = `data: ${JSON.stringify(room)}

`;
    clients.forEach((res) => {
      try {
        res.write(data);
      } catch (err) {
      }
    });
  }
}
function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  if (rooms.has(code)) return generateRoomCode();
  return code;
}
app.post("/api/rooms/create", (req, res) => {
  const { playerName, avatarColor, avatarIconIndex, settings } = req.body;
  const roomCode = generateRoomCode();
  const hostId = "p_" + Math.random().toString(36).substring(2, 9);
  const hostPlayer = {
    id: hostId,
    name: playerName || "Host Viajero",
    avatarColor: avatarColor || "#00F0FF",
    avatarIconIndex: avatarIconIndex || 0,
    isHost: true,
    score: 0
  };
  const defaultSettings = {
    infiltratorCount: settings?.infiltratorCount || 1,
    timerSeconds: settings?.timerSeconds || 120,
    categoryFilter: settings?.categoryFilter || "Todas las Eras",
    fakeClueForInfiltrator: settings?.fakeClueForInfiltrator || false
  };
  const room = {
    roomCode,
    hostId,
    mode: "online",
    phase: "lobby",
    players: [hostPlayer],
    currentHito: null,
    settings: defaultSettings,
    timerRemaining: defaultSettings.timerSeconds,
    timerActive: false,
    currentTurnPlayerId: null,
    exiledPlayerId: null,
    exiledPlayerWasInfiltrator: null,
    infiltratorGuessedCorrectly: null,
    winnerTeam: null,
    activePlayerIndexForReveal: 0,
    updatedAt: Date.now()
  };
  rooms.set(roomCode, room);
  res.json({ success: true, room, playerId: hostId });
});
app.post("/api/rooms/join", (req, res) => {
  const { roomCode, playerName, avatarColor, avatarIconIndex } = req.body;
  const code = (roomCode || "").toUpperCase().trim();
  const room = rooms.get(code);
  if (!room) {
    return res.status(404).json({ success: false, message: "C\xF3digo de Misi\xF3n no encontrado" });
  }
  if (room.phase !== "lobby" && room.phase !== "home") {
    return res.status(400).json({ success: false, message: "La Misi\xF3n ya ha comenzado" });
  }
  const playerId = "p_" + Math.random().toString(36).substring(2, 9);
  const newPlayer = {
    id: playerId,
    name: playerName || `Agente ${room.players.length + 1}`,
    avatarColor: avatarColor || "#00F0FF",
    avatarIconIndex: avatarIconIndex || 0,
    isHost: false,
    score: 0
  };
  room.players.push(newPlayer);
  room.updatedAt = Date.now();
  broadcastRoomUpdate(code);
  res.json({ success: true, room, playerId });
});
app.get("/api/rooms/:code", (req, res) => {
  const code = req.params.code.toUpperCase();
  const room = rooms.get(code);
  if (!room) {
    return res.status(404).json({ success: false, message: "Misi\xF3n no encontrada" });
  }
  res.json({ success: true, room });
});
app.get("/api/rooms/:code/stream", (req, res) => {
  const code = req.params.code.toUpperCase();
  const room = rooms.get(code);
  if (!room) {
    return res.status(404).json({ message: "Misi\xF3n no encontrada" });
  }
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  if (!roomSseClients.has(code)) {
    roomSseClients.set(code, /* @__PURE__ */ new Set());
  }
  roomSseClients.get(code).add(res);
  res.write(`data: ${JSON.stringify(room)}

`);
  req.on("close", () => {
    const clients = roomSseClients.get(code);
    if (clients) {
      clients.delete(res);
      if (clients.size === 0) {
        roomSseClients.delete(code);
      }
    }
  });
});
app.post("/api/rooms/:code/settings", (req, res) => {
  const code = req.params.code.toUpperCase();
  const { playerId, settings } = req.body;
  const room = rooms.get(code);
  if (!room || room.hostId !== playerId) {
    return res.status(403).json({ success: false, message: "No autorizado" });
  }
  room.settings = { ...room.settings, ...settings };
  room.timerRemaining = room.settings.timerSeconds;
  room.updatedAt = Date.now();
  broadcastRoomUpdate(code);
  res.json({ success: true, room });
});
app.post("/api/rooms/:code/start", (req, res) => {
  const code = req.params.code.toUpperCase();
  const { playerId } = req.body;
  const room = rooms.get(code);
  if (!room || room.hostId !== playerId) {
    return res.status(403).json({ success: false, message: "No autorizado" });
  }
  if (room.players.length < 3) {
    return res.status(400).json({ success: false, message: "Se requieren al menos 3 tripulantes para iniciar" });
  }
  const hito = getRandomHito(room.settings.categoryFilter);
  room.currentHito = hito;
  let infiltratorCount = Math.min(room.settings.infiltratorCount, Math.floor(room.players.length / 2));
  if (infiltratorCount < 1) infiltratorCount = 1;
  const playerIndexes = room.players.map((_, idx) => idx);
  for (let i = playerIndexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playerIndexes[i], playerIndexes[j]] = [playerIndexes[j], playerIndexes[i]];
  }
  const infiltratorIndexes = new Set(playerIndexes.slice(0, infiltratorCount));
  room.players.forEach((p, idx) => {
    p.role = infiltratorIndexes.has(idx) ? "INFILTRADO" : "VIAJERO";
    p.isExiled = false;
    p.hasVoted = false;
    p.votedForId = null;
    p.revealedRole = false;
  });
  room.phase = "role_reveal";
  room.timerRemaining = room.settings.timerSeconds;
  room.timerActive = false;
  room.exiledPlayerId = null;
  room.exiledPlayerWasInfiltrator = null;
  room.infiltratorGuessedCorrectly = null;
  room.winnerTeam = null;
  room.activePlayerIndexForReveal = 0;
  room.updatedAt = Date.now();
  broadcastRoomUpdate(code);
  res.json({ success: true, room });
});
app.post("/api/rooms/:code/start-discussion", (req, res) => {
  const code = req.params.code.toUpperCase();
  const { playerId } = req.body;
  const room = rooms.get(code);
  if (!room) return res.status(404).json({ success: false });
  room.phase = "discussion";
  room.timerRemaining = room.settings.timerSeconds;
  room.timerActive = room.settings.timerSeconds > 0;
  const activePlayers = room.players.filter((p) => !p.isExiled);
  const firstPlayer = activePlayers[Math.floor(Math.random() * activePlayers.length)];
  room.currentTurnPlayerId = firstPlayer ? firstPlayer.id : null;
  room.updatedAt = Date.now();
  broadcastRoomUpdate(code);
  res.json({ success: true, room });
});
app.post("/api/rooms/:code/trigger-vote", (req, res) => {
  const code = req.params.code.toUpperCase();
  const room = rooms.get(code);
  if (!room) return res.status(404).json({ success: false });
  room.phase = "voting";
  room.timerActive = false;
  room.players.forEach((p) => {
    p.hasVoted = false;
    p.votedForId = null;
  });
  room.updatedAt = Date.now();
  broadcastRoomUpdate(code);
  res.json({ success: true, room });
});
app.post("/api/rooms/:code/vote", (req, res) => {
  const code = req.params.code.toUpperCase();
  const { playerId, targetPlayerId } = req.body;
  const room = rooms.get(code);
  if (!room || room.phase !== "voting") return res.status(400).json({ success: false });
  const voter = room.players.find((p) => p.id === playerId);
  if (voter) {
    voter.hasVoted = true;
    voter.votedForId = targetPlayerId;
  }
  const activePlayers = room.players.filter((p) => !p.isExiled);
  const allVoted = activePlayers.every((p) => p.hasVoted);
  if (allVoted) {
    resolveVotingProcess(room);
  }
  room.updatedAt = Date.now();
  broadcastRoomUpdate(code);
  res.json({ success: true, room });
});
function resolveVotingProcess(room) {
  const voteCounts = {};
  room.players.filter((p) => !p.isExiled).forEach((p) => {
    if (p.votedForId) {
      voteCounts[p.votedForId] = (voteCounts[p.votedForId] || 0) + 1;
    }
  });
  let maxVotes = 0;
  let exiledId = null;
  let isTie = false;
  Object.entries(voteCounts).forEach(([targetId, count]) => {
    if (count > maxVotes) {
      maxVotes = count;
      exiledId = targetId;
      isTie = false;
    } else if (count === maxVotes) {
      isTie = true;
    }
  });
  if (isTie || !exiledId) {
    room.exiledPlayerId = null;
    room.exiledPlayerWasInfiltrator = null;
  } else {
    room.exiledPlayerId = exiledId;
    const exiledPlayer = room.players.find((p) => p.id === exiledId);
    if (exiledPlayer) {
      exiledPlayer.isExiled = true;
      room.exiledPlayerWasInfiltrator = exiledPlayer.role === "INFILTRADO";
    }
  }
  if (room.exiledPlayerWasInfiltrator) {
    room.phase = "infiltrator_guess";
  } else {
    const remainingInfiltrators = room.players.filter((p) => !p.isExiled && p.role === "INFILTRADO");
    const remainingViajeros = room.players.filter((p) => !p.isExiled && p.role === "VIAJERO");
    if (remainingInfiltrators.length === 0) {
      room.winnerTeam = "VIAJEROS";
      room.phase = "game_over";
    } else if (remainingInfiltrators.length >= remainingViajeros.length) {
      room.winnerTeam = "INFILTRADOS";
      room.phase = "game_over";
    } else {
      room.phase = "ejection";
    }
  }
}
app.post("/api/rooms/:code/infiltrator-guess", (req, res) => {
  const code = req.params.code.toUpperCase();
  const { guessedHitoId } = req.body;
  const room = rooms.get(code);
  if (!room || !room.currentHito) return res.status(400).json({ success: false });
  const correct = guessedHitoId === room.currentHito.id;
  room.infiltratorGuessedCorrectly = correct;
  if (correct) {
    room.winnerTeam = "INFILTRADOS";
    room.players.filter((p) => p.role === "INFILTRADO").forEach((p) => p.score += 3);
  } else {
    room.winnerTeam = "VIAJEROS";
    room.players.filter((p) => p.role === "VIAJERO").forEach((p) => p.score += 2);
  }
  room.phase = "game_over";
  room.updatedAt = Date.now();
  broadcastRoomUpdate(code);
  res.json({ success: true, room });
});
app.post("/api/rooms/:code/next-round", (req, res) => {
  const code = req.params.code.toUpperCase();
  const { playerId } = req.body;
  const room = rooms.get(code);
  if (!room || room.hostId !== playerId) {
    return res.status(403).json({ success: false, message: "No autorizado" });
  }
  room.phase = "lobby";
  room.currentHito = null;
  room.exiledPlayerId = null;
  room.exiledPlayerWasInfiltrator = null;
  room.infiltratorGuessedCorrectly = null;
  room.winnerTeam = null;
  room.players.forEach((p) => {
    p.role = void 0;
    p.isExiled = false;
    p.hasVoted = false;
    p.votedForId = null;
    p.revealedRole = false;
  });
  room.updatedAt = Date.now();
  broadcastRoomUpdate(code);
  res.json({ success: true, room });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[INFILTRADO v2] Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
