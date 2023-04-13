import APIurl from './APIurl.js';

export default async (number) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APIurl()}/comments?item_id=`;
  const comments = await fetch(`${url}${number}`).then((response) => response.json());
  const data = await comments;
  return data;
};