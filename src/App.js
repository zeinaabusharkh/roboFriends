import React , {Component} from 'react';
import './App.css';
import CardList from './cardList.js';
import SearchBox from './SearchBox.js'
 
import Scroll from './scroll.js'


class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[], 
      searchfield:''
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json()})
  .then(users => {this.setState({robots:users})});
  
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  
  render() {
    const filterRobots = this.state.robots.filter(robots=>
      { return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      }) 
    
  if (this.state.robots.length === 0)
  {
    return <h1 className="tc"> Loading... </h1>
  }
  else{
    return (
      <div className='tc '>
      <h1 >RoboFreinds</h1>
      <SearchBox searchChange={this.onSearchChange}/>
     <Scroll>
          <CardList robots={filterRobots}/>
     </Scroll>
     

      </div>
      
    );
    
  }
    
  }
}
 
export default App;
