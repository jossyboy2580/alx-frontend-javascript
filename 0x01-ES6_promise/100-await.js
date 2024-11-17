import { uploadPhoto, createUser } from './utils';

export default async function defaultUploader() {
  try {
    const createUserResp = await createUser();
    const uploadPhotoResp = await uploadPhoto();
    return {
      photo: uploadPhotoResp,
      user: createUserResp,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
