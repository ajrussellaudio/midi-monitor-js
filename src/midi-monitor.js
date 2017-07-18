import MIDIInput from './midi-input.js';
import MIDIMessage from './midi-message.js';

function logMIDIMessage(message) {
  const note = new MIDIMessage(message);
  console.log(note.getInfo());  
}

function createTable() {
  const table = document.createElement('table');
  table.id = "monitor-table";
  const tableHead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headerRow.appendChild(createTableCell("MIDI Command", 'th'));
  headerRow.appendChild(createTableCell("Status Byte", 'th'));
  headerRow.appendChild(createTableCell("Data Byte 1", 'th'));
  headerRow.appendChild(createTableCell("Data Byte 2", 'th'));

  const tableBody = document.createElement('tbody');
  tableBody.id = "monitor-table-body";

  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);
  table.appendChild(tableBody);

  return table;
}

function createTableCell(text, type) {
  const cell = document.createElement(type);
  cell.textContent = text;
  return cell;
}

function createTableRow(message) {
  const note = new MIDIMessage(message).getInfo();
  const tr = document.createElement('tr');

  tr.appendChild(createTableCell(note.command, 'td'))
  tr.appendChild(createTableCell(note._status, 'td'))
  tr.appendChild(createTableCell(note._data1, 'td'))
  tr.appendChild(createTableCell(note._data2, 'td'))

  document.querySelector("#monitor-table-body")
    .appendChild(tr);
}

window.onload = () => {
  document.body.appendChild(createTable());
  new MIDIInput(createTableRow);
}