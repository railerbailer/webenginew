import Tree from 'react-tree-graph';
import { easeElastic } from 'd3-ease';
import React, { Component, Text } from 'react';
 import '../App.css';
 import 'react-tree-graph/dist/style.css'
 import Modal from 'react-modal'
 import Radar from 'react-d3-radar'
 import {databaseOtherUser, database, treeObj, treeObj2} from './Constants'






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
 			
 			lineData: database,

 			subCatOne: 1,
 			subCatTwo: 1,
 			subCatThree: 1,

 			theData: treeObj,
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

    	    	

				if (nodeKey==='Language'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.Language.base.subCatOne,
		 				subCatTwo: this.state.lineData.Language.base.subCatTwo,
		 				subCatThree: this.state.lineData.Language.base.subCatThree, 

		 				subCatOneReq: 3,
		 				subCatTwoReq: 3,
		 				subCatThreeReq: 3, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='German'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.German.base.subCatOne,
		 				subCatTwo: this.state.lineData.German.base.subCatTwo,
		 				subCatThree: this.state.lineData.German.base.subCatThree, 

		 				subCatOneReq: 3,
		 				subCatTwoReq: 3,
		 				subCatThreeReq: 3, 

		 				})
	    	  

	    	    }
	    	     if (nodeKey==='glevel 1'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.German.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.German.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.German.lvl1.subCatThree, 

		 				subCatOneReq: 3,
		 				subCatTwoReq: 3,
		 				subCatThreeReq: 3, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='gLevel 2'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.German.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.German.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.German.lvl2.subCatThree, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='gLevel 3'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	     subCatOne: this.state.lineData.German.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.German.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.German.lvl3.subCatThree, 

		 				subCatOneReq: 7,
		 				subCatTwoReq: 7,
		 				subCatThreeReq: 9, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='English'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.English.base.subCatOne,
		 				subCatTwo: this.state.lineData.English.base.subCatTwo,
		 				subCatThree: this.state.lineData.English.base.subCatThree, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 7,
		 				subCatThreeReq: 4, 

		 				})
	    	  

	    	    }
	    	     if (nodeKey==='eLevel 1'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.English.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.English.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.English.lvl1.subCatThree,

		 				subCatOneReq: 5,
		 				subCatTwoReq: 8,
		 				subCatThreeReq: 5, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='eLevel 2'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.English.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.English.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.English.lvl2.subCatThree,

		 				subCatOneReq: 6,
		 				subCatTwoReq: 8,
		 				subCatThreeReq: 6, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='eLevel 3'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.English.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.English.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.English.lvl3.subCatThree,

		 				subCatOneReq: 10,
		 				subCatTwoReq: 10,
		 				subCatThreeReq: 10, 

		 				})
	    	  

	    	    }
	    	   

				if (nodeKey==='Medical Aid'){
	    	    	this.setState({
			    	    subCat1: 'EmergencyAid', 
		 				subCat2: 'Nursing', 
		 				subCat3: 'Checkups',

			    	    subCatOne: this.state.lineData.MedicalAid.base.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.base.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.base.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl1.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl2.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl3.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl4.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl4.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl4.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl5.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl5.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl5.subCatThree, 

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

			    	    subCatOne: this.state.lineData.Leadership.base.subCatOne,
		 				subCatTwo: this.state.lineData.Leadership.base.subCatTwo,
		 				subCatThree: this.state.lineData.Leadership.base.subCatThree, 

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

			    	    subCatOne: this.state.lineData.Leadership.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.Leadership.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.Leadership.lvl1.subCatThree, 

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

			    	    subCatOne: this.state.lineData.Leadership.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.Leadership.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.Leadership.lvl2.subCatThree,

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

			    	    subCatOne: this.state.lineData.Leadership.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.Leadership.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.Leadership.lvl3.subCatThree, 

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

			    	    subCatOne: this.state.lineData.ChildCare.base.subCatOne,
		 				subCatTwo: this.state.lineData.ChildCare.base.subCatTwo,
		 				subCatThree: this.state.lineData.ChildCare.base.subCatThree,

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

			    	    subCatOne: this.state.lineData.ChildCare.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.ChildCare.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.ChildCare.lvl1.subCatThree,

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

			    	    subCatOne: this.state.lineData.ChildCare.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.ChildCare.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.ChildCare.lvl2.subCatThree,

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

			    	    subCatOne: this.state.lineData.ChildCare.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.ChildCare.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.ChildCare.lvl3.subCatThree,

		 				subCatOneReq: 9,
		 				subCatTwoReq: 2,
		 				subCatThreeReq: 3, 

		 				})
	    	    	
	    	    }




	    	  
	    	    
	    	    

    	    }

    	     if (this.state.user==='user2'){

    	    	

				if (nodeKey==='Language'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.Language.base.subCatOne,
		 				subCatTwo: this.state.lineData.Language.base.subCatTwo,
		 				subCatThree: this.state.lineData.Language.base.subCatThree, 

		 				subCatOneReq: 3,
		 				subCatTwoReq: 3,
		 				subCatThreeReq: 3, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='German'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.German.base.subCatOne,
		 				subCatTwo: this.state.lineData.German.base.subCatTwo,
		 				subCatThree: this.state.lineData.German.base.subCatThree, 

		 				subCatOneReq: 3,
		 				subCatTwoReq: 3,
		 				subCatThreeReq: 3, 

		 				})
	    	  

	    	    }
	    	     if (nodeKey==='glevel 1'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.German.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.German.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.German.lvl1.subCatThree, 

		 				subCatOneReq: 3,
		 				subCatTwoReq: 3,
		 				subCatThreeReq: 3, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='gLevel 2'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.German.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.German.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.German.lvl2.subCatThree, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='gLevel 3'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	     subCatOne: this.state.lineData.German.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.German.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.German.lvl3.subCatThree, 

		 				subCatOneReq: 7,
		 				subCatTwoReq: 7,
		 				subCatThreeReq: 9, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='English'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.English.base.subCatOne,
		 				subCatTwo: this.state.lineData.English.base.subCatTwo,
		 				subCatThree: this.state.lineData.English.base.subCatThree, 

		 				subCatOneReq: 4,
		 				subCatTwoReq: 7,
		 				subCatThreeReq: 4, 

		 				})
	    	  

	    	    }
	    	     if (nodeKey==='eLevel 1'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.English.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.English.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.English.lvl1.subCatThree,

		 				subCatOneReq: 5,
		 				subCatTwoReq: 8,
		 				subCatThreeReq: 5, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='eLevel 2'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.English.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.English.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.English.lvl2.subCatThree,

		 				subCatOneReq: 6,
		 				subCatTwoReq: 8,
		 				subCatThreeReq: 6, 

		 				})
	    	  

	    	    }
	    	    if (nodeKey==='eLevel 3'){
	    	    	this.setState({
			    	    subCat1: 'Speaking', 
		 				subCat2: 'Writing', 
		 				subCat3: 'Reading',

			    	    subCatOne: this.state.lineData.English.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.English.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.English.lvl3.subCatThree,

		 				subCatOneReq: 10,
		 				subCatTwoReq: 10,
		 				subCatThreeReq: 10, 

		 				})
	    	  

	    	    }
	    	   

				if (nodeKey==='Medical Aid'){
	    	    	this.setState({
			    	    subCat1: 'EmergencyAid', 
		 				subCat2: 'Nursing', 
		 				subCat3: 'Checkups',

			    	    subCatOne: this.state.lineData.MedicalAid.base.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.base.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.base.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl1.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl2.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl3.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl4.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl4.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl4.subCatThree, 

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

			    	    subCatOne: this.state.lineData.MedicalAid.lvl5.subCatOne,
		 				subCatTwo: this.state.lineData.MedicalAid.lvl5.subCatTwo,
		 				subCatThree: this.state.lineData.MedicalAid.lvl5.subCatThree, 

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

			    	    subCatOne: this.state.lineData.Leadership.base.subCatOne,
		 				subCatTwo: this.state.lineData.Leadership.base.subCatTwo,
		 				subCatThree: this.state.lineData.Leadership.base.subCatThree, 

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

			    	    subCatOne: this.state.lineData.Leadership.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.Leadership.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.Leadership.lvl1.subCatThree, 

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

			    	    subCatOne: this.state.lineData.Leadership.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.Leadership.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.Leadership.lvl2.subCatThree,

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

			    	    subCatOne: this.state.lineData.Leadership.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.Leadership.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.Leadership.lvl3.subCatThree, 

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

			    	    subCatOne: this.state.lineData.ChildCare.base.subCatOne,
		 				subCatTwo: this.state.lineData.ChildCare.base.subCatTwo,
		 				subCatThree: this.state.lineData.ChildCare.base.subCatThree,

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

			    	    subCatOne: this.state.lineData.ChildCare.lvl1.subCatOne,
		 				subCatTwo: this.state.lineData.ChildCare.lvl1.subCatTwo,
		 				subCatThree: this.state.lineData.ChildCare.lvl1.subCatThree,

		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    	
	    	    }
	    	    if (nodeKey==='ccLevel2'){
	    	    	this.setState({
			    	    subCat1: 'Cooking', 
		 				subCat2: 'Homework', 
		 				subCat3: 'Cleaning',

			    	    subCatOne: this.state.lineData.ChildCare.lvl2.subCatOne,
		 				subCatTwo: this.state.lineData.ChildCare.lvl2.subCatTwo,
		 				subCatThree: this.state.lineData.ChildCare.lvl2.subCatThree,

		 				
		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    	
	    	    }
	    	    if (nodeKey==='cLevel3'){
	    	    	this.setState({
			    	    subCat1: 'Nursing', 
		 				subCat2: 'Homework', 
		 				subCat3: 'Cleaning',

			    	    subCatOne: this.state.lineData.ChildCare.lvl3.subCatOne,
		 				subCatTwo: this.state.lineData.ChildCare.lvl3.subCatTwo,
		 				subCatThree: this.state.lineData.ChildCare.lvl3.subCatThree,

		 				
		 				subCatOneReq: 4,
		 				subCatTwoReq: 4,
		 				subCatThreeReq: 4, 

		 				})
	    	    	
	    	    }




    	    
    	    
    	    
  }}

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
  setData(){
  			if (this.state.user==='user1'){
  				this.setState({theData: treeObj2, lineData: databaseOtherUser})
  			}
  			if (this.state.user==='user2'){
  				this.setState({theData: treeObj, lineData: database})

  			}
  }

  handleUser(event) {
    this.setState({
    	user: event.target.value,
 

    });
    this.setData()
    
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
	gameProps: {className: 'gray-node'},

})
	
}


  render() {



		function onMouseOver(nodeKey) {
		  		return alert(nodeKey)  		
			}

		function onClick(nodeKey) {
		  		return nodeKey
		  		
		}

		
		 const data=this.state.theData
		console.log('data',this.state.lineData)
		console.log('the State',data.children[0].children[0].date)
		var selectValue=this.state.value
		console.log(this.state.user, this.state.theData)
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
				<div>{this.tasksLeft()} tasks left</div>
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