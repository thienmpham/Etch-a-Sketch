

function onButtonPress() {
    // on Generate button press call function promptAmount()
    let generate = document.querySelector('#generate');
    generate.addEventListener('click', function () {
        removeGrid();
        promptAmount();
    })
    // on #clear button press call function removeColor()
    let clear = document.querySelector('#clear')
    clear.addEventListener('click', removeColor);

}
onButtonPress();


function onHover() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', function () {
            square.classList.add('color-change');
            square.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;

        })

    })

}


function getRandomColor() {
    return Math.floor(Math.random() * 256);
}



function removeColor() {
    if (document.querySelector('.color-change') !== null) {
        let colorChanges = document.querySelectorAll('.color-change');

        colorChanges.forEach((colorChange) => {
            colorChange.classList.remove('color-change');
        })
    } else {
        return;
    }
}

function removeGrid() {
    if (document.querySelector('.square') !== null) {
        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.remove();
        })
    }
    else {
        return;
    }
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
        square.style.width = `${length}%`;
        square.style.paddingBottom = `${length}%`;
    })

    onHover();


}
