function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Success! Data received from API.");
      } else {
        reject("Error! Failed to fetch data from API.");
      }
    }, 2000);
  });
}
