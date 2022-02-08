function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3
//handle blue button click by setting function name

const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton);

//just set the name of the function... after when click button the function is called
blueButton.onclick = makeBlue;              //dont call function... other wish function auto run korbe
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}