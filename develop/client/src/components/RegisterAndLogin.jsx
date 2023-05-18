import {useState} from "react";

export default function RegisterAndLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('register');
    const {setUsername:setLoggedInUsername, setId} = UseContext(UserContext);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const url = isLoginOrRegister === 'register' ? 'register' : 'login';
        const {data} = await axios.post(url, {username, password});
        setLoggedInUsername(username);
        setId(data.id);
    }
    return (
        <div className="bg-green-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
            <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border"/>
            <input value={password} onChange={ev => setPassword(ev.target.value)} type="text" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border"/>
            <button className="bg-green-500 text-black block w-full rounded-sm p-2">
                {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
                </button>
            <div className="text-center mt-2">
                {isLoginOrRegister === 'register' && (
                  <div>
                 Already a user? 
                 <button onClick={() =>setIsLoginOrRegister('login')}>
                    Login here
                </button>
                    </div>  
                )}
                {isLoginOrRegister === 'login' && (
                  <div>
                  Don't have an account? 
                  <button onClick={() =>setIsLoginOrRegister('register')}>
                     Register here
                 </button>
                     </div>   
                )}
            </div>
        </form>
        </div>
    )
} 