
constructor(props) {
    super(props)

    this.state = { step: 0 }
}


componentDidMount() {
    this.timer = setInterval(() => {
        if (this.state.step < 100) this.setState((state) => {
            return { step: state.step + 10 }
        })
    }, 1000);
}
componentWillMount() {
    clearInterval(this.timer);
}