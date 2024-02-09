// utils.js

// Function to balance between two downloads
export default function loadBalancer(chinaDownload, USDownload) {
  // Return a Promise that resolves to the value of the first resolved Promise
  return Promise.race([chinaDownload, USDownload]);
}
