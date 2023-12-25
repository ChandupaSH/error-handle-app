import React from 'react'

const HomeTabs = () => {
  return (
    <div style={{
        width: '100%',
    }}>

<div style={{
    // position: 'relative',
    backgroundImage: `url(${process.env.PUBLIC_URL}/m_tab1.png)`,
    marginTop: '20px',
    width: '90%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '90%', 
    height: '370px',
    marginLeft: '5%'
 
   
    }}>
   
    <span style={{
        position: 'relative',
        top: '12px',
        fontSize: '25px',
        left: '5%',
        color: 'white'
    }}>Gallery</span>

    <div style={{
        position: 'relative',
        width: '90%',
        left: '5%',
        top: '50px'
    }}>
        <img src='/imgSlide1.jpg' alt='imgSlide1' style={{
            width: '100%',
            borderRadius: '5%'             
        }}/>

        <div style={{
            width: '100%', 
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1vh'
            }}> 

            <img src='/imgSlide2.jpg' alt='imgSlide2' style={{
                width: '30%',
                borderRadius: '7%',
                maxHeight: '80px'
            }}/>
            <img src='/imgSlide3.jpg' alt='imgSlide3' style={{
                width: '30%',
                borderRadius: '7%',
                maxHeight: '80px'
            }}/>

            <div style={{
                color: 'black',
                backgroundColor: 'white',
                width: '30%',
                borderRadius: '7%',
                opacity: '0.4'
            }}>
                see more
            </div>

            
           
        </div>
    </div>

  </div>
      
      
      

    </div>
  )
}

export default HomeTabs




































{/* <div style={{
    position: 'relative',marginTop: '20px'}}>
    <img src='/m_tab1.png' alt='m_tab1' style={{
        width: '90%',
        position: 'absolute',
        left: '5%',
    }}/>
    <span style={{
        position: 'relative',
        top: '2vh',
        fontSize: '4vh',
        left: '13%',
        color: 'white'
    }}>Gallery</span>

    <div style={{
        position: 'relative',
        width: '80%',
        left: '10%',
        top: '5vh'
    }}>
        <img src='/imgSlide1.jpg' alt='imgSlide1' style={{
            width: '100%',
            borderRadius: '5%'             
        }}/>

        <div style={{
            width: '100%', 
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1vh'
            }}> 

            <img src='/imgSlide2.jpg' alt='imgSlide2' style={{
                width: '30%',
                borderRadius: '7%',
                maxHeight: '80px'
            }}/>
            <img src='/imgSlide3.jpg' alt='imgSlide3' style={{
                width: '30%',
                borderRadius: '7%',
                maxHeight: '80px'
            }}/>

            <div style={{
                color: 'black',
                backgroundColor: 'white',
                width: '30%',
                borderRadius: '7%',
                opacity: '0.4'
            }}>
                see more
            </div>
           
        </div>
    </div>

  </div>

  <div style={{
    position: 'relative',top: '95px'}}>
    <img src='/m_tab2_f2.png' alt='/m_tab2_f2' style={{
        width: '90%',
        position: 'absolute',
        left: '5%',
    }}/>
    <span style={{
        position: 'relative',
        top: '2vh',
        fontSize: '4vh',
        left: '13%',
        color: 'white'
    }}>Join Us</span>

    <button style={{
        position: 'relative',
        color: 'white',
        backgroundColor: '#352B55',
        border: 'none',
        borderRadius: '10%',
        width: '40%',
        height: '5vh',
        top: '10vh',
        left: '24%',
        fontSize: '3vh'
    }}>Register</button>
  </div>

  <div style={{
    position: 'relative', top: '400px'}}>
    <img src='/m_tab3_f2.png' alt='m_tab3_f2' style={{
        width: '90%',
        position: 'absolute',
        left: '5%',
    }}/>

    <div style={{
        position: 'relative',
        width: '100%',
        top: '130px',
        display: 'flex',
        flexWrap: 'wrap',
        
    }}>
        <img src='/m_workout_1.png' alt='m_workout_1' style={{
            width: '80%',
            position: 'relative',
            left: '10%',
            maxHeight: '53vw'
        }}/>
        <img src='/m_workout_2.png' alt='m_workout_2' style={{
            width: '80%',
            position: 'relative',
            left: '10%',
            top: '2vh',
            maxHeight: '53vw'
        }}/>
        <img src='/m_workout_3.png' alt='m_workout_3' style={{
            width: '80%',
            position: 'relative',
            left: '10%',
            top: '4vh',
            maxHeight: '53vw'
        }}/>
    </div>
  </div>

  <div style={{
    position: 'relative', top: '145vw'}}>
    <img src='/m_tab4.png' alt='m_tab4' style={{
        width: '90%',
        position: 'absolute',
        left: '5%',
    }}/>

    <div style={{ 
        width: '90%', 
        position:'relative',
        left: '5%',
        top: '150px'
        }}>
        <img style={{width: '90%',left: '5%',position:'relative'}} src='/m_meal_tab1.png' alt='m_meal_tab1'/> 
        <img style={{width: '90%',left: '5%',position:'relative',top:'1vh'}} src='/m_meal_tab2.png' alt='m_meal_tab2' /> 
        <img style={{width: '90%',left: '5%',position:'relative',top:'2vh'}} src='/m_meal_tab3.png' alt='m_meal_tab3' /> 
    </div>
  
  </div> */}