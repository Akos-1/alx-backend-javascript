// Function to divide two numbers
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is zero
  if (denominator === 0) {
    // If the denominator is zero, throw an error
    throw new Error('cannot divide by 0');
  } else {
    // Otherwise, return the division result
    return numerator / denominator;
  }
}
