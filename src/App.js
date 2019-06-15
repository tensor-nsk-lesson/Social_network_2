import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/profile';
import { Route, BrowserRouter } from 'react-router-dom';
import './components/css/main.css'
import Friends from "./components/friends/friends";
import Groups from "./components/groups/groups";
import Dialogs from "./components/dialogs/dialogs";
import Search from "./components/search/search";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar />
        <div className="main__rightside">
          <Route path="/profile" component={Profile} />
          <Route path="/friends" component={Friends} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/groups" component={Groups} />
          <Route path="/search" component={Search} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
