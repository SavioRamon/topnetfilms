import { createContext } from "react";


type Authentication = {
    authWithService: (value: string) => void;
};

type AuthProps = {
    children: JSX.Element;
};


export  const AuthContext = createContext({} as Authentication);


export function AuthProvider({children}: AuthProps) {
    
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
            authWithService
        }}>
            {children}
        </AuthContext.Provider>
    );
};