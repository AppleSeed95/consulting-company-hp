import MenuItem from "./atoms/MunuItem";
import { useEffect, useState } from "react";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > 300) {
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
            <div className={isScrolled ? "header-parent" : 'header-parent_before slideUp'}>
                <div className="logo">Cognosys </div>
                <div className="memu-container">
                    <MenuItem title={'HOME'} active />
                    <MenuItem title={'SERVICES'} />
                    <MenuItem title={'BLOG'} />
                    <MenuItem title={'CONTACT US'} />
                </div>
            </div>

        </div>
    )
}

export default Header;