import React from 'react';
import './MainPage.scss';

class MainPage extends React.Component {
  state = {
    technology: '',
    clicked: false
  }
  handleChange = (e) => {
    let test = e.target.value;
    this.setState({
      technology: test
    
    });
    console.log(test);
  }
  handleClick = () => {
    this.setState({clicked:true});
  }
    
  render(){
    
  return (
    <div className="App">

         {!this.state.clicked ? <div>
          <select onChange={this.handleChange}>
            <option value="Tech1">Tech1</option>
            <option value="Tech2">Tech2</option>
            <option value="Tech3">Tech3</option>
            <option value="Tech4">Tech4</option>
          </select>
          <button onClick={this.handleClick}>Submit</button>
        </div> : <h1>{this.state.technology}</h1>}
  
    </div>
  );

  }
}

export default MainPage;
