export default function cleanSet(set, startString) {
  // Convert the set to an array, filter elements starting with startString, and join them with '-'
  return Array.from(set).filter(value => value.startsWith(startString)).join('-');
}
