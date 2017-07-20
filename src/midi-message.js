// import noteToString from "./note-convert.js";

export default class MIDIMessage {

  constructor(message) {
    this.status = message.data[0];
    this.data1 = message.data[1];
    this.data2 = message.data[2];
  }

  command() {
    const commands = ["Note Off", "Note On", "Poly Pressure", "Control Change", "Program Change", "Mono Pressure", "Pitch Bend", "System" ];
    const index = (this.status - 128) / 16;
    return commands[index];
  }

  getInfo() {
    return {
      command: this.command(),
      _status: this.status,
      _data1: this.data1,
      _data2: this.data2
    };
  }
}
