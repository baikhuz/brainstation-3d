import React from 'react';
import './MainPage.scss';
import GraphTest from './GraphTest';
import {Link} from "react-router-dom";

class MainPage extends React.Component {
  state = {
    technologyId: '',
    graphId: '',
    clicked: false,
    mainpage: true
  }
  handleChange = (e) => {
    let id = e.target.value;
    this.setState({
      technologyId: id
    });
    
  }
  componentDidUpdate(){
    if (this.state.mainpage && this.props.match.params.id){
      this.setState({graphId:this.props.match.params.id, mainpage: false})
    }
  }
  render(){
  return (
    <div>
    {!this.props.match.params.id ? <div>
    <h1>NexStep</h1>
    <span>Where will you find your perfect job?</span>
    <p>Just select the field you're experienced in and discover the provinces where it's in demand!</p>
    <form>
      <select onChange={this.handleChange}>
        <option value="None">Select your skills!</option>
        <option value="ICT_cloud">Cloud Technologies</option>
        <option value="ICT_data_analytics">Data Analytics</option>
        <option value="ICT_smartphone_tablet">Smartphone and Tablet Technologies</option>
        <option value="ICT_CRM">CRM</option>
        <option value="ICT_ERP">ERP</option>
        <option value="ICT_accounting">Accounting</option>
        <option value="ICT_office_software">Office Software</option>
        <option value="ICT_management_software">Management Software</option>
        <option value="ICT_design_software">Design Software</option>
        <option value="ICT_web_application">Web Applications</option>
        <option value="ICT_custom_software">Custom Software Development</option>
        <option value="ICT_payment_software">Payment Software</option>
        <option value="ICT_client_server">Client Servers</option>
        <option value="ICT_other">Client Servers</option>
      </select>
      <Link to={`/${this.state.technologyId}`}><button>Go!</button></Link>
    </form>
    </div> : <GraphTest id={this.props.match.params.id}></GraphTest>} 

  </div>
  );
  }
}

export default MainPage;
