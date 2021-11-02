// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    state = {
        mood: "happy"
    }

    handleClick = () => {
        let currentMood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: currentMood
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>{this.state.mood}</h1>
            </div>
        )
    }
}
