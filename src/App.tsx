
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Content, GlobalStyle } from "./app.style";
import Header from "./components/common/Header";
import { useAuthentication } from "./hooks";


export default function App(){

  const { authPersistence } = useAuthentication();

  useLayoutEffect(()=>{
    authPersistence();
  }, []);
  
  return (
    <Content>
      <GlobalStyle />
      <Header />
      
      <Outlet />
    </Content>
  );
};
