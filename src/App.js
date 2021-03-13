import './App.css';

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Messages from "./components/messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import store from "./redux/state";

function App(props) {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage}
                                                               dispatch={props.dispatch}/>}/>
                <Route path="/messages" render={ () => <Messages messagePage={props.state.messagesPage}
                                                                 dispatch={props.dispatch}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
