import APIurl from './APIurl.js';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APIurl()}/likes/`;

export default async (itemID) => {
  const item = {
    item_id: itemID,
  };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };

  const res = await fetch(url, config);
  return res;
};