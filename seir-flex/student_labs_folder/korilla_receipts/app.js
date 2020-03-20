// create Line class
class Line extends React.Component {
    render () {
        return (
            <div className={this.props.divClass}>
                <h3 className="label">{this.props.label}</h3>
                <h3 className="contents">{this.props.contents}</h3>
            </div>
        )
    }
}

// create Receipt class
class Receipt extends React.Component {
    // order paid state
    state = {
        paid: false
    }

    handlePaid = () => {
        this.setState({paid: false})    
    }

    render () {


        return (
            <div>
                <h1>{this.props.name}</h1>
                <Line 
                    divClass="main"
                    label="Main:"
                    contents={this.props.main}
                />
                <Line 
                    divClass="protein"
                    label="Protein:"
                    contents={this.props.protein}
                />
                <Line 
                    divClass="rice"
                    label="Rice:"
                    contents={this.props.rice}
                />
                <Line 
                    divClass="sauce"
                    label="Sauce:"
                    content={this.props.sauce}
                />
                <Line 
                    divClass="drink"
                    label="Drink:"
                    contents={this.props.drink}
                />
                <Line 
                    divClass="cost"
                    label="Cost:"
                    contents={this.props.cost}
                />

            {this.state.paid ? (
            <h2>Paid </h2>
            ) : (
            <h2>Not Paid</h2>
            )}
            
            </div>
        )
    }
}

// create App class
class App extends React.Component {
    render () {
        return (
            <Receipt 
                name={receipt1.person}
                main={receipt1.order.main}
                protein={receipt1.order.protein}
                rice={receipt1.order.rice}
                sauce={receipt1.order.sauce}
                drink={receipt1.order.drink}
                cost={receipt1.order.cost}
                paid={receipt1.paid}
            />
        )
    }
}

// Render App
ReactDOM.render(
    <App />,
    document.querySelector('main')

// create Line class
class Line extends React.Component {
    render () {
        return (
            <div className={this.props.divClass}>
                <h3 className="label">{this.props.label}</h3>
                <h3 className="contents">{this.props.contents}</h3>
            </div>
        )
    }
}

// create Receipt class
class Receipt extends React.Component {
    // order paid state
    state = {
        paid: false
    }

    handlePaid = () => {
        this.setState({paid: false})    
    }

    render () {


        return (
            <div>
                <h1>{this.props.name}</h1>
                <Line 
                    divClass="main"
                    label="Main:"
                    contents={this.props.main}
                />
                <Line 
                    divClass="protein"
                    label="Protein:"
                    contents={this.props.protein}
                />
                <Line 
                    divClass="rice"
                    label="Rice:"
                    contents={this.props.rice}
                />
                <Line 
                    divClass="sauce"
                    label="Sauce:"
                    content={this.props.sauce}
                />
                <Line 
                    divClass="drink"
                    label="Drink:"
                    contents={this.props.drink}
                />
                <Line 
                    divClass="cost"
                    label="Cost:"
                    contents={this.props.cost}
                />

            {this.state.paid ? (
            <h2>Paid </h2>
            ) : (
            <h2>Not Paid</h2>
            )}
            
            </div>
        )
    }
}

// create App class
class App extends React.Component {
    render () {
        return (
            <Receipt 
                name={receipt1.person}
                main={receipt1.order.main}
                protein={receipt1.order.protein}
                rice={receipt1.order.rice}
                sauce={receipt1.order.sauce}
                drink={receipt1.order.drink}
                cost={receipt1.order.cost}
                paid={receipt1.paid}
                name={receipt2.person}
                main={receipt2.order.main}
                protein={receipt2.order.protein}
                rice={receipt2.order.rice}
                sauce={receipt2.order.sauce}
                drink={receipt2.order.drink}
                cost={receipt2.order.cost}
                paid={receipt2.paid}
                name={receipt3.person}
                main={receipt3.order.main}
                protein={receipt3.order.protein}
                rice={receipt3.order.rice}
                sauce={receipt3.order.sauce}
                drink={receipt3.order.drink}
                cost={receipt3.order.cost}
                paid={receipt3.paid}
            />
        )
    }
}

// Render App
ReactDOM.render(
    <App />,
    document.querySelector('main')
)