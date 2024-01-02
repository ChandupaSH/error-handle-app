import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import  '../components/Register.css';

const AdminUser = () => {
    const [isClose1 , setIsClose1] = useState(true)
    const [isClose2 , setIsClose2] = useState(true)
    const [isClose3 , setIsClose3] = useState(true)
    const [isClose4 , setIsClose4] = useState(true)
  return (
    <div style={{
        height: '100vh',
        backgroundColor: '#0F0F0F',
        color: 'white',
        fontSize: '17px'
    }}>
       

      <div style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ 
            fontSize: '30px',
            marginLeft: '5vw',
        }}>Users</span>

        <button style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            marginTop: '2vw',
            marginRight: '2vw',
            color: 'black',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            paddingLeft: '10px',
            opacity: '0.8'
        }}>
            <span>Add User</span>
            <AddIcon style={{fontSize: '25px'}}/>
        </button>
      </div>
      

      <div style={{
        width: '100%',
      }}>
        <div style={{
            width: '100%',
            marginTop: '10px'
        }}>
            <div style={{
                backgroundColor: '#363639',
                width: '90%',
                marginLeft: '5vw',
                borderRadius: '7vw',
                paddingLeft: '',
                paddingBottom: '3vw',
                paddingTop: '2vw'
            }}>

                <span style={{
                    height: '30px',
                    marginLeft: '6%'
                }} 
                onClick={() => setIsClose1(isClose1 === true ? false : true)}>
                12345 Ridmi</span><br/>

                {isClose1 ? null : 
                <div style={{width: '100%'}}>
                    <div style={{
                        width: '90%',
                        backgroundColor: '#4B4B4B',
                        marginLeft: '5%',
                        borderRadius: '10px',
                        height: '18vw',
                        marginTop: '4vw',
                        paddingTop: '8px'
                    }}>
                        <span style={{ 
                            marginLeft: '3vw',
                            paddingTop: '10px'
                        }}>Age : 25</span><br/>
                        <div style={{
                            backgroundColor: '#200505',
                            borderRadius: '10px',
                            height: '30px',
                            paddingLeft: '2%',
                            width: '90%',
                            marginLeft: '3%',
                            marginTop: '2vw',
                            textAlign: 'center'
                        }}>Requrired</div>
                    </div>

                    <div style={{
                            marginLeft: '5vw',
                            width: '90%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '2vw'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    width: '48%',
                                    height: '15vw',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span>Mark Today</span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    width: '48%',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}> <span>Add Paymount</span></div>
                            </div>

                        <div style={{
                            width: '100%',
                            marginTop:'2vw',
                            fontSize: '14px'
                            }}>
                            <span style={{marginLeft: '5%',}}>Next Paymont Day</span>
                            <span style={{color: '#00FF0A'}}>2024 02 03</span>
                        </div>
                        

                        <div style={{
                                    marginLeft: '5%',
                                    width: '90%',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '1vw'

                        }}>
                            <span>Change the date and add paymount</span>
                        </div>

                        <button style={{
                            marginLeft: '5vw',
                            marginTop: '2vw',
                            width: '30vw',
                            fontSize: '16px',
                            height: '30px',
                            backgroundColor: '#970000',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '15px',
                            color: 'white'
                        }}>Delete</button>
                </div>}

            </div>

        </div>

        <div style={{
            width: '100%',
            marginTop: '10px'
        }}>
            <div style={{
                backgroundColor: '#363639',
                width: '90%',
                marginLeft: '5vw',
                borderRadius: '7vw',
                paddingLeft: '',
                paddingBottom: '3vw',
                paddingTop: '2vw'
            }}>

                <span style={{
                    height: '30px',
                    marginLeft: '6%'
                }} 
                onClick={() => setIsClose2(isClose2 === true ? false : true)}>
                12345 Ridmi</span><br/>

                {isClose2 ? null : 
                <div style={{width: '100%'}}>
                    <div style={{
                        width: '90%',
                        backgroundColor: '#4B4B4B',
                        marginLeft: '5%',
                        borderRadius: '10px',
                        height: '18vw',
                        marginTop: '4vw',
                        paddingTop: '8px'
                    }}>
                        <span style={{ 
                            marginLeft: '3vw',
                            marginTop: '2vw'
                        }}>Age : 25</span><br/>
                        <div style={{
                            backgroundColor: '#200505',
                            borderRadius: '10px',
                            height: '30px',
                            paddingLeft: '2%',
                            width: '90%',
                            marginLeft: '3%',
                            marginTop: '2vw'
                        }}>Requrired</div>
                    </div>

                    <div style={{
                            marginLeft: '5vw',
                            width: '90%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '2vw'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    width: '48%',
                                    height: '15vw',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span>Mark Today</span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    width: '48%',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}> <span>Add Paymount</span></div>
                            </div>

                        <div style={{
                            width: '100%',
                            marginTop:'2vw',
                            fontSize: '14px'
                            }}>
                            <span style={{marginLeft: '5%',}}>Next Paymont Day</span>
                            <span style={{color: '#00FF0A'}}>2024 02 03</span>
                        </div>
                        

                        <div style={{
                                    marginLeft: '5%',
                                    width: '90%',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '1vw'

                        }}>
                            <span>Change the date and add paymount</span>
                        </div>

                        <button style={{
                            marginLeft: '5vw',
                            marginTop: '2vw',
                            width: '30vw',
                            fontSize: '16px',
                            height: '30px',
                            backgroundColor: '#970000',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '15px',
                            color: 'white'
                        }}>Delete</button>
                </div>}

            </div>

        </div>

        <div style={{
            width: '100%',
            marginTop: '10px'
        }}>
            <div style={{
                backgroundColor: '#363639',
                width: '90%',
                marginLeft: '5vw',
                borderRadius: '7vw',
                paddingLeft: '',
                paddingBottom: '3vw',
                paddingTop: '2vw'
            }}>

                <span style={{
                    height: '30px',
                    marginLeft: '6%'
                }} 
                onClick={() => setIsClose3(isClose3 === true ? false : true)}>
                12345 Ridmi</span><br/>

                {isClose3 ? null : 
                <div style={{width: '100%'}}>
                    <div style={{
                        width: '90%',
                        backgroundColor: '#4B4B4B',
                        marginLeft: '5%',
                        borderRadius: '10px',
                        height: '18vw',
                        marginTop: '4vw',
                        paddingTop: '8px'
                    }}>
                        <span style={{ 
                            marginLeft: '3vw',
                            marginTop: '2vw'
                        }}>Age : 25</span><br/>
                        <div style={{
                            backgroundColor: '#200505',
                            borderRadius: '10px',
                            height: '30px',
                            paddingLeft: '2%',
                            width: '90%',
                            marginLeft: '3%',
                            marginTop: '2vw'
                        }}>Requrired</div>
                    </div>

                    <div style={{
                            marginLeft: '5vw',
                            width: '90%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '2vw'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    width: '48%',
                                    height: '15vw',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span>Mark Today</span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    width: '48%',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}> <span>Add Paymount</span></div>
                            </div>

                        <div style={{
                            width: '100%',
                            marginTop:'2vw',
                            fontSize: '14px'
                            }}>
                            <span style={{marginLeft: '5%',}}>Next Paymont Day</span>
                            <span style={{color: '#00FF0A'}}>2024 02 03</span>
                        </div>
                        

                        <div style={{
                                    marginLeft: '5%',
                                    width: '90%',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '1vw'

                        }}>
                            <span>Change the date and add paymount</span>
                        </div>

                        <button style={{
                            marginLeft: '5vw',
                            marginTop: '2vw',
                            width: '30vw',
                            fontSize: '16px',
                            height: '30px',
                            backgroundColor: '#970000',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '15px',
                            color: 'white'
                        }}>Delete</button>
                </div>}

            </div>

        </div>

        <div style={{
            width: '100%',
            marginTop: '10px'
        }}>
            <div style={{
                backgroundColor: '#363639',
                width: '90%',
                marginLeft: '5vw',
                borderRadius: '7vw',
                paddingLeft: '',
                paddingBottom: '3vw',
                paddingTop: '2vw'
            }}>

                <span style={{
                    height: '30px',
                    marginLeft: '6%'
                }} 
                onClick={() => setIsClose4(isClose4 === true ? false : true)}>
                12345 Ridmi</span><br/>

                {isClose4 ? null : 
                <div style={{width: '100%'}}>
                    <div style={{
                        width: '90%',
                        backgroundColor: '#4B4B4B',
                        marginLeft: '5%',
                        borderRadius: '10px',
                        height: '18vw',
                        marginTop: '4vw',
                        paddingTop: '8px'
                    }}>
                        <span style={{ 
                            marginLeft: '3vw',
                            marginTop: '2vw'
                        }}>Age : 25</span><br/>
                        <div style={{
                            backgroundColor: '#200505',
                            borderRadius: '10px',
                            height: '30px',
                            paddingLeft: '2%',
                            width: '90%',
                            marginLeft: '3%',
                            marginTop: '2vw'
                        }}>Requrired</div>
                    </div>

                    <div style={{
                            marginLeft: '5vw',
                            width: '90%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '2vw'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    width: '48%',
                                    height: '15vw',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span>Mark Today</span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    width: '48%',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}> <span>Add Paymount</span></div>
                            </div>

                        <div style={{
                            width: '100%',
                            marginTop:'2vw',
                            fontSize: '14px'
                            }}>
                            <span style={{marginLeft: '5%',}}>Next Paymont Day</span>
                            <span style={{color: '#00FF0A'}}>2024 02 03</span>
                        </div>
                        

                        <div style={{
                                    marginLeft: '5%',
                                    width: '90%',
                                    border: '1px white solid',
                                    outline: 'none',
                                    backgroundColor: '#151C1D',
                                    borderRadius: '10px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '1vw'

                        }}>
                            <span>Change the date and add paymount</span>
                        </div>

                        <button style={{
                            marginLeft: '5vw',
                            marginTop: '2vw',
                            width: '30vw',
                            fontSize: '16px',
                            height: '30px',
                            backgroundColor: '#970000',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '15px',
                            color: 'white'
                        }}>Delete</button>
                </div>}

            </div>

        </div>
      </div>
    </div>
  )
}

export default AdminUser
