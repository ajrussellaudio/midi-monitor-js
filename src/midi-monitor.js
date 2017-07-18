import noteToString from './note-convert.js';

function onMIDISuccess(midi) {
  const inputs = midi.inputs.values();
  for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
    input.value.onmidimessage = onMIDIMessage;
  }
}

function onMIDIFailure(e) {
  alert("No access to MIDI devices.")
}

function onMIDIMessage(message) {
  const data = message.data;
  if (data[0] === 128) noteOff(data[1]);
  if (data[0] === 144) noteOn(data[1], data[2]);
}

function noteOn(noteNumber, velocity) {
  console.log("Note ON:", noteToString(noteNumber), "velocity:", velocity)
}

function noteOff(noteNumber) {
  console.log("Note OFF:", noteToString(noteNumber));
}

window.onload = () => {
  if (navigator.requestMIDIAccess) {

    navigator.requestMIDIAccess({
      sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
  } else {
    alert("No MIDI support in your browser!");
  }
}