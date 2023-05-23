import {useEffect} from "react";
import { UserContext } from "../../../server/utils/UserContext";

export default function Chat() {
    const [ws, setWs] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const {username, id} = UseContext(UserContext);
    useEffect(() => {
const ws = new WebSocket('ws://localhost:3001')
setWs(ws);
ws.addEventListener('message', handleMessage)
    }, []);
    function handleMessage(e) {}
    return (
        <div>Chat Here!</div>
    )
}

export default function Contacts() {
    return (
        <div>Your Friends</div>
    )
}

export default function Messages() {
    return (
        <div>Your Messages</div>
    )
}

const messagesWithoutReps = messages;
//need to go through an array to loop through all messages, so there isn't any with repetition, and must be unique by id

function handleMessage(ev) {
   const messageData = JSON.parse(ev.data);
   setMessages(prev => ([...prev, {...messageData}]))
}

function sendMessage(ev) {
    ev.preventDefault();
    ws.send(JSON.stringify({
            recipient: selectedUserId,
            text: newMessage,
    }));
    setNewMessage('');
    setMessages(prev => ([...prev, {text: newMessage, sender: id, recipient: selectedUserId,}]));
}

useEffect(() => {
    if (selectedUserId) {
        axios.get('/messages/'+selectedUserId)
    }
})

<div onClick={() => setSelectedUserId(userId)}>
    
</div>


//<div onClick={() => setSelectedUserId(userId)}></div>

//Need to use selectUserId because I use it on line 5, but with only have one line for being able to click a user, I'm not sure how to integrate it.
//All the code below here is very rough because I'm not really sure what to do


// {!selectedUserId && (
//     <div>select a user to chat</div>
// )}

// {!!selectedUserId && (
//     <div>
//         {messagesWithoutReps.map(message => (
//             <div>
//                 sender:{message.sender}<br/>
//                 my id:{id}<br/>
//                 {message.text}
//             </div>)
//         ))}
//     </div>
// <form onSubmit={sendMessage}>
// <input type="text"
// value={newMessage}
// onChange={ev => setNewMessage(ev.target.value)}
// <button type=submit> Type Your Message Here </button>
// </form>
// )}

{!selectedUserId ? (
    <div>select a user to chat</div>
  ) : (
    <div>
      {messagesWithoutReps.map((message, index) => (
        <div key={index}>
          sender: {message.sender}<br/>
          my id: {id}<br/>
          {message.text}
        </div>
      ))}
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={ev => setNewMessage(ev.target.value)}
        />
        <button type="submit">Type Your Message Here</button>
      </form>
    </div>
  )}
