import APIurl from './APIurl.js';

export default async () => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APIurl()}/likes/`).then((response) => response.json());
  const data = await response;
  return data;
};