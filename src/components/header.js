import MenuItem from "./atoms/MunuItem";
import { useEffect, useState } from "react";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header-container">
            <div className={isScrolled ? "header-parent slideDown" : 'header-parent '}>
                <div className="logo">Peer </div>
                <div className="memu-container">
                    <MenuItem title={'HOME'} active />
                    <MenuItem title={'SERVICES'} />
                    <MenuItem title={'$PEER'} />
                    <MenuItem title={'TEAM'} />
                    <button className="header-btn">FOLLOW US</button>
                </div>
            </div>

        </div>
    )
}

export default Header;