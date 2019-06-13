import React from 'react';
import Sidebar from './components/base/sidebar';
import Profile from './components/profile/profile';
import { Route, BrowserRouter } from 'react-router-dom';
import './components/css/main.css'

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar />
        <div className="main__rightside">
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
