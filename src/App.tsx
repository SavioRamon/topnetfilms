
import { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Content, GlobalStyle, MainContent } from "./app.style";
import Header from "./components/common/Header";
import ScrollUpButton from "./components/common/ScrollUpButton";
import { autoLoginReq } from "./store/ducks/user";
import { useAppDispatch } from "./store/hooks";


export default function App(){
  const [load, setLoad] = useState(true);
  const dispatch = useAppDispatch();

  useLayoutEffect(()=>{
    dispatch(autoLoginReq());
    setLoad(false);
  }, [dispatch]);

  return (
    <Content>
      <GlobalStyle />
      <Header />
      
      <MainContent>
        {!load &&
          <>
            <Outlet />
            <ScrollUpButton />
          </>
        }
      </MainContent>
    </Content>
  );
}
