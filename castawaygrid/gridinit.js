function getRandomLists(lists, numLists) {
    // Check if numLists is less than or equal to the number of lists
    if (numLists > lists.length) {
        throw new Error("Number of lists to select cannot be greater than the available lists.");
    }

    // Create a copy of the lists array
    const listsCopy = [...lists];

    // Shuffle the array
    for (let i = listsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listsCopy[i], listsCopy[j]] = [listsCopy[j], listsCopy[i]];
    }

    // Return the first numLists elements from the shuffled array
    return listsCopy.slice(0, numLists);
}

function haveCommonElement(array1, array2) {
    const set1 = new Set(array1);
    return array2.some(item => set1.has(item));
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
    }
    return colrowText;
} //add stuff to this if I create more lists

const uniqueLists = findValidLists(PLAYERLISTS, 6);

columnA = uniqueLists[0];
columnB = uniqueLists[1];
columnC = uniqueLists[2];
row1 = uniqueLists[3];
row2 = uniqueLists[4];
row3 = uniqueLists[5];
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

/*
selectedLists = getRandomLists(PLAYERLISTS, 6);
colA = selectedLists[0];
colB = selectedLists[1];
colC = selectedLists[2];
row1 = selectedLists[3];
row2 = selectedLists[4];
row3 = selectedLists[5];

if (haveCommonElement(colA,row1) = true){
    if (haveCommonElement(colA, row2) = true){
        if (haveCommonElement(colA, row3)=true){
            if (haveCommonElement(colB,row1)=true){
                if (haveCommonElement(colB,row2)=true){
                    if (haveCommonElement(colB,row3)=true){
                        if (haveCommonElement(colC,row1)=true){
                            if (haveCommonElement(colC,row2)=true){
                                if (haveCommonElement(colC,row3)=true){

                                }else{

                                }
                            }else{

                            }
                        }else{

                        }
                    }else{

                    }
                }else{

                }
            }else{

            }
        } else{

        }
    } else{

    }
} else{

}
*/