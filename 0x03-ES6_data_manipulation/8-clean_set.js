export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !==n'string') return '';

  const filteredValues =Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  returnfilteredValues.join('-');
}
