import axios from "../api/axios";
import useAuth from "./useAuth";
import { Authorization } from "../objects/Authorization";
import { useSignOut } from "react-auth-kit";

const useLogout = () => {
    const { setAuth } = useAuth();
    const signOut = useSignOut();

    const logout = async () => {

        setAuth({} as Authorization);
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });

            signOut();
        } catch (err) {
            console.error(err);
        }
    };

    return logout;
};

export default useLogout;