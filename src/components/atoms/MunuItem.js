const MenuItem = ({ title, active }) => {
    const handleMouseEnter = (e) => {
        e.target.classList.add('menu-item-hover');
        e.target.classList.remove('menu-item-leave');
    };

    const handleMouseLeave = (e) => {
        if (e.target.classList.contains('menu-item-active')) {
            return;
        }
        e.target.classList.add('menu-item-leave');
        e.target.classList.remove('menu-item-hover');
    };
    const handleClick = (e) => {
        const elements = document.getElementsByClassName('menu-item-active');
        Array.from(elements).forEach(element => {
            element.classList.remove('menu-item-active');
            element.classList.remove('menu-item-hover');
            element.classList.add('menu-item-inactive');
            element.classList.add('menu-item-leave');
        });
        e.target.classList.add('menu-item-active');
        e.target.classList.remove('menu-item-inactive');
    }
    return (
        <div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`menu-item ${active ? 'menu-item-active' : ''}`}>{title}</div>
    )
}

export default MenuItem;