import {Link} from 'react-router-dom'
import { MenuCloseWrapper, MenuContainer, MenuItemsWrapper } from './styles'
import { IoClose } from 'react-icons/io5'
import { useContext } from 'react'
import { MenuContext } from '../../Contexts/MenuContext'


const OptionsMenu = [
  {
    name: "Inicio",
    path: "/"
  },
  {
    name: "Perfil",
    path: "/profile"
  },
  {
    name: "Mis Prendas",
    path: "/my-clothes"
  },
  {
    name: "Iniciar Sesión",
    path: "/login"
  }
]

export const Menu = () => {

  //hace uso de valor usando el hook(useContext), el contexto
  const {menuState, onChangeOpenCloseMenu} = useContext(MenuContext); //Comunicación del contexto con el objeto

    return (
      <MenuContainer isShown={ menuState.isOpen }>
        <MenuCloseWrapper onClick={onChangeOpenCloseMenu}>
          <IoClose />
        </MenuCloseWrapper>
        <MenuItemsWrapper>
          {
            OptionsMenu.map((item, index) => (<Link key={index} to={item.path}><li>{item.name}</li></Link>))
          }
        </MenuItemsWrapper>
      </MenuContainer>
    )
}
