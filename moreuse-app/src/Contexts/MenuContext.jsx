import React, {createContext, useState} from "react";

const initialState = {
  isOpen: false
};

export const MenuContext = createContext(initialState); // Se indica estado inicial del menu (Cerrado)

export const MenuContextStore = (props) => {

  const [menuState, setMenuState] = useState(initialState);

  // Función para cambiar el estado del menu
  const onChangeOpenCloseMenu = () => {
    // Se decompone el objeto y seteo del dato a modificar. Con ...menuState (los 3 puntos) para hacer referencia solo al dato y no el objeto completo
    setMenuState({ ...menuState, isOpen: !menuState.isOpen})
  }

  const onCloseMenu = () => {
    setMenuState({ ...menuState, isOpen: false})
  }

  return (
    // Se expone el estado que es un objeto y la función que cambia el estado
    <MenuContext.Provider value={{ menuState, onChangeOpenCloseMenu, onCloseMenu }}>
      { props.children }
    </MenuContext.Provider>
  )
};
