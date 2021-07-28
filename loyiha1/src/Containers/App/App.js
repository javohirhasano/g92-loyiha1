import React from 'react';
import Clock from '../Clock'
import { Button } from 'reactstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: true }

  }
  toogle = () => {
    this.setState((sate) => {
      return { show: !this.state.show }
    })
  }

  render() {
    return <div>
      <Button onClick={this.toogle} >{this.state.show && "Hide" || "Show"}</Button>
      {this.state.show && <Clock></Clock> || ""}
    </div>
  }
}
export default App;