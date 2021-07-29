import "./Loading.css"
import React, { Component } from 'react'


class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = { step: 0, amount: 0 }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.step < 100) this.setState((state) => {
                return { step: state.step + 1 }

            })
        }, 100);
    }
    componentWillMount() {
        clearInterval(this.timer);
    }



    render() {
        return (<div className="LoadingContainer">
            <div className="Loading text-white" style={{ width: `${this.state.step}%` }} >
                {this.state.step}%

            </div>


        </div>
        )
    }
}
export default Loading;