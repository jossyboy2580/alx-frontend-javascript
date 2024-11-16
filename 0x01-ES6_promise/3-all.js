import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then(([userData, photoInfo]) => {
      console.log(`${photoInfo.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
