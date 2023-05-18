import {useEffect} from "react";

export default function Chat() {
    const [ws, setWs] = useState(null);
    useEffect(() => {
const ws = new WebSocket('ws://localhost:3001')
setWs(ws);
    }, []);
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