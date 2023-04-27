import { IoMenu } from "react-icons/io5";
import { MenuIconContainer, TopbarContainer } from "./styles";
import { MenuContext } from "../../Contexts/MenuContext"
import { useContext } from "react";

export const Topbar = () => {

const { menuState, onChangeOpenCloseMenu} = useContext(MenuContext);

const toggleMenu = () => {
  onChangeOpenCloseMenu();
}

  return (
    <TopbarContainer>
      <MenuIconContainer onClick={toggleMenu}>
        <IoMenu />
      </MenuIconContainer>
      <div>
        <img width="170px" alt="logo" src="/assets/logo.png"></img>
      </div>
    </TopbarContainer>
  )
}
