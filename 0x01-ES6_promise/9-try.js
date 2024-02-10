export default function guardrail(mathFunction) {
  // Create an empty array to store values and errors
  const queue = [];

  try {
    // Execute the mathFunction and append its result to the queue
    queue.push(mathFunction());
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(error.message);
  } finally {
    // In every case, append the message "Guardrail was processed" to the queue
    queue.push('Guardrail was processed');
  }

  // Return the queue array
  return queue;
}
