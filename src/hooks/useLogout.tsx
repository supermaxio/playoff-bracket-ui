import axios from "../api/axios";
import useAuth from "./useAuth";
import { Authorization } from "../objects/Authorization";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {

        setAuth({} as Authorization);
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    };

    return logout;
};

export default useLogout;