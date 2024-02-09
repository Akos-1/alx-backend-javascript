import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Function to handle profile signup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto functions
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const result = [];

  // Promise.allSettled to wait for all promises to settle
  return Promise.allSettled(promises).then((results) => {
    // Map the settled promises to extract their values
    results.map(({ status, value, reason }) => (
      result.push({
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));
    return result;
  });
}
