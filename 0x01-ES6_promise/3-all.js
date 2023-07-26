import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();

  return Promise.all([p1, p2]).then((results) => {
    console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
