import { User } from "firebase/auth";
import { createContext, useState } from "react";
import { authenticationAPI } from "../services/firebase";

type UserDataType = Partial<User> | null;

type Authentication = {
    userData: UserDataType;
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

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function authWithService(value: string) {

        const authenticationServices = {
            GOOGLE: async () => {
                const result = await authenticationAPI.googleAuth();
                if (result) {
                    // Set the data of user on hook userData
                    const { displayName, email, photoURL, uid } = result;
                    setUserData({ displayName, email, photoURL, uid });
                } else {
                    console.log("não tem usuário kkkk");
                };
            },
        };

        const service = authenticationServices[value as keyof typeof authenticationServices];
        service();
    };

    function authPersistence() {
        authenticationAPI.autoLogin(setUserData);
    };

    async function disconnect() {
        authenticationAPI.disconnectUser()
          .then(()=>{setUserData(null)});
    };
    

    return (
        <AuthContext.Provider value={{
            userData,
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