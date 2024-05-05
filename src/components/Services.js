const Services = () => {
    return (
        <div style={{ paddingTop: '300px' }}>
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
        </div>

    )
}

export default Services;