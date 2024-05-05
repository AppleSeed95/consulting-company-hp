
// import Particles from 'react-particles';

import Button from "./atoms/button";
const Home = () => {
    return (
        <div style={{ paddingTop: '150px' }}>
            {/* <Particles
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                    },
                }}
            /> */}
            <img src='/img/team.png' className="brand" alt="brand" />
            <div className="flex" style={{ gap: '800px', alignItems: 'flex-start', height: '650px' }}>
                <div style={{ textAlign: 'left', zIndex: 1, position: 'relative' }}>
                    <div className="title pb animate-right" style={{ top: '150px', animationDelay: '0.5s' }}>
                        Peerfuse GameHub
                    </div>
                    <div className="pb animate-right" style={{ fontSize: '20px', width: '500px', top: '250px', animationDelay: '0.6s' }}>
                        TIME, ENERGY, AND TALENT CAN BE MORE IMPORTANT THAN BUDGET
                    </div>
                    <div className="pb animate-right" style={{ fontSize: '20px', width: '500px', top: '350px', animationDelay: '0.7s' }}>
                        We are AI/ML focussed growth consulting company
                    </div>
                    <Button className="flex pb justify-start animate-right" style={{ fontSize: '20px', top: '450px', animationDelay: '1s' }} title={'PRODUCTS'} />
                    <div className="pb " style={{ fontSize: '20px', width: '500px', top: '300px' }}>
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src='/img/ai.png' className="home-img" alt="brand" />
                </div>
            </div >
            <div className="flex animation-element appear" style={{ gap: '100px' }}>
                <div style={{ textAlign: 'left', zIndex: 2 }}>
                    {/* <div className="home-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div> */}
                    <div className="font-title" style={{ fontSize: '40px' }}>
                        30K
                    </div>
                    <div>
                        Holders
                    </div>
                </div>
                <div style={{ textAlign: 'left', zIndex: 2 }}>
                    {/* <div className="home-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                        </svg>
                    </div> */}
                    <div className="font-title" style={{ fontSize: '40px' }}>
                        3 Million
                    </div>
                    <div>
                        Daily active players
                    </div>
                </div>
                <div style={{ textAlign: 'left', zIndex: 2 }}>
                    {/* <div className="home-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                        </svg>
                    </div> */}
                    <div className="font-title" style={{ fontSize: '40px' }}>
                        3 Billion
                    </div>
                    <div>
                        Market Capitalization
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home;