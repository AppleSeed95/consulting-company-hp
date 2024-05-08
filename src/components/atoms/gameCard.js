import { useState } from "react"

const GameCard = ({ title, img, description }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="card animation-element appear"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            style={{ padding: 0, margin: 0 }}>
            <div style={{
                width: '100%',
                height: '400px',
                borderTopRightRadius: '20px',
                borderTopLeftRadius: '20px',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <img src={`/img/game_img/${img}`} alt=""
                    style={
                        active ?
                            {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '120%',
                                borderTopRightRadius: '20px',
                                borderTopLeftRadius: '20px',
                                transitionDuration: '500ms',
                                filter: 'saturate(0)',
                            } :
                            {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                borderTopRightRadius: '20px',
                                borderTopLeftRadius: '20px',
                                transitionDuration: '500ms'

                            }}
                />
            </div>
            <div style={{ padding: '50px', paddingBottom: '0', textAlign: 'left' }}>
                <div
                    className="animation-element appear"
                    style={{ fontSize: '30px', marginBottom: '5px' }}>
                    title
                </div>
                <div
                    className="animation-element appear"
                >
                    Peerfuse's goal is to serve the consumer audience of common games and
                    consumers of gamefi, on various networks. That's why we need partners to
                    accomplish this goal.
                </div>

            </div>
            <div
                className="animation-element appear"
                style={{ display: 'flex', padding: '20px', justifyContent: 'flex-end' }}>
                <div className={`btn-arrow ${active ? 'btn-animation' : ''}`}>
                    <svg style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default GameCard