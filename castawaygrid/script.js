var searchInput = document.getElementById("castaway-input");
var autocompleteList = document.getElementById("castaway-autocomplete");
var guesses = 0;
var selectedBoxID = "";

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
            if (boxA1List.includes(itemText)){
                //if itemText is in the A1 filtered list, add the image and increment up the guesses.
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxA1').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
            if (boxA2List.includes(itemText)){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxA2').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
            if (boxA3List.includes(itemText)){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxA3').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
            if (boxB1List.includes(itemText)){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxB1').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
            if (boxB2List.includes(itemText)){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxB2').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
            if (boxB3List.includes(itemText)){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxB3').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
            if (boxC1List.includes(itemText)){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxC1').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
            if (boxC2List.includes(itemText)){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxC2').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
            if (boxC3List.includes(itemText)){
                addImage(itemText,selectedBoxID);
                autocompleteList.style.display = "none";
                searchInput.value = ""
                guesses++;
                document.getElementById('currentGuesses').textContent = guesses;
                document.getElementById('currentBox').textContent = '🦀';
                document.getElementById('boxC3').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
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
        box.appendChild(img);
        
    }
}

loadListIntoElement(PLAYERS,autocompleteList);

// Get all the box elements
var boxes = document.querySelectorAll('.grid-item[id^="box"]');

// Add event listener to each box element
boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (!box.querySelector('img')) {    
            searchInput.removeAttribute("disabled");
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
            document.getElementById('selectedBox').textContent = selectedBoxID;

            /*
            // If you click on a box and it doesn't have an img element
            if (!box.querySelector('img')) {
                // Create an img element
                var img = document.createElement('img');
                // Set the src attribute of the image
                let size = SEASON41to46.length;
                let randindex = Math.floor(Math.random() * size);
                img.src = FILE_NAMES[PLAYERS.indexOf(SEASON41to46[randindex])]; 
                // Set alt attribute of the image
                img.alt = 'Image ' + column + row;
                // Append the image to the box element
                box.textContent = SEASON41to46[randindex];
                box.appendChild(img);
                
            }
                */
        } else {
            searchInput.setAttribute("disabled", "true");
            searchInput.value = "";
            document.getElementById('currentBox').textContent = '🦀';
            autocompleteList.style.display = "none";
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

    if (clickedOutside) {
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