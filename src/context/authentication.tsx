import { User } from "firebase/auth";
import { createContext, useState } from "react";
import { authenticationAPI } from "../services/firebase";

type UserDataType = Partial<User> | null;

type Authentication = {
    userData: UserDataType;
    load: boolean;
    authPersistence: () => void;
    authWithService: (value: string) => void;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    disconnect: () => void;
};


export  const AuthContext = createContext({} as Authentication);


export function AuthProvider({children}: {children: JSX.Element}) {

    const [userData, setUserData] = useState<UserDataType>(null);
    const [load, setLoad] = useState(true);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function authWithService(value: string) {

        const authenticationServices = {
            GOOGLE: async () => {
                await authenticationAPI.googleAuth();
            },
        };

        const service = authenticationServices[value as keyof typeof authenticationServices];
        service();
    };

    function authPersistence() {
        /* 
        After login, registration or disconnection, a Firebase listener will be activated and set the data
        in the context
        */
        function setValues(value: UserDataType) {
            if(value) {
                const { displayName, email, photoURL, uid } = value;
                setUserData({ displayName, email, photoURL, uid });
            };
            
            setLoad(false);
        };

        authenticationAPI.autoLogin(setValues);
    };

    async function disconnect() {
        authenticationAPI.disconnectUser()
          .then(()=>setUserData(null));
    };


    

    return (
        <AuthContext.Provider value={{
            userData,
            load,
            authPersistence,
            authWithService,
            setName,
            setEmail,
            setPassword,
            disconnect
        }}>
            {children}
        </AuthContext.Provider>
    );
};