function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3
//handle blue button click by setting function name------------------------------------

const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton);

//just set the name of the function... after when click button the function is called
blueButton.onclick = makeBlue;              //dont call function... other wish function auto run korbe
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// handle  button click by anonymous function --------------------------------------------

const greenBUtton = document.getElementById('make-green-button');
// console.log(greenBUtton);
//Anonymous Function in ---- নাম বিহিন function
greenBUtton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle by using add eventLisenter--------------------------------------------------------

const goldenButton = document.getElementById('make-golenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// add Event lisener -----------------------------------------------------------------------
const hotPinkButton = document.getElementById('make-hot-pink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//direct short cart--------------------------------------------------------------------------

document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})