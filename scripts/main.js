import { dataSeries} from './dataSeries.js';
var seriesTbody = document.getElementById('Series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
renderSeriesInTable(dataSeries);
averageSeasons(dataSeries);

function renderSeriesInTable(series) {
    console.log('Desplegando series');
    let contador = 1;
    series.forEach(function (Serie) {
        console.log(contador);
        var trElement = document.createElement("tr");
        trElement.innerHTML = '<td>'.concat(Serie.id, '</td>\n<td class="enlace" id="celda'+contador+'">').concat(Serie.name, "</td>\n<td>").concat(Serie.channel, "</td>\n<td>").concat(Serie.seasons, "</td>\n                           <td>");
        seriesTbody.appendChild(trElement);
        contador++;
    });
}

const celda1 = document.getElementById("celda1");
const celda2 = document.getElementById("celda2");
const celda3 = document.getElementById("celda3");
const celda4 = document.getElementById("celda4");
const celda5 = document.getElementById("celda5");
const celda6 = document.getElementById("celda6");

celda1.onclick = function() {
    console.log("Se hizo clic en el nombre de la serie 1");
    var card = document.querySelector(".card"+1);
    card.classList.toggle("d-none");
  }
  celda2.onclick = function() {
    console.log("Se hizo clic en el nombre de la serie 2");
    var card = document.querySelector(".card"+2);
    card.classList.toggle("d-none");
  }
  celda3.onclick = function() {
    console.log("Se hizo clic en el nombre de la serie 3");
    var card = document.querySelector(".card"+3);
    card.classList.toggle("d-none");
  }
  celda4.onclick = function() {
    console.log("Se hizo clic en el nombre de la serie 4");
    var card = document.querySelector(".card"+4);
    card.classList.toggle("d-none");
  }
  celda5.onclick = function() {
    console.log("Se hizo clic en el nombre de la serie 5");
    var card = document.querySelector(".card"+5);
    card.classList.toggle("d-none");
  }
  celda6.onclick = function() {
    console.log("Se hizo clic en el nombre de la serie 6");
    var card = document.querySelector(".card"+6);
    card.classList.toggle("d-none");
  }

function averageSeasons(series){
    console.log('Calculando Promedio')
    let totalTemporadas = 0;
    for (let i = 0; i < series.length; i++) {
        totalTemporadas += series[i].seasons;
      };
    const promedioTemporadas = totalTemporadas / series.length;

    const resultado = document.getElementById('promedio-temporadas');
    resultado.textContent = `El promedio de temporadas es ${promedioTemporadas.toFixed(2)}.`;

}

function searchSerieByName(nameKey, series) {
    return nameKey === '' ? dataSeries : series.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function clearSeriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
