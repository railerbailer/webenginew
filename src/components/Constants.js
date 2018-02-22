export const databaseEvo = [
      {name: 'Basic', ChildCare: 2005, Leadership: 2010, MedicalAid: 2010, Language: 2010},
       {name: 'Level 1', ChildCare: 2006, Leadership: 2011, MedicalAid: 2011, Language: 2010},
      {name: 'Level 2', ChildCare: 2007, Leadership: 2011, MedicalAid: null, Language: 2011},
      {name: 'Level 3', ChildCare: null, Leadership: 2012, MedicalAid: null, Language: 2013},
     

];

export const databaseEvo2 = [
      {name: 'Basic', ChildCare: 2001, Leadership: null, MedicalAid: 2010, Language: 2010},
      {name: 'Level 1', ChildCare: 2006, Leadership: null, MedicalAid: 2011, Language: 2011},
      {name: 'Level 2', ChildCare: 2007, Leadership: null, MedicalAid: 2013, Language: 2014},
      {name: 'Level 3', ChildCare: 2014, Leadership: null, MedicalAid: 2015, Language: 2015},
     

];

export const treeObj2=
{
    name: 'user2',
 	gProps:{
	   	className: 'black-node',
	   
	},    
    "parent": "null",
    value: 200,
    date: 5000,
    "children": [
      			{
                name: 'Child Care', date: 2015,
                     
                circleProps:{
									    	className: 'red-node',
									    	

									   },
									   
                            //3 levels
                               children: [

                                    {
                                      name: 'cLevel1', date: 2016,
                                      circleProps:{
									    	className: 'red-node',
									    	
									   },
                                        children: [
                                            {
                                              name: 'cLevel2', date: 2016,
                                              gProps:{
											    	className: 'red-node',

											    	

											  },
											  
                                              
		                                              children: [
		                                            {
		                                              name: 'cLevel3', date:2016,
		                                              circleProps:{
													    	className: 'red-node',
													    	
													  },
													    pathProps:{
													    	className: 'red-node'
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
                circleProps:{
			    	className: 'gray-node',
			    	
			    },
                            //3 levels
                               children: [
                                    {
                                      name: 'lLevel 1', date: 2014,
                                      circleProps:{
									    	className: 'gray-node',
									    	
									   },
											   children: [
		                                    {
		                                      name: 'lLevel 2', date: 2015,
		                                      circleProps:{
											    	className: 'gray-node',
											    	
											   },
													   children: [
				                                    {
				                                      name: 'llLevel 3', date: 2016,
				                                      circleProps:{
													    	className: 'gray-node',
													    	
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
                
                circleProps:{
			    	className: 'orange-node',
			    	
			    },
			    //3 levels
                               children: [
                                    {
                                      name: 'mLevel 1', date: 2011,
                                      circleProps:{
									    	className: 'orange-node',
									    	
									   },

											   children: [
		                                    {
		                                      name: 'mLevel 2', date: 2011,
		                                       circleProps:{
													    	className: 'orange-node',
													    	
													  },
													    pathProps:{
													    	className: 'orange-node'
													  
													  },
															   children: [
						                                    {
						                                      name: 'mLevel 3', date: 2011,
						                                      circleProps:{
															    	className: 'orange-node',
															    	
															  },
															    pathProps:{
															    	className: 'gray-node'
															  },
																	  children: [
								                                    {
								                                      name: 'mLevel 4', date: 2013,
								                                      circleProps:{
																	    	className: 'gray-node',
																	    	
																	  },
																	    pathProps:{
																	    	className: 'gray-node'
																	  },
																			children: [
										                                    {
										                                      name: 'mLevel 5', date: 2015,
										                                      circleProps:{
																			    	className: 'gray-node',
																			    	
																			  },
																			    pathProps:{
																			    	className: 'gray-node'
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
                circleProps:{
			    	className: 'green-node',
			    	

			    },
                    //Extrachild
                    children: [
                            {
                              	name: 'English', date: 2009,
								 circleProps:{
									className: 'green-node',
									

								},
								

	                              //3 levels
	                                 children: [
	                                      {
	                                        name: 'eLevel 1', date: 2010,
	                                    	circleProps:{
												className: 'green-node',
												

											},
											pathProps:{
												className: 'green-node'
											},
	                                          children: [
	                                              {
	                                                name: 'eLevel 2',date: 2011,
	                                               circleProps:{
														className: 'green-node',
														

													},
													pathProps:{
														className: 'green-node'
													},
	                                                     children: [
	                                                        {
	                                                          name: 'eLevel 3', date: 2012,
	                                                           circleProps:{
																	className: 'green-node',
																	

																},
																pathProps:{
																	className: 'green-node'
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
				                circleProps:{
							    	className: 'gray-node',
							    	

							    },
				                              //3 levels
				                                 children: [
				                                      {
				                                        name: 'glevel 1', date: 2011,
				                                        label: 'yolo',
				                                        circleProps:{
													    	className: 'gray-node',
													    	

													    },
				                                          children: [
				                                              {
				                                                name: 'gLevel 2', date: 2011,
				                                                circleProps:{
															    	className: 'gray-node',
															    	

															    },
				                                                     children: [
				                                                        {
				                                                          name: 'gLevel 3', date: 2017,
				                                                          circleProps:{
																		    	className: 'gray-node',
																		    	

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

export const treeObj=
{
    name: 'user1',
 	gProps:{
	   	className: 'white-node',
	   
	},    
    "parent": "null",
    value: 200,
    date: 5000,
    "children": [
      			{
                name: 'Child Care', date: 2015,
                     
                circleProps:{
									    	className: 'red-node',
									    	

									   },
									   
                            //3 levels
                               children: [

                                    {
                                      name: 'cLevel1', date: 2016,
                                      circleProps:{
									    	className: 'red-node',
									    	
									   },
                                        children: [
                                            {
                                              name: 'cLevel2', date: 2016,
                                              gProps:{
											    	className: 'red-node',
											    	

											  },
											  
                                              attributes: {
                                                ToEvolve: 'Complete 7 more tasks',   
                                              },
		                                              children: [
		                                            {
		                                              name: 'cLevel3', date:2016,
		                                              circleProps:{
													    	className: 'gray-node',
													    	
													  },
													    pathProps:{
													    	className: 'gray-node'
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
                circleProps:{
			    	className: 'blue-node',
			    	
			    },
                            //3 levels
                               children: [
                                    {
                                      name: 'lLevel 1', date: 2014,
                                      circleProps:{
									    	className: 'blue-node',
									    	
									   },
											   children: [
		                                    {
		                                      name: 'lLevel 2', date: 2015,
		                                      circleProps:{
											    	className: 'blue-node',
											    	
											   },
													   children: [
				                                    {
				                                      name: 'llLevel 3', date: 2016,
				                                      circleProps:{
													    	className: 'blue-node',
													    	
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
                
                circleProps:{
			    	className: 'orange-node',
			    	
			    },
			    //3 levels
                               children: [
                                    {
                                      name: 'mLevel 1', date: 2011,
                                      circleProps:{
									    	className: 'orange-node',
									    	
									   },

											   children: [
		                                    {
		                                      name: 'mLevel 2', date: 2011,
		                                       circleProps:{
													    	className: 'gray-node',
													    	
													  },
													    pathProps:{
													    	className: 'gray-node'
													  
													  },
															   children: [
						                                    {
						                                      name: 'mLevel 3', date: 2011,
						                                      circleProps:{
															    	className: 'gray-node',
															    	
															  },
															    pathProps:{
															    	className: 'gray-node'
															  },
																	  children: [
								                                    {
								                                      name: 'mLevel 4', date: 2013,
								                                      circleProps:{
																	    	className: 'gray-node',
																	    	
																	  },
																	    pathProps:{
																	    	className: 'gray-node'
																	  },
																			children: [
										                                    {
										                                      name: 'mLevel 5', date: 2015,
										                                      circleProps:{
																			    	className: 'gray-node',
																			    	
																			  },
																			    pathProps:{
																			    	className: 'gray-node'
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
                circleProps:{
			    	className: 'green-node',
			    	

			    },
                    //Extrachild
                    children: [
                            {
                              	name: 'English', date: 2009,
								 circleProps:{
									className: 'gray-node',
									

								},
								pathProps:{
									className: 'gray-node',
									

								},

	                              //3 levels
	                                 children: [
	                                      {
	                                        name: 'eLevel 1', date: 2010,
	                                    	circleProps:{
												className: 'gray-node',
												

											},
											pathProps:{
												className: 'gray-node'
											},
	                                          children: [
	                                              {
	                                                name: 'eLevel 2',date: 2011,
	                                               circleProps:{
														className: 'gray-node',
														

													},
													pathProps:{
														className: 'gray-node'
													},
	                                                     children: [
	                                                        {
	                                                          name: 'eLevel 3', date: 2012,
	                                                           circleProps:{
																	className: 'gray-node',
																	

																},
																pathProps:{
																	className: 'gray-node'
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
				                circleProps:{
							    	className: 'green-node',
							    	

							    },
				                              //3 levels
				                                 children: [
				                                      {
				                                        name: 'glevel 1', date: 2011,
				                                        label: 'yolo',
				                                        circleProps:{
													    	className: 'green-node',
													    	

													    },
				                                          children: [
				                                              {
				                                                name: 'gLevel 2', date: 2011,
				                                                circleProps:{
															    	className: 'green-node',
															    	

															    },
				                                                     children: [
				                                                        {
				                                                          name: 'gLevel 3', date: 2017,
				                                                          circleProps:{
																		    	className: 'green-node',
																		    	

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

export const database =  
  {
      	English:{
      			base:{
      	      	subCatOne: 3,
      	      	subCatTwo: 3,
      	      	subCatThree: 3
      			},
      			lvl1:{
      	      	subCatOne: 3,
      	      	subCatTwo: 3,
      	      	subCatThree: 3
      			},
      			lvl2:{
      	      	subCatOne: 3,
      	      	subCatTwo: 3,
      	      	subCatThree: 3
      			},
      			lvl3:{
      	      	subCatOne: 3,
      	      	subCatTwo: 3,
      	      	subCatThree: 3
      			},		
      	},
      	     	German:{
      			base:{
      	      	subCatOne: 4,
      	      	subCatTwo: 3,
      	      	subCatThree: 3
      			},
      			lvl1:{
      	      	subCatOne: 4,
      	      	subCatTwo: 4,
      	      	subCatThree: 3
      			},
      			lvl2:{
      	      	subCatOne: 5,
      	      	subCatTwo: 5,
      	      	subCatThree: 3
      			},
      			lvl3:{
      	      	subCatOne: 9,
      	      	subCatTwo: 9,
      	      	subCatThree: 9
      			},		
      	},
      	Language:{
      			base:{
      	      	subCatOne: 3,
      	      	subCatTwo: 3,
      	      	subCatThree: 3
      			},
	
      	},
      	ChildCare:{
      			base:{
      	      	subCatOne: 5,
      	      	subCatTwo: 5,
      	      	subCatThree: 5
      			},
      			lvl1:{
      	      	subCatOne: 4,
      	      	subCatTwo: 4,
      	      	subCatThree: 4
      			},
      			lvl2:{
      	      	subCatOne: 4,
      	      	subCatTwo: 4,
      	      	subCatThree: 4
      			},
      			lvl3:{
      	      	subCatOne: 1,
      	      	subCatTwo: 1,
      	      	subCatThree: 1
      			},		
      	},
      	Leadership:{
      			base:{
      	      	subCatOne: 4,
      	      	subCatTwo: 4,
      	      	subCatThree:8
      			},
      			lvl1:{
      	      	subCatOne: 8,
      	      	subCatTwo: 8,
      	      	subCatThree: 8
      			},
      			lvl2:{
      	      	subCatOne: 9,
      	      	subCatTwo: 9,
      	      	subCatThree: 9
      			},
      			lvl3:{
      	      	subCatOne: 10,
      	      	subCatTwo: 10,
      	      	subCatThree: 10
      			},	
      	},
      	MedicalAid:{
      			base:{
      	      	subCatOne: 4,
      	      	subCatTwo: 4,
      	      	subCatThree: 4
      			},
      			lvl1:{
      	      	subCatOne: 5,
      	      	subCatTwo: 5,
      	      	subCatThree: 5
      			},
      			lvl2:{
      	      	subCatOne: 1,
      	      	subCatTwo: 1,
      	      	subCatThree: 1
      			},
      			lvl3:{
      	      	subCatOne: 0,
      	      	subCatTwo: 0,
      	      	subCatThree: 0
      			},
      			lvl4:{
      	      	subCatOne: 0,
      	      	subCatTwo: 0,
      	      	subCatThree: 0
      			},
      			lvl5:{
      	      	subCatOne: 0,
      	      	subCatTwo: 0,
      	      	subCatThree: 0
      			},
      		
      	},

  }

  export const databaseOtherUser =  
  {
      	English:{
      			base:{
      	      	subCatOne: 6,
      	      	subCatTwo: 8,
      	      	subCatThree: 7
      			},
      			lvl1:{
      	      	subCatOne: 7,
      	      	subCatTwo: 8,
      	      	subCatThree:7
      			},
      			lvl2:{
      	      	subCatOne: 8,
      	      	subCatTwo: 8,
      	      	subCatThree: 8
      			},
      			lvl3:{
      	      	subCatOne: 10,
      	      	subCatTwo: 8,
      	      	subCatThree: 10
      			},		
      	},
      	     	German:{
      			base:{
      	      	subCatOne: 2,
      	      	subCatTwo: 2,
      	      	subCatThree: 2
      			},
      			lvl1:{
      	      	subCatOne: 2,
      	      	subCatTwo: 2,
      	      	subCatThree: 2
      			},
      			lvl2:{
      	      	subCatOne: 2,
      	      	subCatTwo: 2,
      	      	subCatThree: 2
      			},
      			lvl3:{
      	      	subCatOne: 2,
      	      	subCatTwo: 2,
      	      	subCatThree: 2
      			},		
      	},
      	Language:{
      			base:{
      	      	subCatOne: 3,
      	      	subCatTwo: 3,
      	      	subCatThree: 3
      			},
	
      	},
      	ChildCare:{
      			base:{
      	      	subCatOne: 4,
      	      	subCatTwo: 4,
      	      	subCatThree: 4
      			},
      			lvl1:{
      	      	subCatOne: 5,
      	      	subCatTwo: 5,
      	      	subCatThree: 5
      			},
      			lvl2:{
      	      	subCatOne: 6,
      	      	subCatTwo: 6,
      	      	subCatThree: 6
      			},
      			lvl3:{
      	      	subCatOne: 9,
      	      	subCatTwo: 4,
      	      	subCatThree: 9
      			},		
      	},
      	Leadership:{
      			base:{
      	      	subCatOne: 1,
      	      	subCatTwo: 0,
      	      	subCatThree: 0
      			},
      			lvl1:{
      	      	subCatOne: 0,
      	      	subCatTwo: 0,
      	      	subCatThree: 0
      			},
      			lvl2:{
      	      	subCatOne: 0,
      	      	subCatTwo: 0,
      	      	subCatThree: 0
      			},
      			lvl3:{
      	      	subCatOne: 0,
      	      	subCatTwo: 0,
      	      	subCatThree: 0
      			},	
      	},
      	MedicalAid:{
      			base:{
      	      	subCatOne: 4,
      	      	subCatTwo: 4,
      	      	subCatThree: 4
      			},
      			lvl1:{
      	      	subCatOne: 5,
      	      	subCatTwo: 5,
      	      	subCatThree: 5
      			},
      			lvl2:{
      	      	subCatOne: 3,
      	      	subCatTwo: 4,
      	      	subCatThree: 3
      			},
      			lvl3:{
      	      	subCatOne: 3,
      	      	subCatTwo: 9,
      	      	subCatThree: 5
      			},
      			lvl4:{
      	      	subCatOne: 3,
      	      	subCatTwo: 3,
      	      	subCatThree: 3
      			},
      			lvl5:{
      	      	subCatOne: 1,
      	      	subCatTwo: 4,
      	      	subCatThree: 1
      			},
      		
      	},

  }