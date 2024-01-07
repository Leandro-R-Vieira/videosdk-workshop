import { useContext, useEffect } from "react";
import { ClientContext, UserContext } from "../Context/globalContext";


const Video = ({ handleClose, handleJoin}) => {
  const uitoolkit = useContext(ClientContext);
  const meetingConfig = useContext(UserContext);

  useEffect(() => {
    let sessionContainer = document.getElementById("session")
    uitoolkit.joinSession(sessionContainer, meetingConfig)
    uitoolkit.onSessionClosed(handleClose)
    uitoolkit.onSessionJoined(handleJoin)

    return () => {
      uitoolkit.offSessionClosed(handleClose)
      uitoolkit.offSessionJoined(handleJoin)  
      uitoolkit.closeSession(sessionContainer)}
  }, [uitoolkit, meetingConfig, handleClose, handleJoin]);

  return <div id="session"></div>;
};
export default Video;
