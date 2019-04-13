import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 65fceaa665b24cd86accda3881bdfad40862e327d6194f27d50fa8817a9382c5',
  },
});
