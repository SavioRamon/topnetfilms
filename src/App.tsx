
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Content, GlobalStyle, MainContent } from "./app.style";
import Header from "./components/common/Header";
import { useAuthentication } from "./hooks";


export default function App(){

  const { authPersistence } = useAuthentication();

  useLayoutEffect(()=>{
    authPersistence();
  }, [authPersistence]);
  
  return (
    <Content>
      <GlobalStyle />
      <Header />
      
      <MainContent>
        <Outlet />
      </MainContent>
    </Content>
  );
}
