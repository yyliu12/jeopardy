/* These are some common functions that my scripts need to use */

/* text is an array of elements--this returns a tr element */
function createRow(text) {
    // create row
    var row = document.createElement("tr");
    // for each string...
    for (var i = 0; i < text.length; i++) {
        // create <td> and att to row
        var cell = document.createElement("td");
        cell.appendChild(text[i]);
        row.appendChild(cell);
    }
    // return the row
    return row;
}
// creates a <p> element using text
function createP(text) {
    var p = document.createElement("p");
    p.innerHTML = text;
    return p;
}
// renders a jeopardy board
/*
    boardData = jeopardy board specification,
    table = <table> html element
    host = true/false -- enables host view (adds a tooltip when you hover over each clue)
    clueClick (optional) = function to be executed when a clue value is clicked
*/
function renderBoard(boardData, table, host, clueClick) {
    // make sure table is empty
    emptyElement(table);
    var category_names = [];
    var rows = [];
    // let's make our rows table
    for (var i = 0; i < Object.entries(boardData[0].clues).length; i++) {
        rows.push([]);
    }
    var jeopardy = boardData;
    // for each category...
    for (let [catId, catValue] of Object.entries(jeopardy)) {
        // put it into the category names list
        category_names.push(createP(catValue.name));
        // and for each clue...
        for (let [clueId, clueValue] of Object.entries(catValue.clues)) {
            // create <a/>
            var link = document.createElement("a");
            // register an onclick handler
            link.onclick = function() {
                clueClick(catId, clueId);
            }
            // if the monetary value is not undefined, don't render the clue
            if (clueValue.value != undefined) {
                // add $< money amount >
                link.innerHTML = "$" + clueValue.value;
                // if daily double and we are the host, make that visible
                if (host && clueValue.type == 1) {
                    link.innerHTML += " (DD)";
                }
                // if host, add tooltip
                if (host) {
                    tippy(link, {
                        content: `<div>
                            <p><i>clue:</i>${clueValue.text}</p>
                            <p><i>answer:</i>${clueValue.answer}</p>
                        </div>`,
                        allowHTML: true
                    });
                }
                // add the element onto the board
                rows[clueId].push(link);
            }

        }
    }
    // add the category names first
    table.appendChild(createRow(category_names));
    // then for each row of clues add that as well using createRow()
    for (var i = 0; i < rows.length; i++) {
        table.appendChild(createRow(rows[i]));
    }


}

// takes table, k1, k2 (clue ID), and returns the HTML element associated
// with that clue ID
function getClueElement(table, k1, k2){
    
    return table.children[new Number(k2) + 1].children[new Number(k1)];
}
// empty elements removes all children from the element
function emptyElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}