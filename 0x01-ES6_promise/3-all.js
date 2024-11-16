import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  createUser()
    .then((userData) => uploadPhoto().then((photoInfo) => ({ userData, photoInfo })))
    .then(({ userData, photoInfo }) => {
      console.log(`${photoInfo.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
