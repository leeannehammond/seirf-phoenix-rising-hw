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
        paid: true
    }

    handlePaid = () => {
        this.setState({paid: false})    
    }

    render () {
        return (
            <div className="receipt">
                <h1 className="name">{this.props.name}</h1>
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
                    contents={this.props.sauce}
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

            {console.log(this.state.paid)}

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
            <div className="receipt-container">
                {receipts.map(receipt => (
                    <Receipt 
                        name={receipt.person}
                        main={receipt.order.main}
                        protein={receipt.order.protein}
                        rice={receipt.order.rice}
                        sauce={receipt.order.sauce}
                        drink={receipt.order.drink}
                        cost={receipt.order.cost}
                        paid={receipt.paid}
                    />
                ))}
            </div>
        )
    }
}

// Render App
ReactDOM.render(
    <App />,
    document.querySelector('main')
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
            paid: true
        }
    
        handlePaid = () => {
            this.setState({paid: false})    
        }
    
        render () {
            return (
                <div className="receipt">
                    <h1 className="name">{this.props.name}</h1>
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
                        contents={this.props.sauce}
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
    
                {console.log(this.state.paid)}
    
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
                <div className="receipt-container">
                    {receipts.map(receipt => (
                        <Receipt 
                            name={receipt.person}
                            main={receipt.order.main}
                            protein={receipt.order.protein}
                            rice={receipt.order.rice}
                            sauce={receipt.order.sauce}
                            drink={receipt.order.drink}
                            cost={receipt.order.cost}
                            paid={receipt.paid}
                        />
                    ))}
                </div>
            )
        }
    }
    
    // Render App
    ReactDOM.render(
        <App />,
        document.querySelector('main')
    )