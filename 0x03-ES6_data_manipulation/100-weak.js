// Create a new WeakMap instance
const weakMap = new WeakMap();

// Export the weakMap instance
export { weakMap };

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint has been queried before
  if (weakMap.has(endpoint)) {
    // Increment the query count for the endpoint
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the query count is greater than or equal to 5
    if (count >= 5) {
      // If so, throw an error
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint has not been queried before, set the query count to 1
    weakMap.set(endpoint, 1);
  }

  // Perform the API query
  // (This is just a placeholder for the API query logic)
  console.log(`Querying API for ${endpoint.name}...`);
}
