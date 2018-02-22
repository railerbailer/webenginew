import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import React, { Component, Text } from 'react';
import '../App.css';
import {databaseEvo, databaseEvo2} from './Constants'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex: '-1000',
  }
};




 export default class lineChart extends Component {
 	constructor(props){
 	 	super(props)
 	 	this.state={
 	 		user: 'user1',
 	 		theData: databaseEvo,
 	 	}
 	 	this.handleUser = this.handleUser.bind(this);
 	}

 	  setData(){
  			if (this.state.user==='user2'){
  				this.setState({theData: databaseEvo})
  			}
  			if (this.state.user==='user1'){
  				this.setState({theData: databaseEvo2})

  			}
  }

 	  handleUser(event) {
    this.setState({
    	user: event.target.value,
 

    });
    this.setData()
    
  }
 	render(){
 		console.log(this.state.theData)
 		return(
 			<div>

		 		<select value={this.state.user}onChange={this.handleUser}class="form-control" id="sel2">

					<option value='user1'>user 1</option>
					<option value='user2'>user 2</option>

				</select>

		 		<LineChart width={700} height={400} data={this.state.theData} >
					
					<XAxis  type="category" dataKey="name"/>
		    		<YAxis  type="number" domain={['1990', '2018']}/>
		    		<CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
					<Line type="monotone" dataKey="ChildCare" stroke="Red" />
					<Line type="monotone" dataKey="Leadership" stroke="Blue" />
					<Line type="monotone" dataKey="MedicalAid" stroke="Orange" />
					<Line type="monotone" dataKey="Language" stroke="Green" />

				</LineChart>
        <div style={{color: 'Red'}}> Red=Child Care</div>
        <div style={{color: 'blue'}}>Blue=Leadership</div> 
        <div style={{color: 'orange'}}> Orange=Medical Aid</div>
        <div style={{color: 'Green'}}>Green=Language</div> 

		</div>

 		)
 	}

 }