import {useContext} from "react"
import { UserContext } from "../../../server/utils/UserContext";
import RegisterAndLogin from "./RegisterAndLogin";

export default function Routes() {
    const {username, id} = useContext(UserContext);
    if (username) {
        return <Chat/>;
    }
    return (
        <RegisterAndLogin/>
    );
}