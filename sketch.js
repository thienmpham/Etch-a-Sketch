

function onButtonPress() {
    // on Generate button press call function promptAmount()
    let button = document.querySelector('#generate');
    button.addEventListener('click', function () {
        promptAmount();

    })

}
onButtonPress();

function removeGrid() {

}

function promptAmount() {
    //prompt asking for how many squres per side for new grid
    //  ex. 64 is 64x64 grid 
    let response = Number(prompt('How many squares per side?'));

    // if response is a number greater than 0
    // and less than or equal to 100
    // then call apendSquare() function 
    if (response > 0 && response <= 100) {
        appendSquare(response)
        console.log('response is a number!')
    } else {
        console.log('Invalid response, Try again!')
        return;
    }


}

function appendSquare(response) {
    let container = document.querySelector('.container');

    //calculations 
    // total area is equal to input times input 
    let area = response * response;

    // side length of squareis equal to input divided by 100 
    let length = 100 / response;


    for (let i = 1; i <= area; i++) {
        // create div 
        let div = document.createElement('div');
        // set the className for each new div 
        div.setAttribute('class', 'square');
        // append square to container
        container.appendChild(div);



    }
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.style.width = `${length}px`;
        square.style.paddingBottom = `${length}px`;
    })


}
