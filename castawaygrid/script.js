
function checkName() {
    const inputName = document.getElementById('nameInput').value;
    const resultText = PLAYERS.includes(inputName) ? 'Yes' : 'No';
    document.getElementById('result').textContent = resultText;
    };

/*
document.getElementById("nameInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkName();
        }
    });

*/
var selectedBox;
var searchInput = document.getElementById("searchInput");

var boxA1 = document.getElementById("boxA1");
var boxA2 = document.getElementById("boxA2");
var boxA3 = document.getElementById("boxA3");
var boxB1 = document.getElementById("boxB1");
var boxB2 = document.getElementById("boxB2");
var boxB3 = document.getElementById("boxB3");
var boxC1 = document.getElementById("boxC1");
var boxC2 = document.getElementById("boxC2");
var boxC3 = document.getElementById("boxC3");

boxA1.addEventListener("click", function() {
    handleBoxClick("A1");
});

boxA2.addEventListener("click", function() {
    handleBoxClick("A2");
});

boxA3.addEventListener("click", function() {
    handleBoxClick("A3");
});

boxB1.addEventListener("click", function() {
    handleBoxClick("B1");
});

boxB2.addEventListener("click", function() {
    handleBoxClick("B2");
});

boxB3.addEventListener("click", function() {
    handleBoxClick("B3");
});

boxC1.addEventListener("click", function() {
    handleBoxClick("C1");
});

boxC2.addEventListener("click", function() {
    handleBoxClick("C2");
});

boxC3.addEventListener("click", function() {
    handleBoxClick("C3");
});

function handleBoxClick(boxId) {
    selectedBox = boxId;
    searchInput.removeAttribute("disabled");
    const elements = [
        document.getElementById('column' + boxId[0]).textContent,
        " and ",
        document.getElementById('row' + boxId[1]).textContent
    ];
    document.getElementById('currentBox').textContent = elements.join('');
}

/*
boxA1.addEventListener("click", function() {
    selectedBox = "A1";
    searchInput.removeAttribute("disabled");
    const elements = [document.getElementById('columnA').textContent, " and ", document.getElementById('row1').textContent];
    document.getElementById('currentBox').textContent = elements.join('');
    //console.log(selectedBox);
});
*/