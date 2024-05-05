import { useState } from "react"

const Button = ({ title, className, style }) => {
    const [active, setActive] = useState(false);
    return (
        <div className={className} style={style}>
            <button className="btn"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <div style={{ display: 'flex', justifyItems: 'center', marginRight: '5px' }}>
                    {title}
                </div>
                <div className={`btn-arrow ${active ? 'btn-animation' : ''}`}>
                    <svg style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>


            </button>
        </div>
    )
}

export default Button