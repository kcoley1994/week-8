import { Component } from 'react';
import Searchbox from './components/Searchbox/Searchbox';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state ={
      'token': ''
    }
  }
    async componentDidMount() {
    const clientId  = 'e40c7499310a40c98083bf5245fb28ff'
    const clientSecret = 'cea62bf2906347fbbb88b751fdbf0e25'
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
      },
      body: 'grant_type=client_credentials'
    }   
    const response = await fetch('https://accounts.spotify.com/api/token', authParameters)
    const data = await response.json()
    this.setState(() => {
      return (
        {
          token: data.access_token
        }
      )
    })
  
  }
   
   
  render(){
    return (
      <div className="App">

        <Searchbox token={this.state.token}/>
       
      </div>
    );
  }
}

export default App;
