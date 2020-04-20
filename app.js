class RandomTaco extends React.Component {
    render () {
      return  (
        <div>
          <h1>Shell: {this.props.taco.shell.slug}</h1>
          <p>{this.props.taco.shell.recipe}</p>
  
          <h1>Mixin: {this.props.taco.mixin.slug}</h1>
          <p>{this.props.taco.mixin.recipe}</p>
  
          <h1>Condiment: {this.props.taco.condiment.slug}</h1>
          <p>{this.props.taco.condiment.recipe}</p>
          
          <h1>Seasoning: {this.props.taco.seasoning.slug}</h1>
          <p>{this.props.taco.seasoning.recipe}</p>
  
          <h1>Base layer: {this.props.taco.base_layer.slug}</h1>
          <p>{this.props.taco.base_layer.recipe}</p>
    
        </div>
      )
    }
  }
  
  class App extends React.Component {
      
    state = {
        URL: "https://taco-randomizer.herokuapp.com/random/?full-tack=true",
    }
  
    componentDidMount = () => {
      fetch("https://taco-randomizer.herokuapp.com/random/?full-tack=true")
        .then(response => response.json())
        .then(data => this.setState({ taco: data }));
    }
  
    render() {
      console.log(this.state)
      return (
        <React.Fragment>
          <h1>Random Taco Tuesday</h1>
          {this.state.taco ? <RandomTaco taco={this.state.taco}/> : ""}
        </React.Fragment>
      )
      }
  }
  
  
  ReactDOM.render(
      <App/>, 
      document.querySelector(".container")
  )