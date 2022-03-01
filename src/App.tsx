
import { Content, GlobalStyle } from "./app.style";
import Header from "./components/common/Header";

import { useTheme } from "./hooks";

import RouterComponent from "./routes";

export default function App(){

  const { theme } = useTheme();

  return (
    <Content theme={theme}>

      <GlobalStyle />
      <Header />

      <RouterComponent />
      
    </Content>
  );
};
