var searchInput = document.getElementById("castaway-input");
var autocompleteList = document.getElementById("castaway-autocomplete");

function loadListIntoElement(list,element) {
    if (list){
        let innerElement = "";
        list.forEach((item) => {
            innerElement += `
            <li>${item}</li>`;
        });
        element.innerHTML = innerElement;
    }
}

loadListIntoElement(PLAYERS,autocompleteList);

// Get all the box elements
var boxes = document.querySelectorAll('.grid-item[id^="box"]');

// Add event listener to each box element
boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        searchInput.removeAttribute("disabled");
        const column = box.id[3];
        const row = box.id[4];
        let columnText, rowText;
        switch (column) {
            case 'A':
                columnText = 'Column A';
                break;
            case 'B':
                columnText = 'Column B';
                break;
            case 'C':
                columnText = 'Column C';
                break;
            default:
                columnText = '';
        }
        
        switch (row) {
            case '1':
                rowText = 'Row 1';
                break;
            case '2':
                rowText = 'Row 2';
                break;
            case '3':
                rowText = 'Row 3';
                break;
            default:
                rowText = '';
        }
        document.getElementById('currentBox').textContent = columnText + " and "+ rowText;

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
    });
});

function filterPlayers(players, searchText){
    return players.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}

searchInput.addEventListener("input", function() {
    autocompleteList.style.display = this.value ? "block" : "none";
    const filteredData = filterPlayers(PLAYERS, searchInput.value);
    loadListIntoElement(filteredData,autocompleteList)
});