
const Home = () => {
    return (
        <div>
            {/* <div className="rainbow"></div> */}
            <img src='/img/team.png' className="brand" alt="brand" />
            <div className="flex" style={{ gap: '800px', alignItems: 'flex-start', height: '650px' }}>
                <div style={{ textAlign: 'left', zIndex: 1, position: 'relative' }}>
                    <div className="title pb animate-right" style={{ top: '150px', animationDelay: '0.5s' }}>
                        Cognosys Technologies
                    </div>
                    <div className="pb animate-right" style={{ fontSize: '20px', width: '500px', top: '250px', animationDelay: '0.6s' }}>
                        Cognosys Technologies is a dedicated consulting firm that provides comprehensive services in software development and quality assurance
                    </div>
                    <div className="pb animate-right" style={{ fontSize: '20px', width: '500px', top: '350px', animationDelay: '0.7s' }}>
                        We are AI/ML focussed growth consulting company
                    </div>
                    <div className="pb animate-right" style={{ fontSize: '20px', width: '500px', top: '450px', animationDelay: '1s' }}>
                        <button className="btn">OUR PRODUCTS</button>
                    </div>
                    <div className="pb " style={{ fontSize: '20px', width: '500px', top: '300px' }}>
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src='/img/ai.png' className="home-img" alt="brand" />
                </div>
            </div >
            <div className="flex animation-element appear" style={{ gap: '50px' }}>
                <div className="home-board party-border" style={{ textAlign: 'left', zIndex: 2 }}>
                    <div className="home-svg">
                        <img src="/svg/project.svg" alt="project" />
                    </div>
                    <div className="font-title" style={{ fontSize: '40px' }}>
                        850+
                    </div>
                    <div>
                        Projects
                    </div>
                </div>
                <div className="home-board" style={{ textAlign: 'left', zIndex: 2 }}>
                    <div className="home-svg">
                        <img src="/svg/customer.svg" alt="project" />
                    </div>
                    <div className="font-title" style={{ fontSize: '40px' }}>
                        700+
                    </div>
                    <div>
                        Customers
                    </div>
                </div>
                <div className="home-board" style={{ textAlign: 'left', zIndex: 2 }}>
                    <div className="home-svg">
                        <img src="/svg/earn.svg" alt="project" />
                    </div>
                    <div className="font-title" style={{ fontSize: '40px' }}>
                        $10 million
                    </div>
                    <div>
                        Generated for Clients
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home;