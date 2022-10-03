import React, {useState, useEffect} from "react";
import logo from "../../images/paystack-logo.png"
import naijaFlag from "../../images/ng.svg"
import "./nav-bar.styles.scss";
import MenuItem from "../menu-link.components/menu-item.components";
import CreateButton from "../create-button.components/create-button.components";

const NavBar = () =>{

    const [sticky, setSticky] = useState(false)
    const [bgColor, setBgColor] = useState(false)
    useEffect(() => {
        const handleScroll = () =>{
            setSticky(window.scrollY > 41)
        }
        window.addEventListener('scroll', handleScroll);

        const changeColor = () =>{
            setBgColor(window.scrollY > 700)
        }
        window.addEventListener('scroll', changeColor)
    }
    );
    
        
    return(
        
        <div className={`${sticky ? 'nav-bar sticky' : 'nav-bar'} ${bgColor ? 'nav-bar bg-color' : " "}`}>
            <div className="container">
                <div className="left-side">
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    
                    <div className="menu-list">
                        <MenuItem title="Why Paystack" />
                        <MenuItem title="Customers" />
                        <MenuItem title="Pricing" />
                        <MenuItem title="Learn" />
                    </div>
                </div>
                
                <div className="right-side">
                    <div className="menu-list">
                        <div className="items">
                            <MenuItem title="Developer" />
                            <MenuItem title="Support" />
                            <MenuItem title="Login" />
                        </div>
                        <CreateButton tag="Create free account" />
                        <div className="naija-flag">
                            <img src={naijaFlag} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar