import Register from "./Register"
import { UserContext, UserContextProvider } from "../../../server/utils/UserContext";
function App() {
    axios.defaults.baseURL = 'http://localhost:3001';
    axios.defaults.withCredentials = true;
    const {username} = useContext(UserContext); 
    return (
        <UserContextProvider>
          <Register/>  
        </UserContextProvider>
    )
}

export default App