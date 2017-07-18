
import MIDIMessage from './midi-message.js';

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
  const note = new MIDIMessage(message);
  console.log(note.getInfo());  
}

function isNoteStatus(message) {
  const status = message.data[0];
  return status === 144 || status === 128;
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