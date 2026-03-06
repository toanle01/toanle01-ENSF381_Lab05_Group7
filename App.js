import React from 'react';
import './App.css'; 
import Controls from './Controls';
import UserList from './UserList';
import Footer from './Footer';

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true; // Exercise 1 boolean

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      
      {isLoggedIn ? (
        <>
          <p>Welcome back!</p>
          <section>
            <Controls />
          </section>
          
          <section>
            <h2>User Directory</h2>
            <UserList />
          </section>
          
          <Footer />
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

export default App;
