var searchInput = document.getElementById("castaway-input");
var autocompleteList = document.getElementById("castaway-autocomplete");
var guesses = 0;
var correctGuesses = 0;
var selectedBoxID = "";
var gamestate = "active";
var a1Answer = "";
var a2Answer = "";
var a3Answer = "";
var b1Answer = "";
var b2Answer = "";
var b3Answer = "";
var c1Answer = "";
var c2Answer = "";
var c3Answer = "";
document.getElementById('results').style.display = 'none';
document.getElementById('copypaste').style.display = "none";

function emojiGrid() {
    if (a1Answer != ""){
        document.getElementById('A1').textContent = "🟩"
    } else {
        document.getElementById('A1').textContent = "⬜"
    }
    
    if (b1Answer != ""){
        document.getElementById('B1').textContent = "🟩"
    } else {
        document.getElementById('B1').textContent = "⬜"
    }
    
    if (c1Answer != ""){
        document.getElementById('C1').textContent = "🟩"
    } else {
        document.getElementById('C1').textContent = "⬜"
    }

    if (a2Answer != ""){
        document.getElementById('A2').textContent = "🟩"
    } else {
        document.getElementById('A2').textContent = "⬜"
    }
    
    if (b2Answer != ""){
        document.getElementById('B2').textContent = "🟩"
    } else {
        document.getElementById('B2').textContent = "⬜"
    }
    
    if (c2Answer != ""){
        document.getElementById('C2').textContent = "🟩"
    } else {
        document.getElementById('C2').textContent = "⬜"
    }
    if (a3Answer != ""){
        document.getElementById('A3').textContent = "🟩"
    } else {
        document.getElementById('A3').textContent = "⬜"
    }
    
    if (b3Answer != ""){
        document.getElementById('B3').textContent = "🟩"
    } else {
        document.getElementById('B3').textContent = "⬜"
    }
    
    if (c3Answer != ""){
        document.getElementById('C3').textContent = "🟩"
    } else {
        document.getElementById('C3').textContent = "⬜"
    }
}

function loadListIntoElement(list,element) {
    if (list){
        let innerElement = "";
        list.forEach((item) => {
            innerElement += `
            <li>${item}</li>`;
        });
        element.innerHTML = innerElement;

        const items = element.querySelectorAll("li");
        items.forEach(function(item) {
            item.addEventListener("click", function() {
                handleItemClick(item.textContent);
            });
        });

    }
}

function handleItemClick(itemText) {
    //searchInput.value = itemText;
    //autocompleteList.style.display = "none"; // Hide the list after selecting an item
    switch (selectedBoxID){
        case "boxA1": 
            if (boxA1List.includes(itemText) && itemText != a2Answer && itemText != a3Answer && itemText != b1Answer && itemText != b2Answer && itemText != b3Answer && itemText != c1Answer && itemText != c2Answer && itemText != c3Answer){
                //if itemText is in the A1 filtered list, add the image and increment up the guesses.
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                a1Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxA1').style.backgroundColor = '#cdfec2';
                document.getElementById('boxA1').style.cursor = "auto";
                break;
            } else { //else, hide the display and tick up the guesses.
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }
        
        case "boxA2":
            if (boxA2List.includes(itemText) && itemText != a1Answer && itemText != a3Answer && itemText != b1Answer && itemText != b2Answer && itemText != b3Answer && itemText != c1Answer && itemText != c2Answer && itemText != c3Answer){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                a2Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxA2').style.backgroundColor = '#cdfec2';
                document.getElementById('boxA2').style.cursor = "auto";
                break;
            } else {
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }    
        
        case "boxA3": 
            if (boxA3List.includes(itemText) && itemText != a1Answer && itemText != a2Answer && itemText != b1Answer && itemText != b2Answer && itemText != b3Answer && itemText != c1Answer && itemText != c2Answer && itemText != c3Answer){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                a3Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxA3').style.backgroundColor = '#cdfec2';
                document.getElementById('boxA3').style.cursor = "auto";
                break;
            } else {
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }
        
        case "boxB1": 
            if (boxB1List.includes(itemText) && itemText != a1Answer && itemText != a2Answer && itemText != a3Answer && itemText != b2Answer && itemText != b3Answer && itemText != c1Answer && itemText != c2Answer && itemText != c3Answer){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                b1Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxB1').style.backgroundColor = '#cdfec2';
                document.getElementById('boxB1').style.cursor = "auto";
                break;
            } else {
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }
        
        case "boxB2": 
            if (boxB2List.includes(itemText) && itemText != a1Answer && itemText != a2Answer && itemText != a3Answer && itemText != b1Answer && itemText != b3Answer && itemText != c1Answer && itemText != c2Answer && itemText != c3Answer){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                b2Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxB2').style.backgroundColor = '#cdfec2';
                document.getElementById('boxB2').style.cursor = "auto";
                break;
            } else {
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }
        
        case "boxB3": 
            if (boxB3List.includes(itemText) && itemText != a1Answer && itemText != a2Answer && itemText != a3Answer && itemText != b1Answer && itemText != b2Answer && itemText != c1Answer && itemText != c2Answer && itemText != c3Answer){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                b3Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxB3').style.backgroundColor = '#cdfec2';
                document.getElementById('boxB3').style.cursor = "auto";
                break;
            } else {
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }
        
        case "boxC1": 
            if (boxC1List.includes(itemText) && itemText != a1Answer && itemText != a2Answer && itemText != a3Answer && itemText != b1Answer && itemText != b2Answer && itemText != b3Answer && itemText != c2Answer && itemText != c3Answer){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                c1Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxC1').style.backgroundColor = '#cdfec2';
                document.getElementById('boxC1').style.cursor = "auto";
                break;
            } else {
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }
        
        case "boxC2": 
            if (boxC2List.includes(itemText) && itemText != a1Answer && itemText != a2Answer && itemText != a3Answer && itemText != b1Answer && itemText != b2Answer && itemText != b3Answer && itemText != c1Answer && itemText != c3Answer){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                c2Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxC2').style.backgroundColor = '#cdfec2';
                document.getElementById('boxC2').style.cursor = "auto";
                break;
            } else {
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }
        
        case "boxC3": 
            if (boxC3List.includes(itemText) && itemText != a1Answer && itemText != a2Answer && itemText != a3Answer && itemText != b1Answer && itemText != b2Answer && itemText != b3Answer && itemText != c1Answer && itemText != c2Answer){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                correctGuesses++;
                c3Answer = itemText;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxC3').style.backgroundColor = "#cdfec2";
                document.getElementById('boxC3').style.cursor = "auto";
                break;
            } else {
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                break;
            }
        
    }

    searchInput.setAttribute("disabled", "");
    
    if (guesses == 9) {
        //autocompleteList.style.display = "none";
        //searchInput.value = ""
        if (correctGuesses == 9){
            gamestate = "victory";
            document.getElementById('results').style.display = 'block';
            document.getElementById('score').textContent = correctGuesses;
            emojiGrid();
            document.getElementById('gameover').textContent = "Congratulations!"
            document.getElementById('currentBox').textContent = '✨';
        } else{
            gamestate = "inactive";
            document.getElementById('results').style.display = 'block';
            document.getElementById('score').textContent = correctGuesses;
            emojiGrid();
            document.getElementById('gameover').textContent = "Game Over!";
            document.getElementById('currentBox').textContent = '🐟';
        
        }
    }
}

function addImage (playername,boxid){
    let box = document.getElementById(boxid)
    if (!box.querySelector('img')) {
        // Create an img element
        var img = document.createElement('img');
        // Set the src attribute of the image
        img.src = FILE_NAMES[PLAYERS.indexOf(playername)]; 
        // Set alt attribute of the image
        img.alt = playername;
        // Append the image to the box element
        
        box.textContent = playername;
        var lineBreak = document.createElement('br');
        box.appendChild(lineBreak);
        box.appendChild(img);
        
    }
}

loadListIntoElement(PLAYERS,autocompleteList);

// Get all the box elements
var boxes = document.querySelectorAll('.grid-item[id^="box"]');

// Add event listener to each box element
boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (!box.querySelector('img') && gamestate == "active") {    
            searchInput.removeAttribute("disabled");
            searchInput.focus();
            selectedBoxID = box.id;
            const column = box.id[3];
            const row = box.id[4];
            let columnText, rowText;
            switch (column) {
                case 'A':
                    columnText = columnAText;//colrowNames(columnA);//'Column A';
                    break;
                case 'B':
                    columnText = columnBText;//'Column B';
                    break;
                case 'C':
                    columnText = columnCText;//'Column C';
                    break;
                default:
                    columnText = '';
            }
            
            switch (row) {
                case '1':
                    rowText = row1Text;//'Row 1';
                    break;
                case '2':
                    rowText = row2Text;//'Row 2';
                    break;
                case '3':
                    rowText = row3Text;//'Row 3';
                    break;
                default:
                    rowText = '';
            }
            document.getElementById('currentBox').textContent = rowText + " and "+ columnText;
            //document.getElementById('selectedBox').textContent = selectedBoxID;

        } else {
            if (gamestate == "active"){
                searchInput.setAttribute("disabled", "true");
                searchInput.value = "";
                document.getElementById('currentBox').textContent = '🦀';
                autocompleteList.style.display = "none";
            }
        }
    });
});

document.addEventListener("click", function(event) {
    var clickedOutside = true;
    boxes.forEach(function(box) {
        if (box.contains(event.target) || searchInput.contains(event.target) || autocompleteList.contains(event.target)) {
            clickedOutside = false;
        }
    });

    if (clickedOutside && gamestate == "active") {
        // Perform actions when clicked outside the boxes
        searchInput.setAttribute("disabled", "true");
        searchInput.value = "";
        document.getElementById('currentBox').textContent = '🦀';
        autocompleteList.style.display = "none";
    }
});

function filterPlayers(players, searchText){
    return players.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}

searchInput.addEventListener("input", function() {
    autocompleteList.style.display = this.value ? "block" : "none";
    const filteredData = filterPlayers(PLAYERS, searchInput.value);
    loadListIntoElement(filteredData,autocompleteList)
});

function giveUp(){
    gamestate = "inactive";
    document.getElementById('giveup').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = correctGuesses;
    emojiGrid();
    document.getElementById('gameover').textContent = "Game Over!";
    document.getElementById('currentBox').textContent = '🐟';
    document.getElementById('copypaste').style.display = "block";
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        //alert("Text copied to clipboard: " + text);
    })
}

function copyResults(){
    document.getElementById('copypaste').innerHTML = "Copied!";
    let today = new Date();
    let monthFix = today.getMonth() + 1;
    let todayString = `${today.getFullYear()}-${monthFix}-${today.getDate()}`;
    let resultgrid =    document.getElementById('A1').textContent +
                        document.getElementById('B1').textContent +
                        document.getElementById('C1').textContent + "\n" +
                        document.getElementById('A2').textContent +
                        document.getElementById('B2').textContent +
                        document.getElementById('C2').textContent + "\n" +
                        document.getElementById('A3').textContent +
                        document.getElementById('B3').textContent +
                        document.getElementById('C3').textContent;
    let url = "https://6dam.github.io/castawaygrid/";
    let string =    "Castaway Grid - "+todayString+"\n"+"\n"+
                    "Score: "+correctGuesses+"\n"+"\n"+
                    resultgrid+"\n"+"\n"+
                    url;

    copyToClipboard(string);
}