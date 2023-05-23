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
  }