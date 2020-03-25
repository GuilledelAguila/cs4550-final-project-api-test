import React from "react";
import EventsSearchComponent from "./eventsSearchComponent";
import EventDetailsComponent from "./eventsDetailsComponent"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class EventsComponent extends React.Component{

    render() {
        return(
            <Router>
                <div className={`container`}>
                    <h1>Eventful Client</h1>
                    <Route
                        path={`/`}
                        exact={true}
                        component={EventsSearchComponent}/>

                    <Route
                        path={`/search/:searchLocation`}
                        exact={true}
                        component={EventsSearchComponent}/>

                    <Route
                        path={`/event/:eventID`}
                        exact={true}
                        component={EventDetailsComponent}/>
                </div>
            </Router>
        )
    }

}