import { UserContextProvider } from "../../../server/utils/UserContext";
import Routes from "./Routes"
function App() {
    axios.defaults.baseURL = 'http://localhost:3001';
    axios.defaults.withCredentials = true;
    return (
        <UserContextProvider>
          <Routes/>  
        </UserContextProvider>
    )
}

export default App