function createRow(text) {
    var row = document.createElement("tr");
    for (var i = 0; i < text.length; i++) {
        var cell = document.createElement("td");
        cell.appendChild(text[i]);
        row.appendChild(cell);
    }
    return row;
}
function createP(text) {
    var p = document.createElement("p");
    p.innerHTML = text;
    return p;
}
function renderBoard(boardData, table, host, clueClick) {
    var category_names = [];
    var rows = [];
    for (var i = 0; i < Object.entries(boardData[0].clues).length; i++) {
        rows.push([]);
    }
    var jeopardy = boardData;
    for (let [k1, v1] of Object.entries(jeopardy)) {
        category_names.push(createP(v1.name));
        for (let [k2, v2] of Object.entries(v1.clues)) {
            var link = document.createElement("a");
            link.onclick = function() {
                clueClick(k1, k2);
            }
            link.innerHTML = "$" + v2.value;
            if (host && v2.type == 1) {
                link.innerHTML += " (DD)";
            }
            if (host) {
                tippy(link, {
                    content: `<div><p><i>clue:</i>${v2.text}</p><p><i>answer:</i>${v2.answer}</p></div>`,
                    allowHTML: true
                });
            }
            rows[k2].push(link);
        }
    }

    table.appendChild(createRow(category_names));
    console.log(rows, boardData);
    for (var i = 0; i < rows.length; i++) {
        table.appendChild(createRow(rows[i]));
    }


}
function getClueElement(table, k1, k2){
    
    return table.children[new Number(k2) + 1].children[new Number(k1)];
}

function emptyElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}