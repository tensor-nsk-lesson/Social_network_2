import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Friends from "./components/friends/friends";
import Groups from "./components/groups/groups";
import Dialogs from "./components/dialogs/dialogs";
import Search from "./components/search/search";
import Register from "./components/register";
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import ProfileContainer from "./containers/ProfileContainer";

class App extends React.Component {
  render(){
      const WrapperRegister = () => {
          return(<Register isLogin="0" />)
      }
      const WrapperLogin = () => {
          return(<Register isLogin="1" />)
      }
      const WrapperRedirect = () => {
          return(<Redirect to="/login" />)
      }
    return (
        <BrowserRouter>
            {this.props.isAuth == 0 ? (
                <div>
                    <Route path="/" component={WrapperRedirect} />
                    <Route path="/register" component={WrapperRegister} />
                    <Route path="/login" component={WrapperLogin} />
                </div>
            ): (
                <div className="main">
                    <Sidebar />
                    <div className="main__content">
                        <Route path="/profile" component={ProfileContainer} />
                        <Route path="/friends" component={Friends} />
                        <Route path="/dialogs" component={Dialogs} />
                        <Route path="/groups" component={Groups} />
                        <Route path="/search" component={Search} />
                    </div>
                </div>
            )

            }

        </BrowserRouter>
    );
  }
}

const putStateToProps = store => {
    return {
        isAuth: store.isAuth
    }
}

export default connect(putStateToProps)(App);
