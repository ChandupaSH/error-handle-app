import  './Register.css';
import React from 'react'
import GoogleSignupButton from '../components/GoogleSignupButton';

const RegisterTab = () => {


  
    
    
  return (
    <div style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/m_reg_main_tab.png)`,
        width: '90vw',
        height: '218.25vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginLeft: '5vw',
        position: 'relative',
        top: '5vw'
    }}>
        {/* span */}
       <div style={{
        display:'flex',
        justifyContent: 'center',
        position: 'relative',
        top: '4vw'
       }}>
        <span style={{
            color: 'white',
            fontSize: '30px'
        }}>
            Register
        </span>
       </div>

       <div
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/m_reg_tab1.png)`,
            position: 'relative',
            width: '80vw',
            height: '93.96vw',
            backgroundSize: 'cover',
            left: '5vw',
            top: '6vw'
        }}>


            <div style={{ 
                // border: '1px solid black',
                position: 'relative',
                left: '5%',
                top: '3vw',
            }}>
                <span style={{
                    color:'white',
                    paddingLeft: '2%'
                    }}>Name :</span><br/>
                <input type='text' placeholder='Ridmi' style={{
                    width: '85%',
                    height: '30px',
                    borderRadius: '20px',
                    paddingLeft: '5%',
                    marginTop: '5px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white'
                }}
                />
            </div>

            <div style={{ 
                // border: '1px solid black',
                position: 'relative',
                left: '5%',
                top: '5vw'
            }}>
               <span style={{
                    color:'white',
                    paddingLeft: '2%'
                    }}>BirthDay :</span><br/>  
               <input type="date"   style={{
                    width: '80%',
                    height: '30px',
                    borderRadius: '20px',
                    paddingRight: '5%',
                    paddingLeft: '5%',
                    marginTop: '5px' ,
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white'
                    }}/> 
           </div>

           <div style={{ 
                // border: '1px solid black',
                position: 'relative',
                left: '5%',
                top: '7vw',
            }}>
                <span style={{
                    color:'white',
                    paddingLeft: '2%'
                    }}>Weight :</span><br/>
                <input type='text' placeholder='Kg' style={{
                    width: '85%',
                    height: '30px',
                    borderRadius: '20px',
                    paddingLeft: '5%',
                    marginTop: '5px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white'
                }}
                />
            </div>

           
       </div>

       <div
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/m_reg_tab2.png)`,
            position: 'relative',
            width: '80vw',
            height: '91.52vw',
            backgroundSize: 'cover',
            left: '5vw',
            top: '40px'
        }}>
            {/* span */}
            <div style={{
                display:'flex',
                justifyContent: 'center',
                position: 'relative',
                top: '2vw'
            }}>
                <span style={{
                    color: 'white',
                    fontSize: '25px'
                }}>
                    Sign Up
                </span>
            </div>

            <div style={{ 
                // border: '1px solid black',
                position: 'relative',
                left: '5%',
                top: '5vw',
            }}>
                <span style={{
                    color:'white',
                    paddingLeft: '2%'
                    }}>Email :</span><br/>
                <input type='text' placeholder='Ridmi@gmail.com' style={{
                    width: '85%',
                    height: '30px',
                    borderRadius: '20px',
                    paddingLeft: '5%',
                    marginTop: '5px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white'
                }}
                />
            </div>

            <div style={{ 
                // border: '1px solid black',
                position: 'relative',
                left: '5%',
                top: '6vw',
            }}>
                <span style={{
                    color:'white',
                    paddingLeft: '2%'
                    }}>Password :</span><br/>
                <input type='text' placeholder='******' style={{
                    width: '85%',
                    height: '30px',
                    borderRadius: '20px',
                    paddingLeft: '5%',
                    marginTop: '5px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white'
                }}
                />
            </div>

            <button 
            style={{
                position: 'relative',
                top:'10vw',
                left:'5vw',
                height: '35px',
                width:'30vw',
                borderRadius: '20px',
                color:'white',
               
            }}
            className='button1'>
                Sign Up
            </button>

            <div style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                top:'12vw',
                alignItems: 'center'
            }}>
                <hr style={{
                    width: '30vw',
                    height: '0px',
                    marginRight:'5px'
                }}/>
                <span style={{
                    fontSize:'18px',
                    color:'white',
                }}>or </span>
                <hr style={{
                    width: '30vw',
                    height: '0px',
                    marginLeft: '5px'
                }}/>
           

            </div>

            <div style={{
                position: 'relative',
                top:'1vw'
            }}>
                <GoogleSignupButton
                style={{
                    width: '90vw'
                }} /><br/>
                <span style={{
                    color:'white',
                    position: 'relative',
                    top:'9vw',
                    left: '5vw'
                }}>
                    Sign Up with google
                </span>
            </div>

            
      

       </div>

      
      
    </div>
  )
}

export default RegisterTab
