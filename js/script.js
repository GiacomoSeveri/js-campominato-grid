// # FASE PREPARATORIA ---------------------------------

// Recupero gli elementi in pagina
const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function(){
    // cambio il testo al bottone
    playButton.innerText = 'Ricomincia';

    // rimuovo la scritta
    grid.innerHTML = '';

    // ! SCOLGIMENTO
    for(let i = 1; i <= 100; i++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerText = (i);
      cell.addEventListener('click', function(){
        console.log(i);
        cell.classList.add('clicked');
      });
      grid.appendChild(cell);
    }  
});