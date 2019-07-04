import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import FriendsContainer from "./containers/FriendsContainer";
import GroupsContainer from "./containers/GroupListContainer";
import DialogsContainer from "./components/dialogs/DialogList";
import Search from "./components/search/Search";
import Register from "./containers/RegisterContainer";
import {connect} from "react-redux";
import ProfileContainer from "./containers/ProfileContainer";
import Settings from "./containers/SettingsContainer";
import Group from "./components/groups/Group";
import Dialog from "./components/dialogs/Dialog";

class App extends React.Component {
    render() {
        const WrapperRegister = () => {
            return (<Register isLogin="0"/>)
        };
        const WrapperLogin = () => {
            return (<Register isLogin="1"/>)
        };
        // const WrapperRedirect = () => {
        //     return (<Redirect to="/login"/>)
        // };
        return (
            <BrowserRouter>
                {/*сделать проверка на авторизованность*/}
                {this.props.profile.auth == 1 ? (
                    <div>
                        <Route path="/register" component={WrapperRegister}/>
                        <Route path="/login" component={WrapperLogin}/>
                    </div>
                ):(
                    <div className="main">
                        <Sidebar/>
                        <div className="main__content">
                            <Route path="/profile" component={ProfileContainer}/>
                            <Route path="/friends" component={FriendsContainer}/>
                            <Route path="/dialogs" component={DialogsContainer}/>
                            <Route path="/dialog" component={Dialog}/>
                            <Route path="/groups" component={GroupsContainer}/>
                            <Route path="/group" component={Group}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/search" component={Search}/>
                        </div>
                    </div>
                )
                }
            </BrowserRouter>
        );
    }
}

const mapStateToProps = store => {
    return {
        profile: store.profile,
    }
}

export default connect(mapStateToProps)(App);
