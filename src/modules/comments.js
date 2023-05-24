import API from './api_data.js';

const api = new API();
const commentURL = api.urls.comments;
const commentNewURL = api.urls.newComment;

const commentPost = async (target) => {
  fetch(commentNewURL, {

    method: 'POST',
    body: JSON.stringify({
      item_id: target.id,
      username: 'name',
      comment: 'comment',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .catch((err) => {
      throw ('Failed to Post comments ', err);
    });
  target.id = 'commented';
};

const commentGet = async () => {
  const data = fetch(commentURL)
    .then((response) => response.json())
    .then((obj) => Object.entries(obj))
    .catch((err) => {
      throw ('Failed to Get comments ', err);
    });
  return data;
};

export { commentGet, commentPost };
