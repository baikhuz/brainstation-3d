import React from 'react';
import './MainPage.scss';
import {Link} from "react-router-dom";
import Graph from '../Graph/Graph';
import logo1 from "./nex-step.png"
import logo2 from "./group-copy-2.png"

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
    {!this.props.match.params.id ? <div className="main">
    <div className="logoflex">
    <img className="logoimage" src={logo2}/>
    <img className="logowords" src={logo1}/>
    </div>
    <div className="title">Where will you find your perfect job?</div>
    <div className="info">Just select the field you're experienced in and discover the provinces where it's in demand!</div>
    <form className = "cta-form">
      <select className="drop" onChange={this.handleChange}>
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
      <Link to={`/${this.state.technologyId}`}><button class="button">Go!</button></Link>
    </form>
    </div> : <Graph id={this.props.match.params.id} />} 

  </div>
  );
  }
}

export default MainPage;
