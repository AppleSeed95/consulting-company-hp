import GameCard from "./atoms/gameCard";
const Services = () => {
    return (
        <div style={{ paddingTop: '300px', zIndex: 2 }}>
            <div style={{ height: '250px' }}>
                <div
                    style={{ marginBottom: '100px' }}
                    className="animation-element appear-title font-title section-title">Services That Get Results
                </div>

            </div>
            <div className="flex" style={{ alignItems: 'flex-end', paddingLeft: '200px', paddingRight: '200px', paddingBottom: '50px', gap: '20px' }}>

                <div className="card animation-element appear"
                    style={{
                        textAlign: 'left', width: '40%', height: '170px',
                    }}
                >
                    <div className="team-header" />

                    <div className="services-title">
                        GameHub
                    </div>
                    <div>
                        it will be the environment where players and developers will be able to create and play their favorite games without intermediaries, as well as exchange playable non-fugible digital assets.
                    </div>

                </div>
                <div className="card animation-element appear"
                    style={{
                        textAlign: 'left', width: '40%', height: '170px',
                    }}
                >
                    <div className="team-header" />

                    <div className="services-title">
                        Game Studio & Incubator & Launcher
                    </div>
                    <div>
                        to take advantage of our expertise, we will develop our own games and provide grants for partners to develop with us.
                    </div>
                </div>
                <div className="card animation-element appear"
                    style={{ textAlign: 'left', width: '40%', height: '170px' }}
                >
                    <div className="team-header" />

                    <div className=" services-title">
                        Social Network
                    </div>
                    <div>
                        users will be able to communicate and form a community privately and securely, through text, voice, and video messages.
                    </div>
                </div>

            </div >
            <div style={{ display: 'flex', zIndex: 2, position: 'relative', justifyContent: 'center', gap: '30px' }}>
                <img src="/img/game_bg.png" alt="" className="game_bg" />

                <div style={{ width: '50%', zIndex: 2, padding: '100px', display: 'flex', justifyContent: 'flex-end' }}>
                    <div>
                        <div
                            className="font-title section-title animation-element appear" style={{ paddingLeft: '0px' }}>
                            Our Games
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>Interoperable avatars and objects</div>
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>
                                Playable non-fungible objects
                            </div>
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>
                                Portals between games
                            </div>
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>
                                3D P2P poker game and casino
                            </div>
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>
                                Roleplay (RP)
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: '50%', zIndex: 2, padding: '100px', display: 'flex', justifyContent: 'flex-start' }}>
                    <div>
                        <div
                            className="font-title section-title animation-element appear" style={{ paddingLeft: '0px' }}>
                            Third-party games
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>Common games</div>
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>
                                Onchain Games
                            </div>
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>
                                Playable non-fungible objects
                            </div>
                        </div>
                        <div className="flex animation-element appear" style={{ justifyContent: 'flex-start' }}>
                            <svg style={{ width: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div style={{ marginLeft: '15px' }}>
                                Game sales and non-fungible digital property.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="animation-element appear header-btn" style={{ zIndex: '2', position: 'relative', paddingLeft: '30px', paddingRight: '30px' }}>PLAY NOW  !</button>
            <div style={{ display: 'flex', padding: '100px', paddingTop: '200px' }}>
                {['game (14).webp', 'game (18).webp', 'game (23).webp', 'game (25).webp'].map((a, idx) => (
                    <div key={idx} style={{ width: '25%', padding: '10px' }}>
                        <GameCard img={a} key={idx} style={{ width: '25%' }} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Services;