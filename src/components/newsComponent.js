import React from "react";
import NewsSearchComponent from "./newsSearchComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class NewsComponent extends React.Component{

    render() {
        return(
            <Router>
                <div className={`container`}>
                    <h1>Omdb Client</h1>

                    <Route
                        path={`/`}
                        exact={true}
                        component={NewsSearchComponent}/>

                    <Route
                        path={`/search/:searchTitle`}
                        exact={true}
                        component={NewsSearchComponent}/>

                    {/*<Route*/}
                    {/*    path={`/movie/:imdbID`}*/}
                    {/*    exact={true}*/}
                    {/*    component={MovieDetailsComponent}/>*/}
                </div>
            </Router>
        )
    }

}