class DivThree extends React.Component {
    render() {
        return(
            <div onClick={() => this.props.func(this.props.state.name)}>
                <h3>{this.props.state.name}</h3>
            </div>
        )
    }
}

// DIVTWO CLASS
class DivTwo extends React.Component {
    render() {
        return (
            <div >
                <DivThree 
                    state={this.props.state1}
                    func={this.props.func1}
                />
                <DivThree 
                    state={this.props.state2}
                    func={this.props.func2}
                />
            </div>
        )
    }
}

// DIVONE CLASS
class DivOne extends React.Component {
    render() {
        return (
            <div>
                <DivTwo 
                    state1={this.props.state1}
                    state2={this.props.state2}
                    func1={this.props.func1}
                    func2={this.props.func2}
                />
            </div>
        )
    } 
}

// APP CLASS
class App extends React.Component {
    state = {
        tardis1: {
            name: 'Time and Relative Dimension in Space, State 1',
            caps: false,
        },
        tardis2: {
            name: 'Time and Relative Dimension in Space, State 2',
            caps: false,
        }
    }
    // function to change tardis1
    changeTardis1 = (text) => {
        console.log("function 1 called");
        if(this.state.tardis1.caps){
            this.setState({
                tardis1: {
                    name: text.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis1: {
                    name: text.toUpperCase(),
                    caps: true
                }
            })
        }
    }   
    // function to change tardis2
    changeTardis2 = (text) => {
        console.log("function 2 called");
        if(this.state.tardis2.caps){
            this.setState({
                tardis2: {
                    name: text.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis2: {
                    name: text.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() { 
        return (
            <div>
                <DivOne 
                    func1={this.changeTardis1}
                    func2={this.changeTardis2}
                    state1={this.state.tardis1}
                    state2={this.state.tardis2}
                />
            </div>
        )
    }
}

// REACT RENDER
ReactDOM.render(
    <App />,
    document.querySelector(".container")
)