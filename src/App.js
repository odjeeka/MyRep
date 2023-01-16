import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed/Feed';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/ProfileNew/Profile';


const App = (props) => {
  


  return (
    <BrowserRouter>

      <div className="app-wrapper">

        <Header />
        <Navbar />

        <div className='app-wrapper-blocksprava'>
          <Routes>
            <Route path="/profile" element={
            <Profile 
              massivPosta={props.massivPosta}
              addPost={props.addPost} 
              newPostText={props.newPostText}
              newTextArea={props.newTextArea}
             />} />
            <Route exact path="/messages" element={<Messages massivSobesednikov={props.massivSobesednikov} massivTexta={props.massivTexta} />} />
            <Route path="/feed" element={<Feed />} />  
            <Route path="/friends" element={<Friends massivFriends={props.massivFriends}/>} />           
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
