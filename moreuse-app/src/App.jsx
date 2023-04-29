import { RouterProvider } from "react-router-dom"
import { GlobalStyle } from "./globalStyles"
import { router } from "./Routes/Router"
import { MenuContextStore } from "./Contexts/MenuContext"
import { UserContextStore } from "./Contexts/UserContext"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserContextStore>
        <MenuContextStore>
          <RouterProvider router={router}/>
        </MenuContextStore>
      </UserContextStore>
    </>

  )
}
