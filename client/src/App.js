import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './components/posts';
import Post from './components/post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route 
        exact path="/"
        render = {
          props => {
            return (
              <Posts props ={props}/>
            )
          }
        }
      />
      <Route 
        exact path="/post/:postId"
        render = {
          props => {
            return (
              <Post props={props}/>
            )
          }
        }
      />
      
    </div>
  );
}

export default App;
