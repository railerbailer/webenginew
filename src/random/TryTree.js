import React from 'react';
import Tree from 'react-d3-tree';
 const myTreeData = [
  {
    name: '',
    // attributes: {
    //   keyA: 'val A',
    //   keyB: 'val B',
    //   keyC: 'val C',
    // },


    // FIRST CHILD
    children: [
              {
                name: 'Child Care',
                circle: 'rect',
                            //Three levels
                               children: [
                                    {
                                      name: 'Level one',
                                        children: [
                                            {
                                              name: 'Level Two',
                                              attributes: {
                                                ToEvolve: 'Complete 7 more tasks',  
                                              },
                                                                              
                                            },
                                        ],                         
                                    },
                                  ],//Three levels
              },
              {
                name: 'Leadership',
                            //Three levels
                               children: [
                                    {
                                      name: 'Level one',
                                        attributes: {
                                                ToEvolve: 'Complete 7 more tasks',  
                                              },                       
                                    },
                                  ],//Three levels
              },

              {
                name: 'Medical Aid',
                            attributes: {
                              ToEvolve: 'Complete 12 more tasks',  
                            },
              },
              {
                name: 'Language',
                    //Extrachild
                    children: [
                            {
                              name: 'English',


                              //Three levels
                                 children: [
                                      {
                                        name: 'Level one',
                                          children: [
                                              {
                                                name: 'Level Two',
                                                     children: [
                                                        {
                                                          name: 'Level Three',                                                                          
                                                        },
                                                      ],                             
                                              },
                                          ],                         
                                      },
                                    ],//Three levels
                        },
                        {
                          name: 'German',
                              //Three levels
                                 children: [
                                      {
                                        name: 'Level one',
                                          children: [
                                              {
                                                name: 'Level Two',
                                                     children: [
                                                        {
                                                          name: 'Level Three',                                                                          
                                                        },
                                                      ],                             
                                              },
                                          ],                         
                                      },
                                    ],//Three levels
                            
                        },

                    ], //Extrachild end
                
          },

    ],

   
  },
];

 
export default class MyComponent extends React.Component {

  constructor(props){
    super(props);
    this.state={

    }
  }

  mouseOver(){

  }
  render() {
    // const svgSquare = {
    //   shape: 'polygon',
    //   shapeProps: {
     
    //    points: '50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180'
    //   }
    // }


    return (
  
      <div id="treeWrapper" style={{width: '50em', height: '50em'}}>
 
        <Tree 
        nodeSize={{x: '140', y: '140'}}
        data={myTreeData} 
        orientation="vertical bottom-to-top"
        scaleExtent={{min: '0.1', max: '1'}}
        translate={{x: 400, y: 20}}
        initialDepth='1'
        pathFunc='straight'
        

          />
 
      </div>
    );
  }
}