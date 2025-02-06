// Append square divs inside the div container 16x16

function appendSquare() {


    let container = document.querySelector('.container');
    //for loop for 16x16 square 
    for (let i = 1; i <= 256; i++) {
        // create div 
        let div = document.createElement('div');
        // set the className for each new div 
        div.setAttribute('class', 'square');
        // append square to container
        container.appendChild(div);


    }
}
appendSquare();