// obtener el total de segundos de todos los videos del tipo 'Redux Video'
// pistas: convertirlo en objetos
// Vale por el primer parcial
// Fecha de entrega: Domingo 30 AGO 23:59
// Fecha de solucio: Miercoles 2 de SEP
// Modalidad de entrega. Pull Request.

const data = require('./data.js');

const obtenerduracion = data => data.match(/\d+:\d+/g);
const obtenerNombre = data => data.match(/(F|R)\w+ {1}\w+/g);

const duracionVideo = obtenerduracion(data);
const nombreVideo = obtenerNombre(data);

const crearObjeto = (duracionVideo, nombreVideo) => {
    let objetos = [];
    for (let i = 0; i < duracionVideo.length; i++) {
        let objeto = {
            duracion: duracionVideo[i],
            nombre: nombreVideo[i]
        }
        objetos.push(objeto);
    }
    return objetos;
}

const filtrarPorNombre = videos => videos.filter(objeto => objeto.nombre === ("Redux Video"));

const obtenerTotalSegundos = videos => {
    let minutos = 0;
    let segundos = 0;
    const segudosPorMinuto = 60;
    let total = 0;
     for (const video of videos) {
        const minutosYSegundos = video.duracion.split(":");
        total += parseInt(minutosYSegundos[0]) * segudosPorMinuto + parseInt(minutosYSegundos[1]);
    }
    return total;
}

const videos = crearObjeto(duracionVideo, nombreVideo);
const ReduxVideos = filtrarPorNombre(videos);
const totalSegundos = obtenerTotalSegundos(ReduxVideos);

console.log("El total de segundos por los videos del tipo 'Redux Video' es: ")
console.log(totalSegundos);