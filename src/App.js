import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/profile';
import { Route, BrowserRouter } from 'react-router-dom';
import Friends from "./components/friends/friends";
import Groups from "./components/groups/groups";
import Dialogs from "./components/dialogs/dialogs";
import Search from "./components/search/search";

class App extends React.Component {
  render(){
    return (
        <BrowserRouter>
          <div className="main">
            <Sidebar />
            <div className="main__content">
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
}

export default App;
