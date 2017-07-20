export default class MIDIInput {
  constructor(onMIDIMessage) {
    this.onMIDIMessage = onMIDIMessage;
    requestMIDIAccess();
  }

  requestMIDIAccess() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({
        sysex: false
      }).then(
        this.onMIDISuccess.bind(this), 
        this.onMIDIFailure.bind(this)
      );
    } else {
      alert("No MIDI support in your browser!");
    }
  }

  onMIDISuccess(midi) {
    const inputs = midi.inputs.values();
    for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = this.onMIDIMessage;
    }
  }

  onMIDIFailure() {
    alert("No access to MIDI devices.");
  }
}