import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackButton from './components/BackButton';
import SongsLandingPage from './pages/songsLandingPage/SongsLandingPage';
import AddSong from './pages/addSong/AddSong';
import EditSong from './pages/editSong/EditSong';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Routers from './Routers'
import {store} from './index'

function App() {
  return (   
    <div className="App">
   <Provider store={store} >
    <BrowserRouter >
    <Routers />
   </BrowserRouter>
   </Provider>
    </div>
  );
}

export default App;
