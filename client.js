console.log('Javascript is ready');

$(readyNow);

function readyNow() {
    
    console.log('JQuery ready');

    $('#generate').on('click', generate)
    $(document).on('click', '.yellowBtn', turnYellow)
    $(document).on('click', '.deleteBtn', deleteDiv)
}

let clickCounter = 0;

function generate() {
    console.log('Generate button clicked.');
    clickCounter++;
    $('#boxSection').append(`<div class="red"> 
                            <p>${clickCounter}</p>
                            <button class="yellowBtn">Yellow</button>
                            <button class="deleteBtn">Delete</button>
                            </div>`);
}

function turnYellow() {
    console.log('Yellow button clicked.');
    let thisDiv = $(this).parent();
    $(thisDiv).toggleClass('red')
    $(thisDiv).toggleClass('yellow')

}

function deleteDiv() {
    console.log('Delete button clicked.');
    $(this).parent().remove();
}