import { Global } from "@emotion/react"
import { global } from "./styles/global"
import MainLayout from "./components/common/MainLayout/MainLayout"
import MainContainer from "./components/common/MainContainer/MainContainer"
import MainSidebar from "./components/common/MainSidebar/MainSidebar"
import { Route, Routes } from "react-router-dom"
import AccountPage from "./pages/AccountPage/AccountPage"
import AuthRoute from "./routes/AuthRoute/AuthRoute"
import MainRoute from "./routes/MainRoute/MainRoute"
import { useUserMeQuery } from "./queries/userQuery"

function App() {
  
  useUserMeQuery();

  return (
    <>
      
        <Global styles={global} />
        <MainLayout>
          <Routes>
              <Route path="/auth/*" element={<AuthRoute />} />
              <Route path="/*" element={<MainRoute />} />
          </Routes>
          
        </MainLayout>
    
      
    </>
  )
}

export default App
