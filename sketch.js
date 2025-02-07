

function onButtonPress() {
    // on Generate button press call function promptAmount()


}

function removeGrid() {

}

function promptAmount() {
    //prompt asking for how many squres per side for new grid
    //  ex. 64 is 64x64 grid 


    //add eventListener to wait for prompt response
    // and call the function appendSquare()
    // and call the function removeGrid(); 


}

function appendSquare() {
    let container = document.querySelector('.container');

    //calculations 
    // total area is equal to input times input 
    // side length is equal to input divided by 100 

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