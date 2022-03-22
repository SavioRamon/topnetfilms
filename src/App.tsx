
import { Outlet } from "react-router-dom";
import { Content, GlobalStyle } from "./app.style";
import Header from "./components/common/Header";


export default function App(){

  
  return (
    <Content>
      <GlobalStyle />
      <Header />
      
      <Outlet />
    </Content>
  );
};
