import  React, { useContext } from 'react';
import menuIcon from '../../images/icon_menu.svg';
import { MenuContext } from '../../Context/Menu'
import '../AnchoredMenuButton/AnchoredMenuButton.css'


const AnchoredMenuButton = () => {
   const { isOpen, openMenu, closeMenu } = useContext(MenuContext)
   console.log("test", isOpen)
    return (
        <button className={`anchored-icon-menu ${isOpen ? 'test' : ''}`} onClick={openMenu}>
            <img src={menuIcon}
                alt="Anchored menu icon" />
        </button>
    )
}
export default AnchoredMenuButton   