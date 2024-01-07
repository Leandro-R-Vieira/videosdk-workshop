import { useContext } from "react";
import { UserContext,ClientContext } from "../Context/globalContext";
import ZoomVideo from "@zoom/videosdk";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Session = () => {
    
    const meetingArgs = useContext(UserContext);
    const {topic, name, password, signature} = meetingArgs;
    const client = useContext(ClientContext);
    const navigate = useNavigate();

    const joinSession = async () => {
        await client.join(topic, signature, name, password)
        try {
          console.log('Entrou com Sucesso');  
          const stream = client.getMediaStream();
          const userId = client.getCurrentUserInfo().userId;
        } catch (err) {
            console.log(err);
        }
    }

    const endSession = () => {
        client.leave();
        navigate('/');        
    }

    const userJoined = () => {
        message.success('Um usuário entrou na Sessão');
    }
    client.on('user-added', userJoined);

    return (
      <div>
        <button onClick={() => joinSession()}>Entrar na Sessão</button>
        <button onClick={() => endSession()}>Encerrar Sessão</button>
      </div>  
    )
}

export default Session;