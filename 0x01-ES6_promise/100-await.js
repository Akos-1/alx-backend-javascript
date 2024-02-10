import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // Call the uploadPhoto and createUser functions asynchronously
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If an error occurs, return an object with null values
    console.error(error); // Log the error if needed
    return {
      photo: null,
      user: null,
    };
  }
}
