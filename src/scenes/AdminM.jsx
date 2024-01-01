import React from 'react'

const AdminM = () => {
  return (
    <div style={{
      backgroundColor: '#0F0F0F',
      height: '100vh',
      color: 'white',
      padding: '0',
      margin: '0'
    }}>

      {/* header */}
      <div style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingTop: '5vw'
      }}>
        <span style={{
          fontSize: '30px',
          marginLeft: '5vw'
        }}>Admin 1
        </span>

        <span style={{
          fontSize: '20px',
          marginRight: '5vw'
          }}>
          jessica
        </span>

      </div>

      <div style={{
        width: '100vw',
        paddingTop: '5vw'
      }}>
        <div style={{
          width: '90vw',
          position: 'relative',
          left: '5vw',
          height: '40vw',
          backgroundColor: '#393939',
          outline: '1px white solid',
          borderRadius: '20px',
          fontSize: '20px'
        }}>
          <span style={{
            color: '#52FF00',
            position: 'relative',
            left: '5vw',
            top: '2vw'

          }}> 
            open
          </span><br/>

          <div style={{
            width: '100%',
            position: 'relative',
            top: '9vw',
            display: 'flex',
            justifyContent: 'space-between',
            
          }}>
              <div style={{
            width: '27vw',
            // position: 'relative',
            // left: '5vw',
            height: '10vh',
            backgroundColor: '#606060',
            outline: '1px white solid',
            borderRadius: '20px',
            fontSize: '20px',
            marginLeft: '2vw',
            textAlign: 'center'
          }}>
            <span >
              At the gym
            </span><br/>

            <span style={{
              color: '#FFE500',
              fontSize: '30px'
            }}>325</span>
           
              </div>

              <div style={{
            width: '27vw',
            // position: 'relative',
            // left: '5vw',
            height: '10vh',
            backgroundColor: '#606060',
            outline: '1px white solid',
            borderRadius: '20px',
            fontSize: '20px',
            textAlign: 'center'
          }}>
            <span >
              All
            </span><br/>

            <span style={{
              color: '#00FFE0',
              fontSize: '30px'
            }}>325</span>
              </div>

              <div style={{
            width: '27vw',
            // position: 'relative',
            // left: '5vw',
            height: '10vh',
            backgroundColor: '#606060',
            outline: '1px white solid',
            borderRadius: '20px',
            fontSize: '20px',
            marginRight: '2vw',
            textAlign: 'center'
          }}>
            <span>Today All</span><br/>
            <span style={{
              color: '#52FF00',
              fontSize: '30px'
            }}>21</span>

              </div>

          </div>
        </div>
      </div>

      <div style={{
        width: '90vw',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div style={{
            width: '43vw',
            position: 'relative',
            left: '5vw',
            height: '20vw',
            backgroundColor: '#393939',
            outline: '1px white solid',
            borderRadius: '20px',
            fontSize: '20px',
            top: '4vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span >Users</span>
          </div>

        <div style={{
            width: '43vw',
            position: 'relative',
            left: '5vw',
            height: '20vw',
            backgroundColor: '#393939',
            outline: '1px white solid',
            borderRadius: '20px',
            fontSize: '20px',
            top: '4vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span>Mark</span>
          </div>
      </div>
    </div>
  )
}

export default AdminM
