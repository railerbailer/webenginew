import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeGraph from './components/TreeGraph'
import {db} from './database/firebase'
import ProfilePic from './pictures/img_girl.jpg'
import {FCalendar} from './components/FullCalendar'
import LineChart from './components/LineChart'


class App extends Component {
  constructor(){
    super();
    this.state={
      heading: 'To get started, edit <code>src/App.js</code> and save to reload.',
      docData: 'bög'
    }
  }

// Code for the DB if wanted

// addData(){
//           //Add 1QZm1W1NgVPpqAxIILHF
//     db.collection("users").add({
//         first: "Ralleballe",
//         last: "böggatan", 
//         born: 'din mamma',
//         heading: this.state.heading
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// }
//  updateData() {
//   const batch = db.batch();
//   const sfRef = db.collection("users").doc("hey");
//   batch.update(sfRef, {"hehehe": this.state.docData});
//   return batch.commit()
//   console.log()
//   }

//   componentWillMount(){
//     this.updateData();
//      //Write
//      const laRef = db.doc("users/hey")
//      laRef.get().then((doc)=>{
//       if(doc && doc.exists) {
//         const myData = doc.data();
        
//         this.setState({docData: myData.hehehe})
        
        
//       }
//     })}




     
  
  componentDidMount(){
//           $(document).ready(function() {
//         $('#calendar').fullCalendar({
//         aspectRatio: 1.35,
//         height: 470
//     })

// });
  }



  render() {
     

      


    
   //  const laRef = db.doc("users/hey")
   // laRef.onSnapshot((doc)=> {
   //      console.log("Current data: ", doc && doc.data());
   //  });
    
    return (
       <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <div class="card card-body">
              <h4 class="card-title">Profile</h4>
              <img src={ProfilePic} alt="profil's pic" width="100%"/>
              <p class="card-text">
                <b>Name:</b> Alice Smith <br/>
                <b>Age:</b> 25 <br/>
                <b>Phone number:</b> +43 664 3222330 <br/>
                <b>E-mail:</b> alice_smith@gmail.com
              </p>
            </div>
            <div class="card card-body">
              <h4 class="card-title">Tasks</h4>
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#1" data-toggle="tab">Pending</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#2" data-toggle="tab">Assigned</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#3" data-toggle="tab">Completed</a>
                  </li>
                </ul>
                <div class="tab-content ">
                  <div class="tab-pane active" id="1">
                    <li>Delivering meals to elderly, Linz</li>
                    <li>Driver for service organisation, Linz</li>
                    <li>Animal carer, Wels</li>
                    <li>Working as entertainer in an assisted living center, Tirol</li>
                    <li>Help with organization of a music festival, Salzburg</li>
                  </div>
                  <div class="tab-pane" id="2">
                    <li>Restoration works in Aggstein</li>
                    <li>Animal care in the Zoo, Wien</li>
                    <li>Working as entertainer in hospital, Graz</li>
                    <li>Delivering meals to elderly, Wels</li>
                  </div>
                  <div class="tab-pane" id="3">
                    <li>Child care, Linz</li>
                    <li>Help with organization of a festival, Graz</li>
                    <li>Worker for a dog shelter, Wien</li>
                  </div>
                </div>
            </div>
            <div class="card card-body">
              <h4 class="card-title">Calendar</h4>
                <div id='calendar'><FCalendar/></div>
            </div>
          </div>

          <div class="col-7">
            <div class="card card-body">

              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#10" data-toggle="tab">Competences</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#20" data-toggle="tab">Past Progress</a>
                </li>
               
              </ul>
              <div class="tab-content ">
                 <div class="tab-pane active" id="10">
                 <br/>
                     <h4 class="card-title">Graph Competence</h4>
                     <button type="button" class="btn btn-info custom" data-toggle="modal" data-target="#myModal">?</button>
                     <TreeGraph/>
                 </div>
                <div class="tab-pane" id="20">
                <br/>
                <h4 class="card-title">Competence evolution</h4>
                  <LineChart/>
               </div>
               
              </div>
          

             
                










                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Graph Competence</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        The graph provides you with the graphical representation of your level of competence in various categories. Every branch represents specific category of volunteer activity. After reaching new level through completing tasks new nodes will be appeared.
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div class="col-2">
            <div class="card card-body">
              <h4 class="card-title">News Feed</h4>
                <ul class="list-group">
                  <li class="list-group-item" data-toggle="modal" data-target="#news_1">Volunteer needed by Red Cross for working in the nurse position, Feb 12</li>
                    <div class="modal fade" id="news_1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Task description</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            Substite nurse required by Red Cross in Klagenfurt for two weeks, to fill the position until the new specialist arrives. Nursing or medical education is preferred, though not mandatory, if you have an experience in related positions. Please aplly till<br/>
                            <b>Date:</b> February 12<br/>
                            <b>Required competence:</b> Medicine Level 2<br/>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  <li class="list-group-item" data-toggle="modal" data-target="#news_2">Restoration works, Feb 14</li>
                    <div class="modal fade" id="news_2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Task description</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            Restoration works will be taking place in Aggstein. The volunteers should be ready to work 4 h per day and be able to do simpe auxiliary tasks - setting up scaffolds, moving materials, performing various errands of the restoration personnel.<br/>
                            <b>Date:</b> February 14<br/>
                            <b>Required competence:</b> No prerequisites<br/>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  <li class="list-group-item" data-toggle="modal" data-target="#news_3">Accessory works on the music festival, Feb 21</li>
                    <div class="modal fade" id="news_3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Task description</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                             Volunteer for music festival in Salzburg. Good physical training will be a benefit, because a lot of heavyweight items will need to be moved during the preparation for the festival. There will be also a lot of tasks related to organizing the reception of people who come to visit the festial and providing them with required info and assistance.<br/>
                            <b>Date:</b> February 21<br/>
                            <b>Required competence:</b> No prerequisites
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  <li class="list-group-item" data-toggle="modal" data-target="#news_4">Animal care, Mar 1</li>
                    <div class="modal fade" id="news_4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Task description</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            Volunteer for the Zoo is needed. The duties are to feed and take care after the birds to substitute for regular specialist until the position is filled. <br/>
                            <b>Date:</b> March 1<br/>
                            <b>Required competence:</b> No prerequisites
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </ul>
            </div>
            <div class="card card-body">
              <h4 class="card-title">Evolve tip</h4>
               <ul class="list-group">
                  <li class="list-group-item"><b>Tip#1</b> Take one more task in <u>Medicine</u> to get the next level!</li>
                  <li class="list-group-item"><b>Tip#2</b> You need to complete just two more tasks to reach the maximum level in <u>Animal care</u>!</li>
                  <li class="list-group-item"><b>Tip#3</b> How about starting to work in the <u>Events activity</u>?</li>
                </ul>
            </div>
          </div>
        </div>
    </div>

   
    );
  }

}

export default App;
