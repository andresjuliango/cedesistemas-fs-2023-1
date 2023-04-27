import { RouterProvider } from "react-router-dom"
import { GlobalStyle } from "./globalStyles"
import { router } from "./Routes/Router"
import { MenuContextStore } from "./Contexts/MenuContext"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MenuContextStore>
        <RouterProvider router={router}/>
      </MenuContextStore>
    </>

  )
}
