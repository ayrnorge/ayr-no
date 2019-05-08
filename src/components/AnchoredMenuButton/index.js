import  React, { useContext } from 'react';
import menuIcon from '../../images/icon_menu.svg';
import { MenuContext } from '../../Context/Menu'
import '../AnchoredMenuButton/AnchoredMenuButton.css'
import SideDrawer from '../SideDrawer/index'
import IconMenu from '../../images/icon_menu.svg'
import Backdrop from '../Backdrop/index'



const AnchoredMenuButton = () => {
   const { isOpen, openMenu, closeMenu } = useContext(MenuContext)
   let drawerClasses = "side-drawer"


    return (
        <button className={`toggle-button`} onClick={openMenu}>
            <img src={menuIcon}
                alt="Anchored menu icon" />  
        </button>
    )
}
export default AnchoredMenuButton    
