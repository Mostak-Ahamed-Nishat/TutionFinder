import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import Homepage from "../Bind/Homepage/Homepage";
import Hiretutor from "../Bind/Hire Tutor/Hiretutor";
import AllTutor from "../Bind/AllTutor/AllTutor";
import PostJob from "../Bind/PostJob/PostJob";
import RequestJob from "../Bind/RequestTution/RequestJob";
import ContactPage from "../Bind/Contact/ContactPage";
import SearchTeacher from "../Bind/SearchTeacher/SearchTeacher";
class Routing extends Component {
    render() {
        return (
     <Fragment>
         <Switch>
             <Route exact path="/"  component={Homepage} className="hello" />
             <Route exact path="/AllTutor"  component={AllTutor} />
             <Route exact path="/HireTutor"  component={Hiretutor} />
             <Route exact path="/PostJob"  component={PostJob} />
             <Route exact path="/Search"  component={SearchTeacher} />
             <Route exact path="/RequestJob"  component={RequestJob} />
             <Route exact path="/Contact"  component={ContactPage} />
         </Switch>
     </Fragment>
        );
    }
}

export default Routing;