import React from 'react';
import AuthButton from './components/AuthButton';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>VK Post Analytics</h1>
          <AuthButton />
        </header>
        <main>
          <PostList />
        </main>
      </div>
  );
}

export default App;
