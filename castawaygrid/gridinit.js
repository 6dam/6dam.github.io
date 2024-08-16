//let iterations = 0;

function randomFromDate() {
    let today = new Date();
    today.setDate(today.getDate() + 0);
    const dateString = `${today.getDate()}${today.getFullYear()}${today.getMonth()}`;
    const dateInt = parseInt(dateString, 10);
    return (Math.sin(dateInt) + 1) / 2;
}

const todaystr = randomFromDate();
var myrng = new Math.seedrandom(todaystr);

function getRandomLists(lists, numLists) {
    //iterations++;
    
    // Check if numLists is less than or equal to the number of lists
    if (numLists > lists.length) {
        throw new Error("Number of lists to select cannot be greater than the available lists.");
    }
    // Create a copy of the lists array
    const listsCopy = [...lists];

    window.randomNumber = myrng();//Math.random();

    // Shuffle the array
    for (let i = listsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(randomNumber * (i + 1));
        [listsCopy[i], listsCopy[j]] = [listsCopy[j], listsCopy[i]];
    }
    for (let i = listsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(randomNumber * (i + 1));
        [listsCopy[i], listsCopy[j]] = [listsCopy[j], listsCopy[i]];
    }

    // Return the first numLists elements from the shuffled array
    return listsCopy.slice(0, numLists);

}

function exceptionCheck(column,row){
    if (((column == PLAYERLISTS[10]) && (row == PLAYERLISTS[11]))||((column == PLAYERLISTS[11]) && (row == PLAYERLISTS[10]))){
        return false;
    }else{
        return true;
    }
}

function haveCommonElement(array1, array2) {
    const set1 = new Set(array1);
    return array2.some(item => set1.has(item)) && exceptionCheck(array1,array2);
}

function isValidSelection(cA, cB, cC, r1, r2, r3) {
    return (
        haveCommonElement(cA, r1) &&
        haveCommonElement(cA, r2) &&
        haveCommonElement(cA, r3) &&
        haveCommonElement(cB, r1) &&
        haveCommonElement(cB, r2) &&
        haveCommonElement(cB, r3) &&
        haveCommonElement(cC, r1) &&
        haveCommonElement(cC, r2) &&
        haveCommonElement(cC, r3)
    );
}

function findValidLists(lists, numLists) {
    let selectedLists;
    let coA, coB, coC, ro1, ro2, ro3;
    do {
        selectedLists = getRandomLists(lists, numLists);
        coA = selectedLists[0];
        coB = selectedLists[1];
        coC = selectedLists[2];
        ro1 = selectedLists[3];
        ro2 = selectedLists[4];
        ro3 = selectedLists[5];
    } while (!isValidSelection(coA, coB, coC, ro1, ro2, ro3));

    return selectedLists;
}

function colrowNames(list){
    let colrowText;
    switch(list){
        case PLAYERLISTS[0]:
            colrowText = "Seasons 1 to 8"
            break;
        case PLAYERLISTS[1]:
            colrowText = "Seasons 9 to 20"
            break;
        case PLAYERLISTS[2]:
            colrowText = "Seasons 21 to 30"
            break;
        case PLAYERLISTS[3]:
            colrowText = "Seasons 31 to 40"
            break;
        case PLAYERLISTS[4]:
            colrowText = "Seasons 41 to 46"
            break;
        case PLAYERLISTS[5]:
            colrowText = "Sole Survivor"
            break;
        case PLAYERLISTS[6]:
            colrowText = "Medically evacuated"
            break;
        case PLAYERLISTS[7]:
            colrowText = "First to leave"
            break;
        case PLAYERLISTS[8]:
            colrowText = "Runner-up (2nd or 3rd)"
            break;
        case PLAYERLISTS[9]:
            colrowText = "Competed twice or more"
            break;
        case PLAYERLISTS[10]:
            colrowText = "Name/nickname begins with A-M"
            break;
        case PLAYERLISTS[11]:
            colrowText = "Name/nickname begins with N-Z"
            break;
    }
    return colrowText;
} //add stuff to this if I create more lists

const uniqueLists = findValidLists(PLAYERLISTS, 6);

let columnA = uniqueLists[0];
let columnB = uniqueLists[1];
let columnC = uniqueLists[2];
let row1 = uniqueLists[3];
let row2 = uniqueLists[4];
let row3 = uniqueLists[5];
boxA1List = columnA.filter(name => row1.includes(name));
boxB1List = columnB.filter(name => row1.includes(name));
boxC1List = columnC.filter(name => row1.includes(name));
boxA2List = columnA.filter(name => row2.includes(name));
boxB2List = columnB.filter(name => row2.includes(name));
boxC2List = columnC.filter(name => row2.includes(name));
boxA3List = columnA.filter(name => row3.includes(name));
boxB3List = columnB.filter(name => row3.includes(name));
boxC3List = columnC.filter(name => row3.includes(name));
columnAText = colrowNames(columnA);
columnBText = colrowNames(columnB);
columnCText = colrowNames(columnC);
row1Text = colrowNames(row1);
row2Text = colrowNames(row2);
row3Text = colrowNames(row3);


document.getElementById('columnA').textContent = columnAText;//colrowNames(columnA);
document.getElementById('columnB').textContent = columnBText;//colrowNames(columnB);
document.getElementById('columnC').textContent = columnCText;//colrowNames(columnC);
document.getElementById('row1').textContent = row1Text;//colrowNames(row1);
document.getElementById('row2').textContent = row2Text;//colrowNames(row2);
document.getElementById('row3').textContent = row3Text;//colrowNames(row3);

//document.getElementById('testing').textContent = iterations;
//document.getElementById('testing2').textContent = randomNumber;

//This displays the list of correct answers for the intersection.
/*
document.getElementById('boxA1').textContent = boxA1List;
document.getElementById('boxB1').textContent = boxB1List;
document.getElementById('boxC1').textContent = boxC1List;
document.getElementById('boxA2').textContent = boxA2List;
document.getElementById('boxB2').textContent = boxB2List;
document.getElementById('boxC2').textContent = boxC2List;
document.getElementById('boxA3').textContent = boxA3List;
document.getElementById('boxB3').textContent = boxB3List;
document.getElementById('boxC3').textContent = boxC3List;
*/
