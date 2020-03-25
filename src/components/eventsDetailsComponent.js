import React from "react";


export default class EventsDetailsComponent extends React.Component {

    componentDidMount() {
        let eventID = this.props.match.params.eventID;
        fetch(`/api/searchbyid?id=${eventID}`)
            .then(response => response.json())
            .then(result => this.setState({
                event: result,
                images: result.images,
            }))
    }

    state = {
        event: {},
        images: {}

    }

    render() {
        return(
            <div>
                <h2>
                    Event Details:
                </h2>
                <h3>{this.state.event.title}</h3>
                <p>Owner: {this.state.event.owner}</p>
                <p>Location: {this.state.event.address}</p>
                <p>Date: {this.state.event.start_time}</p>
                <p>Description: </p>
                <p>{this.state.event.description}</p>


                {/*<img src={this.state.event.image.medium}/>*/}
                {console.log(this.state.event)}
            </div>

        )
    }

}