
import React from "react"
import "./Todo";


task = [
    {
        text: "my name is",
        complate: "false"
    },
    {
        text: "your name is",
        complate: "true"
    },
    {
        text: "heis name is",
        complate: "false"
    }
]


export default class Todo extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = { task: props.task, typing: "" };
    }
    render() {
        return <div>
            <div className="App">

                <div className="container d-flex justify-content-center align-items-center">
                    <h1 className="todo">TODO</h1>

                    <div class="list-group col-md-4 ">
                        <div className="inp">
                            <button className="btn button">+</button>
                            <input className=" input " >
                            </input>
                        </div>
                        {
                            this.state.task.map((value, index) => {
                                return <a href="#" className={`list - group - item ${value.complate && "complate" || ""}`}>
                                    <button className="btn button me-3">:)</button> <p className="text">A second link item</p></a>

                            })
                        }
                        <a href="#" class="list-group-item complate">
                            <button className="btn button me-3">:)</button>A second link item</a>
                        <a href="#" class="list-group-item complate">
                            <button className="btn button me-3">:)</button>A third link item</a>
                    </div>
                </div>
            </div>
        </div >
    }
}

export default Todo