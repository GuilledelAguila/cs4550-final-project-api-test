import React from "react";
import {Link} from "react-router-dom";

export default class NewsSearchComponent extends React.Component{

    componentDidMount() {
        let searchTitle = this.props.match.params.searchTitle;
        console.log(searchTitle)
        if(!searchTitle)
            searchTitle='batman'
        // fetch("http://api.eventful.com/json/events/search?app_key=V8w6JvwNxm4VCX5H&keywords=books&location=San+Diego",
        //      {
        //         'mode': 'no-cors',
        //     })
        //     .then(response => console.log(response))
        //     .then(results => console.log(results))
        fetch(`/api/greeting?name=GUILLE`)
            .then(response => response.json())
            //.then(result => console.log(result.events.event))
            .then(result => this.setState({
                events: result.events.event
            }))
    }

    searchMovies = (title) => {
        this.props.history.push(`/search/${title}`)
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(results => this.setState({
                movies: results.Search
            }))
    }

    state = {
        events: [
            {title: "Avatar"},
            {title: "Aliens"},
            {title: "Titanic"},
            {title: "Terminator 2"}
        ],
        searchTitle: ''
    }

    render() {
        return(
            <div>
                <h2>Search Movies</h2>
                <input
                    className={`form-control`}
                    onChange={e => this.setState({searchTitle: e.target.value})}
                    value={this.state.searchTitle}/>
                <button className={`btn btn-success btn-block`} onClick={() => this.searchMovies(this.state.searchTitle)}>
                    Search For Movie
                </button>
                <ul className={`list-group`}>
                    {
                        this.state.events && this.state.events.map((event, i) =>
                            <li className={`list-group-item`} key={i}>
                                <Link to={`/movie/${event.id}`}>
                                    {event.title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

}