import './App.css';

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Messages from "./components/messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";

function App(props) {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <Route path="/profile" render={ () => <Profile postData={props.state.profilePage.postData}
                                                               profileData={props.state.profilePage.profileData}/>}/>
                <Route path="/messages" render={ () => <Messages usersData={props.state.messagesPage.usersData}
                                                                 messagesList={props.state.messagesPage.messagesList}/>}/>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
