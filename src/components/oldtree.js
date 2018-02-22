import Tree from 'react-tree-graph';
import { easeElastic } from 'd3-ease';
import React, { Component, Text } from 'react';
 import '../App.css';
 import 'react-tree-graph/dist/style.css'
 import Modal from 'react-modal'
 import Radar from 'react-d3-radar'
 import {database} from './Constants'




//Fetching from "DB"
const user1 =  database




 export default class TreeGraph extends Component {

 	constructor(props){
 		super(props);
 		this.state={
 			classNameRed: 'red-node' ,
 			classNameBlue: 'blue-node' ,
 			classNameGreen: 'green-node' ,
 			classNameOrange: 'orange-node' ,
 			classNameWhite: 'white-node' ,
 			classNameBlack: 'black-node' ,
 			classNameGray: 'gray-node' ,
 			showDescription: '' ,

 			gameProps: 0,

 			value: 1,
 			modalIs2pen: false,
 			nodeName: '',

 			subCat1: '',
 			subCat2: '',
 			subCat3: '',
 			
 			
 			subCatOne: 1,
 			subCatTwo: 1,
 			subCatThree: 1,


		 	subCatOneReq: 1,
		 	subCatTwoReq: 1,
			subCatThreeReq: 1,

 			user: 'user1',
 			 			
 		}
 	

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUser = this.handleUser.bind(this);

    

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  

  }

		openModal(nodeKey) {
    		console.log('Outside',this.state.data);
    	    this.setState({modalIsOpen: true});
    	    this.setState({nodeName: nodeKey});

    	    if (this.state.user==='user1'){

    	    	

				if (nodeKey==='Language'||'English'||'German'||'glevel 1'||'gLevel 2'||'gLevel 3'
					||'eLevel 1'||'eLevel 2'||'eLevel 3'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: 3,
		 				subCatTwo: 0,
		 				subCatThree: 3, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 7,
		 				subCatThreeReq: 4, 

		 				})
	    	  

	    	    }

				if (nodeKey==='Medical Aid'){
	    	    	this.setState({
			    	    subCat1: 'EmergencyAid', 
		 				subCat2: 'Nursing', 
		 				subCat3: 'Checkups',

			    	    subCatOne: user1.MedicalAid.base.subCatOne,
		 				subCatTwo: user1.MedicalAid.base.subCatTwo,
		 				subCatThree: user1.MedicalAid.base.subCatThree, 

		 				subCatOneReq: 2,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    }
	    	    if (nodeKey==='mLevel 1'){
	    	    	this.setState({
			    	    subCat1: 'EmergencyAid', 
		 				subCat2: 'Nursing', 
		 				subCat3: 'Checkups',

			    	    subCatOne: user1.MedicalAid.lvl1.subCatOne,
		 				subCatTwo: user1.MedicalAid.lvl1.subCatTwo,
		 				subCatThree: user1.MedicalAid.lvl1.subCatThree, 

		 				subCatOneReq: 2,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    }
	    	    if (nodeKey==='mLevel 2'){
	    	    	this.setState({
			    	    subCat1: 'EmergencyAid', 
		 				subCat2: 'Nursing', 
		 				subCat3: 'Checkups',

			    	    subCatOne: user1.MedicalAid.lvl2.subCatOne,
		 				subCatTwo: user1.MedicalAid.lvl2.subCatTwo,
		 				subCatThree: user1.MedicalAid.lvl2.subCatThree, 

		 				subCatOneReq: 2,
		 				subCatTwoReq: 1,
		 				subCatThreeReq: 1, 

		 				})
	    	    }
	    	    if (nodeKey==='mLevel 3'){
	    	    	this.setState({
			    	    subCat1: 'EmergencyAid', 
		 				subCat2: 'Nursing', 
		 				subCat3: 'Checkups',

			    	    subCatOne: user1.MedicalAid.lvl3.subCatOne,
		 				subCatTwo: user1.MedicalAid.lvl3.subCatTwo,
		 				subCatThree: user1.MedicalAid.lvl3.subCatThree, 

		 				subCatOneReq: 2,
		 				subCatTwoReq: 8,
		 				subCatThreeReq: 4, 

		 				})
	    	    }
	    	    if (nodeKey==='mLevel 4'){
	    	    	this.setState({
			    	    subCat1: 'EmergencyAid', 
		 				subCat2: 'Nursing', 
		 				subCat3: 'Checkups',

			    	    subCatOne: user1.MedicalAid.lvl4.subCatOne,
		 				subCatTwo: user1.MedicalAid.lvl4.subCatTwo,
		 				subCatThree: user1.MedicalAid.lvl4.subCatThree, 

		 				subCatOneReq: 8,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 8, 

		 				})
	    	    }
	    	    if (nodeKey==='mLevel 5'){
	    	    	this.setState({
			    	    subCat1: 'EmergencyAid', 
		 				subCat2: 'Nursing', 
		 				subCat3: 'Checkups',

			    	    subCatOne: user1.MedicalAid.lvl5.subCatOne,
		 				subCatTwo: user1.MedicalAid.lvl5.subCatTwo,
		 				subCatThree: user1.MedicalAid.lvl5.subCatThree, 

		 				subCatOneReq: 10,
		 				subCatTwoReq: 10,
		 				subCatThreeReq: 10, 

		 				})
	    	    }

				if (nodeKey==='Leadership'){
	    	    	this.setState({
			    	    subCat1: 'LeadingKids', 
		 				subCat2: 'LeadingAdults', 
		 				subCat3: 'LeadingTeenagers',

			    	    subCatOne: 9,
		 				subCatTwo: 3,
		 				subCatThree: 1, 

		 				subCatOneReq: 1,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 8, 

		 				})
	    	    }

	    	    if (nodeKey==='lLevel 1'){
	    	    	this.setState({
			    	    subCat1: 'LeadingKids', 
		 				subCat2: 'LeadingAdults', 
		 				subCat3: 'LeadingTeenagers',

			    	    subCatOne: 10,
		 				subCatTwo: 3,
		 				subCatThree: 1, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    }
	    	    if (nodeKey==='lLevel 2'){
	    	    	this.setState({
			    	    subCat1: 'LeadingKids', 
		 				subCat2: 'LeadingAdults', 
		 				subCat3: 'LeadingTeenagers',

			    	    subCatOne: 5,
		 				subCatTwo: 3,
		 				subCatThree: 1, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    }
	    	    if (nodeKey==='llLevel 3'){
	    	    	this.setState({
			    	    subCat1: 'LeadingKids', 
		 				subCat2: 'LeadingAdults', 
		 				subCat3: 'LeadingTeenagers',

			    	    subCatOne: 0,
		 				subCatTwo: 3,
		 				subCatThree: 1, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    }

	    	    if (nodeKey==='Child Care'){
	    	    	this.setState({
			    	    subCat1: 'Cooking', 
		 				subCat2: 'Homework', 
		 				subCat3: 'Cleaning',

			    	    subCatOne: 3,
		 				subCatTwo: 9,
		 				subCatThree: 3, 

		 				subCatOneReq: 1,
		 				subCatTwoReq: 2,
		 				subCatThreeReq: 3, 

		 				})
	    	    	
	    	    }
	    	    if (nodeKey==='cLevel1'){
	    	    	this.setState({
			    	    subCat1: 'Cooking', 
		 				subCat2: 'Homework', 
		 				subCat3: 'Cleaning',

			    	    subCatOne: 3,
		 				subCatTwo: 9,
		 				subCatThree: 3, 

		 				subCatOneReq: 1,
		 				subCatTwoReq: 2,
		 				subCatThreeReq: 3, 

		 				})
	    	    	
	    	    }
	    	    if (nodeKey==='cLevel2'){
	    	    	this.setState({
			    	    subCat1: 'Cooking', 
		 				subCat2: 'Homework', 
		 				subCat3: 'Cleaning',

			    	    subCatOne: 3,
		 				subCatTwo: 9,
		 				subCatThree: 3, 

		 				subCatOneReq: 1,
		 				subCatTwoReq: 2,
		 				subCatThreeReq: 3, 

		 				})
	    	    	
	    	    }
	    	    if (nodeKey==='cLevel3'){
	    	    	this.setState({
			    	    subCat1: 'Nursing', 
		 				subCat2: 'Homework', 
		 				subCat3: 'Cleaning',

			    	    subCatOne: 3,
		 				subCatTwo: 9,
		 				subCatThree: 3, 

		 				subCatOneReq: 9,
		 				subCatTwoReq: 2,
		 				subCatThreeReq: 3, 

		 				})
	    	    	
	    	    }




	    	  
	    	    
	    	    

    	    }

    	    if (this.state.user==='user2'){

	    	   	if (nodeKey==='llLevel 3'){
	    	    	this.setState({
			    	    subCat1: 'LeadingKids', 
		 				subCat2: 'LeadingAdults', 
		 				subCat3: 'LeadingTeenagers',

			    	    subCatOne: 5,
		 				subCatTwo: 5,
		 				subCatThree: 5, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    }

    	    }

    	    
    	    
    	    
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  handleChange(event) {
    this.setState({
    	value: event.target.value,
    });
    
  }
  handleUser(event) {
    this.setState({
    	user: event.target.value,
    });
    
  }
    handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

 notCompleted(){
	if (this.state.subCatOneReq>this.state.subCatOne||
		this.state.subCatTwoReq>this.state.subCatTwo||
		this.state.subCatThreeReq>this.state.subCatThree){
	 	    	
	 }
}

tasksLeft(){
	return (
	this.state.subCatOne-this.state.subCatOneReq+
	this.state.subCatTwo-this.state.subCatTwoReq+
	this.state.subCatThree-this.state.subCatThreeReq
	)
}

componentDidMount(){
	
this.setState({
	gameProps: {className: this.state.classNameGray},

})
	
}


  render() {



function onMouseOver(nodeKey) {
  		return alert(nodeKey)  		
	}
  	


	  	function onMouseOut(nodeKey) {
		

	}
  	function onClick(nodeKey) {
  		return nodeKey
  		
  		

	}

  	const data =  
  	
  {
    name: 'user1',
 	gProps:{
	   	className: this.state.classNameWhite,
	   
	},    
    "parent": "null",
    value: 200,
    date: 5000,
    "children": [
      			{
                name: 'Child Care', date: 2015,
                     
                circleProps:{
									    	className: this.state.classNameRed,
									    	

									   },
									   
                            //3 levels
                               children: [

                                    {
                                      name: 'cLevel1', date: 2016,
                                      gProps:{
									    	className: this.state.classNameRed,
									    	onClick: this.openModal
									   },
                                        children: [
                                            {
                                              name: 'cLevel2', date: 2016,
                                              gProps:{
											    	className: this.state.classNameRed,
											    	onClick: this.openModal

											  },
											  
                                              attributes: {
                                                ToEvolve: 'Complete 7 more tasks',   
                                              },
		                                              children: [
		                                            {
		                                              name: 'cLevel3', date:2016,
		                                              gProps:{
													    	className: this.state.classNameGray,
													    	onClick: this.openModal
													  },
													    pathProps:{
													    	className: this.state.classNameGray
													  },
													 
		                                              attributes: {
		                                                ToEvolve: this.tasksLeft(),   
		                                              },
		                                                                              
		                                            },
		                                        ], 
                                                                              
                                            },
                                        ],                         
                                    },
                                  ],//3 levels
              },


              {
                name: 'Leadership', date: 2014, value: 500,
                gProps:{
			    	className: this.state.classNameBlue,
			    	onClick: this.openModal
			    },
                            //3 levels
                               children: [
                                    {
                                      name: 'lLevel 1', date: 2014,
                                      gProps:{
									    	className: this.state.classNameBlue,
									    	onClick: this.openModal
									   },
											   children: [
		                                    {
		                                      name: 'lLevel 2', date: 2015,
		                                      gProps:{
											    	className: this.state.classNameBlue,
											    	onClick: this.openModal
											   },
													   children: [
				                                    {
				                                      name: 'llLevel 3', date: 2016,
				                                      gProps:{
													    	className: this.state.classNameBlue,
													    	onClick: this.openModal
													   },
				                                                    
				                                    },
				                                  ],//3 levels
		                                                    
		                                    },
		                                  ],//3 levels

                                    },
                                  ],//3 levels
              },



              {
                name: 'Medical Aid', date: 2010,
                
                gProps:{
			    	className: this.state.classNameOrange,
			    	onClick: this.openModal
			    },
			    //3 levels
                               children: [
                                    {
                                      name: 'mLevel 1', date: 2011,
                                      gProps:{
									    	className: this.state.classNameOrange,
									    	onClick: this.openModal
									   },

											   children: [
		                                    {
		                                      name: 'mLevel 2', date: 2011,
		                                       gProps:{
													    	className: this.state.classNameGray,
													    	onClick: this.openModal
													  },
													    pathProps:{
													    	className: this.state.classNameGray
													  
													  },
															   children: [
						                                    {
						                                      name: 'mLevel 3', date: 2011,
						                                      gProps:{
															    	className: this.state.classNameGray,
															    	onClick: this.openModal
															  },
															    pathProps:{
															    	className: this.state.classNameGray
															  },
																	  children: [
								                                    {
								                                      name: 'mLevel 4', date: 2013,
								                                      gProps:{
																	    	className: this.state.classNameGray,
																	    	onClick: this.openModal,
																	  },
																	    pathProps:{
																	    	className: this.state.classNameGray
																	  },
																			children: [
										                                    {
										                                      name: 'mLevel 5', date: 2015,
										                                      gProps:{
																			    	className: this.state.classNameGray,
																			    	onClick: this.openModal
																			  },
																			    pathProps:{
																			    	className: this.state.classNameGray
																			  },
								                                                    
										                                    },
										                                  ],//3 levels
						                                                    
								                                    },
								                                  ],//3 levels
				                                                    
						                                    },
						                                  ],//3 levels
		                                                    
		                                    },
		                                  ],//3 levels

                                    },
                                  ],//3 levels
              },
              {
                name: 'Language', date: 2009,
                gProps:{
			    	className: this.state.classNameGreen,
			    	onClick: this.openModal,

			    },
                    //Extrachild
                    children: [
                            {
                              	name: 'English', date: 2009,
								 gProps:{
									className: this.state.classNameGray,
									onClick: this.openModal,

								},
								pathProps:{
									className: this.state.classNameGray,
									onClick: this.openModal,

								},

	                              //3 levels
	                                 children: [
	                                      {
	                                        name: 'eLevel 1', date: 2010,
	                                    	gProps:{
												className: this.state.classNameGray,
												onClick: this.openModal,

											},
											pathProps:{
												className: this.state.classNameGray
											},
	                                          children: [
	                                              {
	                                                name: 'eLevel 2',date: 2011,
	                                               gProps:{
														className: this.state.classNameGray,
														onClick: this.openModal,

													},
													pathProps:{
														className: this.state.classNameGray
													},
	                                                     children: [
	                                                        {
	                                                          name: 'eLevel 3', date: 2012,
	                                                           gProps:{
																	className: this.state.classNameGray,
																	onClick: this.openModal,

																},
																pathProps:{
																	className: this.state.classNameGray
																},                                                                          
	                                                        },
	                                                      ],                             
	                                              },
	                                          ],                         
	                                      },
	                                    ],//3 levels
                        },
				              {
				                name: 'German', date: 2011,
				                gProps:{
							    	className: this.state.classNameGreen,
							    	onClick: this.openModal,

							    },
				                              //3 levels
				                                 children: [
				                                      {
				                                        name: 'glevel 1', date: 2011,
				                                        label: 'yolo',
				                                        gProps:{
													    	className: this.state.classNameGreen,
													    	onClick: this.openModal,

													    },
				                                          children: [
				                                              {
				                                                name: 'gLevel 2', date: 2011,
				                                                gProps:{
															    	className: this.state.classNameGreen,
															    	onClick: this.openModal,

															    },
				                                                     children: [
				                                                        {
				                                                          name: 'gLevel 3', date: 2017,
				                                                          gProps:{
																		    	className: this.state.classNameGreen,
																		    	onClick: this.openModal,

																		    },                                                                          
				                                                        },
				                                                      ],                             
				                                              },
				                                          ],                         
				                                      },
				                                    ],//3 levels
				                            
				               },

                    ], //Extrachild end
                
          },
    ]
  }
 
  console.log('data',user1.MedicalAid.lvl1.subCatTwo)
  console.log('the State',data.children[0].children[0].date)
var selectValue=this.state.value
console.log(this.state.user, this.tasksLeft())
    return (
<div>

 <div className="custom-container">
<div class="form-group">
  <label for="sel1">See what has been achieved since "your choice"</label>
  <select value={this.state.value} onChange={this.handleChange} class="form-control" id="sel1">
  	<option value='0'>All Time</option>
    <option value='2017'>1 year</option>
	<option value='2014'>3 years</option>
    <option value='2012'>5 years</option>
    <option value='2007'>10 years</option>
  </select>
  <select value={this.state.user} onChange={this.handleUser} class="form-control" id="sel2">
  	<option value='user1'>user 1</option>
    <option value='user2'>user 2</option>
  </select>
</div>

<Modal

          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel=""
        >
       
          <h2 ref={subtitle => this.subtitle = subtitle}>{this.state.nodeName}</h2>
          <button onClick={this.closeModal}>close</button>
          <div>{this.state.date}</div>
          <Radar
		  width={500}
		  height={500}
		  padding={70}
		  domainMax={10}
		  highlighted={null}
		  onHover={(point) => {
		    if (point) {
		    	// If we want an event on the radar diagram on hover
		      console.log('hovered over a data point');
		    } else {
		      console.log('not over anything');
		    }
		  }}
		  data={{
		    variables: [
		      
		      {key: this.state.subCat1, label: this.state.subCat1},
		      {key: this.state.subCat2, label: this.state.subCat2},
		      {key: this.state.subCat3, label: this.state.subCat3},
		      
		    ],
		    sets: [
		      {
		        key: 'me',
		        label: 'My Scores',
		        values: {

		        	//Child care
					Cooking: this.state.subCatOne,
					Homework: this.state.subCatTwo,
					Cleaning: this.state.subCatThree,

		        	

					//Medical aid
					EmergencyAid: this.state.subCatOne,
					Nursing: this.state.subCatTwo,
					Checkups: this.state.subCatThree,

					//Leadership
					LeadingKids: this.state.subCatOne,
					LeadingTeenagers: this.state.subCatTwo,
					LeadingAdults: this.state.subCatThree,

					//Language
					Speaking: this.state.subCatOne,
					Writing: this.state.subCatTwo,
					Reading: this.state.subCatThree,

		        },
		      },
		      {
		        key: 'everyone',
		        label: 'Everyone',
		        values: {

		        	//Child care
					Cooking: this.state.subCatOneReq,
					Homework: this.state.subCatTwoReq,
					Cleaning: this.state.subCatThreeReq,

		        	//Language
					Speaking: this.state.subCatOneReq,
					Writing: this.state.subCatTwoReq,
					Reading: this.state.subCatThreeReq,

					//Medical aid
					EmergencyAid: this.state.subCatOneReq,
					Nursing: this.state.subCatTwoReq,
					Checkups: this.state.subCatThreeReq,

					//Leadership
					LeadingKids: this.state.subCatOneReq,
					LeadingTeenagers: this.state.subCatTwoReq,
					LeadingAdults: this.state.subCatThreeReq,



		          // yolo: 80,
		          // childCare: 5,
		          // adaptability: 6,
		          // creativity: 4,
		          // openness: 2,
		          // confidence: 0,
		        },
		      },
		    ],
		  }}
		/>
		<div>{this.tasksLeft()} total tasks until full level</div>
		<div style={{color: 'orange'}}> Orange=Required task in each subcategory to levels</div>
        <div style={{color: 'blue'}}>Blue=Completed tasks in each subcategory</div> 

        </Modal>

		<Tree 
		    data={data}
		    height={700}
		    width={700}
		    nodeRadius={10}
		    margins={{ bottom : 10, left : 20, right : 100, top : 10}}
			getChildren={function getChildren(n) { 
								    	if (n.date>=selectValue){		    		
											return n.children;
										}
								  }
						}
		    

		    gProps={{onClick: this.openModal}}
		    pathProps={{className: 'link'}}
		    
		    svgProps={{
				transform: 'rotate(90)'
			}}
			
			
			textProps={{
				transform: 'rotate(270)'}}
		/>


		

	</div>
	 
	</div>
    )}


}



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