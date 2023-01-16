












import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { addPost, newTextArea, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (state) => {   
  
  root.render(
  <React.StrictMode>
    <App 
      newPostText={state.profilePage.newPostText}
      massivFriends={state.friendsPage.massivFriends}
      massivPosta={state.profilePage.massivPosta}
      massivSobesednikov={state.messagesPage.massivSobesednikov}
      massivTexta={state.messagesPage.massivTexta}          
      addPost={addPost}
      newTextArea={newTextArea}
      
    />
  </React.StrictMode>
  
);
}

rerenderTree(state); 

subscribe(rerenderTree);