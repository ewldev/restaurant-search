import React, { Component } from 'react';
import CardList from './components/Card/CardList';
// import Navigation from './components/Navigation/Navigation';
// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const initialState = {
  input: '',
  input2: '',
  stores: [],
  route: 'home',
  // route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onInputChange2 = (event) => {
    this.setState({input2: event.target.value});
  }

  onButtonSubmit = () => {
    // this.setState({searchParams: this.state.input});
      fetch('http://localhost:3000/search', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input,
          input2: this.state.input2
        })
      })
      .then(response => response.json())      
      .then(data => {this.setState({ stores: data})}) 
      .catch(err => console.log(err))      
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { stores } = this.state;
    // const { stores, searchField, isSignedIn, route } = this.state;
    // const filteredStores = stores.filter(store => {
    //   return store.name.toLowerCase().includes(searchField.toLowerCase());
    // })
    // console.log('stores',stores);
    return (
      <div className="App">
        {// <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>}        
        // route === 'home'
          // ? <div>
          <div>
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onInputChange2={this.onInputChange2}
                onButtonSubmit={this.onButtonSubmit}
              />
              <CardList stores={stores} />
            </div>
          // : (
          //    route === 'signin'
          //    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          //    : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          //   )
        }
      </div>
    );
  }
}

export default App;
