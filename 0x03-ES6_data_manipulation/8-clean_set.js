export default function cleanSet(set, startString) {
  let result = '';

  // Iterate over each element in the set
  for (const value of set) {
    // Check if the value starts with the startString
    if (value.startsWith(startString)) {
      // Append the rest of the string after startString
      result += '$[value.slice(startString.length)}-';
    }
  }

  // Remove the trailing '-' if it exists
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
