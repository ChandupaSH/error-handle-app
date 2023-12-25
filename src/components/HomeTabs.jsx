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
    height: '99vw',
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
        top: '10%'
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
     backgroundImage: `url(${process.env.PUBLIC_URL}/m_tab2_f.png)`,
     marginTop: '20px',
     width: '90%',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     height: '84.5vw',
     marginLeft: '5%'
}}>
    
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
        top: '20%',
        left: '24%',
        fontSize: '3vh'
    }}>Register</button>
  </div>

<div style={{
     backgroundImage: `url(${process.env.PUBLIC_URL}/m_tab3_f2.png)`,
     marginTop: '20px',
     width: '90%',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     height: '202.1875vw',
     marginLeft: '5%'
}}>
    <div style={{
        position: 'relative',
        width: '100%',
        top: '20%',
        display: 'flex',
        flexWrap: 'wrap',
        
    }}>
        <img src='/m_workout_1.png' alt='m_workout_1' style={{
            width: '80%',
            position: 'relative',
            left: '10%',
            height: '45.945vw'
        }}/>
        <img src='/m_workout_2.png' alt='m_workout_2' style={{
            width: '80%',
            position: 'relative',
            left: '10%',
            top: '2vh',
            height: '45.945vw'
        }}/>
        <img src='/m_workout_3.png' alt='m_workout_3' style={{
            width: '80%',
            position: 'relative',
            left: '10%',
            top: '4vh',
            height: '45.945vw'
        }}/>
    </div>
  </div>
  
<div style={{
     backgroundImage: `url(${process.env.PUBLIC_URL}/m_tab4.png)`,
     marginTop: '20px',
     width: '90%',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     height: '152.1875vw',
     marginLeft: '5%'
}}>
    <div style={{ 
        width: '95%', 
        position:'relative',
        left: '2.5%',
        top: '30%'
        }}>
        <img style={{width: '90%',left: '5%',position:'relative'}} src='/m_meal_tab1.png' alt='m_meal_tab1'/> 
        <img style={{width: '90%',left: '5%',position:'relative',top:'1vh'}} src='/m_meal_tab2.png' alt='m_meal_tab2' /> 
        <img style={{width: '90%',left: '5%',position:'relative',top:'2vh'}} src='/m_meal_tab3.png' alt='m_meal_tab3' /> 
    </div>
  
  </div>
      
<div style={{
     backgroundImage: `url(${process.env.PUBLIC_URL}/m_tab5.png)`,
     marginTop: '20px',
     width: '90%',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     height: '118.06vw',
     marginLeft: '5%'
}}>

    <button style={{
        position: 'relative',
        color: '#352B55',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '20px',
        width: '40%',
        height: '5vh',
        top: '84%',
        left: '29%',
        fontSize: '3vh',
        opacity: '0.8'
    }}>Join Now</button>
  </div>
      

      

    </div>
  )
}

export default HomeTabs



































