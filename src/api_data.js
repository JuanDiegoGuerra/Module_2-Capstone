export default class API {
    constructor() {
      this.urls = {
        pokemons: '',
        likes: '',
        comments: '',
        newComment: '',
      };
    }
  
    async get(url) {
      this.url = url;
      const response = await fetch(url);
      return response.json();
    }
  
    async post(url, data) {
      this.url = url;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
      });
      const res = await response;
      return res;
    }
  }