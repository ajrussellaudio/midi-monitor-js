export default function noteToString(midi) {
  return pitch(midi) + octave(midi)
}

function pitch(midi) {
  return pitchClass(degree(midi));
}

function degree(midi) {
  return midi % 12;
}

function octave(midi) {
  return Math.floor(midi / 12) - 2;
}

function pitchClass(degree) {
  const pitchClasses = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  return pitchClasses[degree];
}