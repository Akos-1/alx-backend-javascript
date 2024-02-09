import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser functions asynchronously
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    // Wait for both promises to settle using await
    const photoResponse = await photoPromise;
    const userResponse = await userPromise;

    // Return an object with responses from both functions
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If an error occurs, return an empty object
    console.error(error); // Log the error if needed
    return {
      photo: null,
      user: null
    };
  }
}
