var jsonData = {}; // declare json variable  
var item;
$.ajax({
    url: "./data.json",
    async: false,
    dataType: 'json',
    success: function(data) {
        jsonData = data['passive'];
    }
});

let mySelectItem = document.getElementById("mySelectItem");
let tabletr = document.getElementById("tabletr");
let myTable = document.getElementById("myTable");
// lay cac tp cua data
let ips = Object.keys(jsonData);
// default table
for (let i = 0; i < ips.length; i++) {
    var row = myTable.insertRow(i);
    row.insertCell(0).innerHTML = '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML = ips[i];
    row.insertCell(2).innerHTML = '-';
    row.insertCell(3).innerHTML = '-';
    row.insertCell(4).innerHTML = '-';
    row.insertCell(5).innerHTML = '-';
}

//khai bao option
let myOptionIp = " ";
let myOptionItem = " ";
let headerTemplate = "";
let tabletd = "";

let currentIP = null;
let currentItemType = 'mac';

let currentItemTypeList = [];

let macArr = [];
let typeArr = [];
let hostnameArr = [];
let timeArr = [];
let testArr = [];

options = Object.keys(jsonData[ips[0]]);
for (let i = 0; i < length.options; i++) {
    tabletr += `<td value="${i}">${i}</td>`;
}
tabletr.innerHTML = tabletd;

for (const key of options) {
    // console.log(`${key} => ${jsonData[ip][key]}`);
    myOptionItem += `<option value="${key}}">${key}</option>`;
    switch (key) {
        case 'mac':
            for (ip of ips) {
                macArr.push(jsonData[ip][key]);
            }
            break;
        case 'type':
            for (ip of ips) {
                typeArr.push(jsonData[ip][key]);
            }
            break;
        case 'hostname':
            for (ip of ips) {
                hostnameArr.push(jsonData[ip][key]);
            }
            break;
        case 'time':
            for (ip of ips) {
                timeArr.push(jsonData[ip][key]);
            }
            break;
    }
}

// myOptionItem += `<option value="${options[i]}">${options[i]}</option>`;
// console.log(`${ options[i] }`)
mySelectItem.innerHTML = myOptionItem;
myOptionItem = " ";
// mySelectIp.addEventListener("change", ChangeIp);
mySelectItem.addEventListener("change", ChangeSelectionItem);

// gan thay doi cho select ip

function ChangeSelectionItem(e) {
    let value = e.target.options[e.target.selectedIndex].text;
    currentItemType = value;
}

function addRow() {
    // var myIp = document.getElementById("mySelectIp");
    var myItem = document.getElementById("mySelectItem");
    var rowCount = myTable.rows.length;
    // console.log(rowCount);
    for (let i = 0; i < rowCount; i++) {
        // if (currentIP == myTable.rows[i].cells[1].innerHTML) {
        //update this row
        switch (currentItemType) {
            case 'mac':
                updateRow(2, macArr);
                break;
            case 'type':
                updateRow(3, typeArr);
                break;
            case 'hostname':
                updateRow(4, hostnameArr);
                break;
            case 'time':
                updateRow(5, timeArr);
                break;
        }
    }
}

function updateRow(cellIndex, arr) {
    for (let i = 0; i < myTable.rows.length; i++) {
        myTable.rows[i].cells[cellIndex].innerHTML = arr[i] ? arr[i] : '-';
    }
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    let cellIndex = null;
    switch (currentItemType) {
        case 'mac':
            updateRow(2, []);
            break;
        case 'type':
            updateRow(3, []);
            break;
        case 'hostname':
            updateRow(4, []);
            break;
        case 'time':
            updateRow(5, []);
            break;
    }
    // myTable.deleteRow(index);
    myTable.rows[index].cells[cellIndex].innerHTML = '-';
}