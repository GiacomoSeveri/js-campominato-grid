// # FASE PREPARATORIA ---------------------------------

// Recupero gli elementi in pagina
const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');

function play() {

  // # Funzioni interne al gioco
  const createCell = (number) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.append(number);

    return cell;
  }

  

  // Cambiamo il testo del bottone in "Ricomincia"
  playButton.innerText = 'Ricomincia';

  // Svuotiamo la griglia
  grid.innerHTML = '';

  

  // ! -------------------------------
  // ! SVOLGIMENTO EFFETTIVO
  // ! -------------------------------

  for (let j = 1; j <= 100; j++) {

    const cell = createCell(j);

    cell.addEventListener('click', function () {
      cell.classList.add('clicked');
      // console.log(i);
    })

  

    grid.appendChild(cell);
  }
}



}



playButton.addEventListener('click', play);





