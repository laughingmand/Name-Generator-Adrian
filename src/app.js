import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ['su', 'mi', 'tu', 'el'];
  let noun = ['mapache', 'tlacuache', 'raton', 'novio'];
  let adj = ['mugroso', 'tuerto', 'fumado', 'tieso'];
  let ext = ['.com', '.mx', '.gob', '.net'];

  let listDom = '<ul>'; 

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < noun.length; j++) {
      for (let k = 0; k < adj.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          let genDomain = (pronoun[i] + noun[j] + adj[k] + ext[l]);
          listDom += `<li>${genDomain}</li>`;
        }
      }
    }
  }
  listDom += '</ul>';
  document.querySelector('#genDom').innerHTML = listDom;
};

