import MenuItem from "./atoms/MunuItem";
const Footer = () => {

    return (
        <div className="footer-container">
            <div style={{ fontSize: '30px' }}> </div>
            <div style={{ display: "flex", gap: '70px', textAlign: 'left', alignItems: 'flex-end    ' }}>

                <div style={{ display: "flex", flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                    <MenuItem title={'HOME'} active />
                    <MenuItem title={'SERVICES'} />
                    <MenuItem title={'$PEER'} />
                    <MenuItem title={'TEAM'} />
                </div>
                <button className="header-btn" style={{ height: '50px' }}>FOLLOW US</button>
            </div>

        </div>
    )
}

export default Footer;