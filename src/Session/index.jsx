import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/globalContext.js"

import Preview from "./Preview.jsx"
import Video from "./Video.jsx"
import "./Session.css"

const Session = () => {
  const [state, setState] = useState("preview")
  const meetingArgs = useContext(UserContext)
  const navigate = useNavigate()

  const handleJoin = () => {
    console.log("Sessão iniciada")    
  }
  const handleClose = () => {
    console.log("Sessão Encerrada")
    navigate("/")
  }

  useEffect(() => {
    if (meetingArgs.videoSDKJWT === "") navigate("/")
  }, [meetingArgs.videoSDKJWT, navigate])

  if (state === "preview") 
    return <Preview handleOk={() => setState("video")}/>
  if (state === "video") 
    return <Video handleJoin={handleJoin} handleClose={handleClose}/>  
};

export default Session;
