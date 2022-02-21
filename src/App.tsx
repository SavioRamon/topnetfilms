import { Content, GlobalStyle } from "./app.style";
import Header from "./components/Header";

import { useTheme } from "./hooks/useTheme";

export default function App(){

  const { theme } = useTheme();

  return (
    <Content theme={theme}>
      <GlobalStyle />

      <Header />
      
    </Content>
  );
};
