import React from "react";
import {Link} from "react-router-dom";

export default class EventsSearchComponent extends React.Component{

    componentDidMount() {
        let searchLocation = this.props.match.params.searchLocation;
        if(!searchLocation)
            searchLocation='USA'
        fetch(`/api/event/search?location=${searchLocation}`)
            .then(response => response.json())
            .then(result => this.setState({
                events: result.events && result.events.event
            }))
    }

    searchMovies = (searchLocation) => {
        this.props.history.push(`/search/${searchLocation}`)
        fetch(`/api/event/search?location=${searchLocation}`)
            .then(response => response.json())
            .then(result => this.setState({
                events: result.events && result.events.event
            }))
    }

    state = {
        events: [],
        searchLocation: ''
    }

    render() {
        return(
            <div>
                <h2>Search Events</h2>
                <input
                    className={`form-control`}
                    onChange={e => this.setState({searchLocation: e.target.value})}
                    value={this.state.searchLocation}
                    placeholder="Search by Location"
                />
                <button className={`btn btn-success btn-block`} onClick={() => this.searchMovies(this.state.searchLocation)}>
                    Search For Events
                </button>
                <ul className={`list-group`}>
                    {
                        this.state.events && this.state.events.map((event, i) =>
                            <li className={`list-group-item`} key={i}>
                                <Link to={`/event/${event.id}`}>
                                    {event.title} {event.city_name}
                                </Link>
                            </li>
                        )
                    }
                    {
                        !this.state.events && <h4>
                            Ooops no events found in {this.props.match.params.searchLocation} :(
                        </h4>
                    }
                </ul>
            </div>
        )
    }

}