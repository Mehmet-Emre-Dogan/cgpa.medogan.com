//Get the button
var mybutton = document.getElementById("btn-back-to-top");
var bottomButton = document.getElementById("btn-back-to-bottom");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }

    var distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY
    console.log(distanceFromBottom)
    if ( distanceFromBottom > 20) {
        bottomButton.style.display = "block";
    } else {
        bottomButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", topFunction);
bottomButton.addEventListener("click", bottomFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function bottomFunction() {
    document.body.scrollTop = document.body.scrollHeight;
}
