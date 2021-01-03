
// log to confirm Javascript is sourced and working correctly.
console.log('Javascript is ready');

$(readyNow);

function readyNow() {
    // log to confirm jQuery is sourced and working correctly.
    console.log('JQuery ready');

    // click listeners to get the buttons ready for when they 
    //  are clicked, regardless of when they are created.
    $('#generate').on('click', generate)
    $(document).on('click', '.yellowBtn', turnYellow)
    $(document).on('click', '.deleteBtn', deleteDiv)
} // end of readyNow

// variable to keep track of how many times the generate button is clicked.
let clickCounter = 0;

// function that runs when the "Generate" button is clicked to create new divs.
function generate() {
    console.log('Generate button clicked.');

    // update the click count.
    clickCounter++;

    // div that is created when "Generate" is clicked.
    $('#boxSection').append(`<div class="red"> 
                            <p>${clickCounter}</p>
                            <button class="yellowBtn">Yellow</button>
                            <button class="deleteBtn">Delete</button>
                            </div>`);
} // end of generate


function turnYellow() {
    console.log('Yellow button clicked.');
    // targets the div the button is located in and stores it in a variable.
    let thisDiv = $(this).parent();

    //  uses the div variable to toggle between the classes "red" and "yellow" 
    // to change the background to the corresponding color.
    $(thisDiv).removeClass('red')
    $(thisDiv).addClass('yellow')

} // end of turnYellow

function deleteDiv() {
    console.log('Delete button clicked.');
    // targets the div the button is located in and removes it.
    $(this).parent().remove();
} // end of deleteDiv