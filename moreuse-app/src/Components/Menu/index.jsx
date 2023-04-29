import {Link} from 'react-router-dom'
import { MenuCloseWrapper, MenuContainer, MenuItemsWrapper } from './styles'
import { IoClose } from 'react-icons/io5'
import { useContext } from 'react'
import { MenuContext } from '../../Contexts/MenuContext'
import { UserContext } from '../../Contexts/UserContext'


const OptionsMenu = [
  {
    name: "Inicio",
    path: "/"
  },
  {
    name: "Inicio",
    path: "/",
    authRequired: true
  },
  {
    name: "Perfil",
    path: "/profile",
    authRequired: true
  },
  {
    name: "Mis Prendas",
    path: "/my-clothes",
    authRequired: true
  },
  {
    name: "Iniciar Sesión",
    path: "/login"
  }
  ,
  {
    name: "Cerrar Sesión",
    path: "/logout",
    authRequired: true
  }
]

export const Menu = () => {

  //hace uso de valor usando el hook(useContext), el contexto
  const {menuState, onChangeOpenCloseMenu} = useContext(MenuContext); //Comunicación del contexto con el objeto

  const {user} = useContext(UserContext);

  return (
    <MenuContainer isShown={ menuState.isOpen }>
      <MenuCloseWrapper onClick={onChangeOpenCloseMenu}>
        <IoClose />
      </MenuCloseWrapper>
      <MenuItemsWrapper>
        {
          OptionsMenu.map((item, index) => {
            if (user.isAuth && item.authRequired) {
              return <Link key={index} to={item.path}><li>{item.name}</li></Link>
            }
            if (!user.isAuth && !item.authRequired) {
              return <Link key={index} to={item.path}><li>{item.name}</li></Link>
            }
          }
        )
      }
      </MenuItemsWrapper>
    </MenuContainer>
  )
}
