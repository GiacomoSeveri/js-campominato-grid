const targetElement = document.getElementById('target');
const btn = document.getElementById('button');

btn.addEventListener('click', function(){
    
    let i = 0;

    for (i = 1; i <= 100; i++) {
        targetElement.innerText += i;
    }

})
