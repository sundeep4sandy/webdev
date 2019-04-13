import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component
{
  state = { images: [] };
  async onSearchSubmit (term) {
    //console.log(term);
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 65fceaa665b24cd86accda3881bdfad40862e327d6194f27d50fa8817a9382c5',
      },
    });
    this.setState({ images: response.data.results });
  }

  render()
  {
    return (
    <div className="ui container" style={{ marginTop: '10px' }} >
     <SearchBar onSubmit2 = { this.onSearchSubmit }/>
     <h1> </h1>
     </div>
   );
  }
}
export default App;
