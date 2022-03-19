
import { Content, GlobalStyle } from "./app.style";
import Header from "./components/common/Header";

import RouterComponent from "./routes";

export default function App(){

  
  return (
    <Content>

      <GlobalStyle />
      <Header />

      <RouterComponent />
      
    </Content>
  );
};
