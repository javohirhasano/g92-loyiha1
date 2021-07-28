import "./Clock.css";

import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = { time: new Date(), }

    }
    componentDidMount() {
        this.timer = setInterval(() => {
            console.log(this.state.time);
            this.setState(() => {
                return { time: new Date() }
            })

        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timer);
    }

    renderTime = (time) => {
        return time < 10 ? "0" + time : time
    }

    render() {
        return (
            <div className="bg-dark">
                <h1 className="text-center text-white">{this.renderTime(this.state.time.getHours())}:{this.renderTime(this.state.time.getMinutes())}:{this.renderTime(this.state.time.getSeconds())}</h1>

            </div>
        )

    }
}
export default Clock;