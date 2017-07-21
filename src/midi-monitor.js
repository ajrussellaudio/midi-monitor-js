import MIDIInput from "./midi-input.js";
import MIDIMessage from "./midi-message.js";

// function logMIDIMessage(message) {
//   const note = new MIDIMessage(message);
//   console.log(note.getInfo());  
// }

function createTable() {
  const table = document.createElement("table");
  table.id = "monitor-table";
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  appendTableCell(headerRow, "th", "MIDI Command");
  appendTableCell(headerRow, "th", "Status Byte");
  appendTableCell(headerRow, "th", "Data Byte 1");
  appendTableCell(headerRow, "th", "Data Byte 2");

  const tableBody = document.createElement("tbody");
  tableBody.id = "monitor-table-body";

  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);
  table.appendChild(tableBody);

  return table;
}

function createTableRow(message) {
  const note = new MIDIMessage(message).getInfo();
  const tr = document.createElement("tr");

  Object.keys(note).forEach(key => {
    appendTableCell(tr, "td", note[key]);
  });

  const tbody = document.querySelector("#monitor-table-body");
  tbody.insertBefore(tr, tbody.firstChild);
}

function appendTableCell(parent, type, value) {
  parent.appendChild(createTableCell(value, type));
}

function createTableCell(text, type) {
  const cell = document.createElement(type);
  cell.textContent = text;
  return cell;
}

window.onload = () => {
  document.body.appendChild(createTable());
  new MIDIInput(createTableRow);
};