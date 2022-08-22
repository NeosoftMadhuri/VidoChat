import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import {SocketContext} from '../SocketContext'


export default function Notification() {
  const {answerCall,call,callAccepted}=useContext(SocketContext)
  return (
   <>
    {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h3>{call.name} is calling:</h3>
          <Button variant="contained" style={{backgroundColor:"green",width:"150px"}} onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
  
   
   </>
  )
}
