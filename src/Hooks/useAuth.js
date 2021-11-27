import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

//  Hooks Components Use Auth  js file

const useAuth = () => {
    return useContext(AuthContext);
}


export default useAuth;