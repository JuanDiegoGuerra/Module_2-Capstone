import likeImage from '../images/like.png';
import API from '../modules/api_data.js';
const api = new API();
const likeURL = api.urls.likes;

export const likeGet = async () => {
  const data = fetch(likeURL)
    .then((response) => response.json())
    .then((obj) => Object.entries(obj))
    .catch((err) => {
      throw ('Failed to Get likes ', err);
    });
  return data;
};

const likesPost = async (target) => {
  fetch(likeURL, {

    method: 'POST',
    body: JSON.stringify({
      item_id: target.id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
    .catch((err) => {
      throw ('Failed to Post likes ', err);
    });
  target.src = likeImage;
};
export default likesPost;