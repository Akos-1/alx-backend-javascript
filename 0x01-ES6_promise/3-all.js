import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise]).then((res) => {
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  })
    .catch((error) => { console.error('Signup system offline'); });
}
