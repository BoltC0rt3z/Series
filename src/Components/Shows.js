import React, { Component } from 'react';
import axios from 'axios';
import logo from '../image/logo.png';
import AllShows from './AllShows';

class Shows extends Component {

    state = {
        series: [],
        query: ''
    }

    // componentDidMount() {
    //     const json = localStorage.getItem("shows");
    //     const shows = JSON.parse(json);
    //     this.setState({ shows });
    // }

    inputChange = (e) => {
        this.setState({ query: e.target.value })
    }

    getShow = (e) => {
        e.preventDefault();
        axios.get(` http://api.tvmaze.com/search/shows?q=${this.state.query}`)
        .then(res => {
            this.setState({ series: res.data});
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
        <div>
            <div className="jumbotron text-center">
                <img src={logo} className="white" alt="logo" />
                 <br />
                 <br />
                    <form style={{ marginBottom:"2rem" }}>
                        <input className="form__input"
                            type="text"
                            onChange={this.inputChange}
                            value={this.state.query}
                        />
                        <button onClick={this.getShow} className="form__button">Search</button>
                    </form>
                    <hr className="my-4" />
            </div>
                    {
                        this.state.series.map((obj) => {
                            return(
                                <AllShows obj={obj} key={obj.show.id} />
                            )
                        })
                    }
        </div>
        );
    }
}

export default Shows;