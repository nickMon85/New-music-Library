"use strict";

const API_URL = "http://www.devcodecampmusiclibrary.com/api/music";
const container = $("#data-table");

function getInitialData() {
    $.get(API_URL, function (data) {
        appendData(data);
    })
}

function appendData(data) {
    for (const item of data) {
        const tableRow = `
        <td>${item.title}</td>
        <td>${item.album}</td>
        <td>${item.artist}</td>
        <td>${item.genre}</td>
        <td>${item.releaseDate}</td>`

        appendRow(tableRow);
    }
}

function appendRow(row) {
    const completedRow = addTrTo(row);
    container.append(completedRow);
}

function addTrTo(string) {
    return `<tr>
            ${string}
            </tr>`
}

getInitialData();