import  React, { useContext } from 'react';
import menuIcon from '../../images/icon_menu.svg';
import { MenuContext } from '../../Context/Menu'
import '../AnchoredMenuButton/AnchoredMenuButton.css'




const AnchoredMenuButton = () => {
   const { openMenu } = useContext(MenuContext)
   let drawerClasses = "side-drawer"

    return (
        <button className={`toggle-button`} onClick={openMenu}>
            <img src={menuIcon}
                alt="Anchored menu icon" />  
        </button>
    )
}
export default AnchoredMenuButton    
