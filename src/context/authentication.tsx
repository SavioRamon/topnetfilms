import { createContext, useState } from "react";


type Authentication = {
    authWithService: (value: string) => void;
    setName: React.Dispatch<React.SetStateAction<string | null>>;
    setEmail: React.Dispatch<React.SetStateAction<string | null>>;
    setPassword: React.Dispatch<React.SetStateAction<string | null>>;
};

type AuthProps = {
    children: JSX.Element;
};


export  const AuthContext = createContext({} as Authentication);


export function AuthProvider({children}: AuthProps) {

    const [name, setName] = useState<string | null>("");
    const [email, setEmail] = useState<string | null>("");
    const [password, setPassword] = useState<string | null>("");

    function authWithService(value: string) {

        const authenticationServices = {
            GOOGLE: () => {
                
            },
        };

        const service = authenticationServices[value as keyof typeof authenticationServices];
        service();
    };
    

    return (
        <AuthContext.Provider value={{
            authWithService,
            setName,
            setEmail,
            setPassword,
        }}>
            {children}
        </AuthContext.Provider>
    );
};