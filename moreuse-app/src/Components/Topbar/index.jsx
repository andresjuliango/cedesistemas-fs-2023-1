import { IoMenu } from "react-icons/io5"
import { MenuIconContainer, TopbarContainer } from "./styles"

export const Topbar = () => {
  return (
    <TopbarContainer>
      <MenuIconContainer>
        <IoMenu />
      </MenuIconContainer>
      <div>
        <img width="170px" alt="logo" src="assets/logo.png"></img>
      </div>
    </TopbarContainer>
  )
}
