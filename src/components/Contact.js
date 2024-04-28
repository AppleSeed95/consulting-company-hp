const Contact = () => {
    return (
        <div style={{ position: 'relative' }}>
            <div className="section-title font-title animation-element appear" style={{ margin: '30px' }}>Contact US</div>

            {/* <img src="/img/earth.png" alt="earth" className="contact-img" /> */}
            <div className="contact-container animation-element appear">
                <div className="contact-content">
                    <div className="company-info">
                        <img src="/img/team_2.png" alt="company" className="info-img" />
                        <div className="info-content">
                            <div className="pb font-title animation-element appear" style={{ fontSize: '25px' }}>Contact US</div>
                            <div className="pb flex animation-element appear" style={{ gap: '10px', justifyContent: 'left' }}>
                                <div className="info-item-container">
                                    <svg style={{ width: '30px', height: '30px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </div>
                                <div>Address: your address here</div>
                            </div>
                            <div className="pb flex animation-element appear" style={{ gap: '10px', justifyContent: 'left' }}>
                                <div className="info-item-container">
                                    <svg style={{ width: '30px', height: '30px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                </div>
                                <div>Phone: your phone here</div>
                            </div>
                            <div className="pb flex animation-element appear" style={{ gap: '10px', justifyContent: 'left' }}>
                                <div className="info-item-container">
                                    <svg style={{ width: '30px', height: '30px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>

                                </div>
                                <div>Email: your email here</div>
                            </div>
                            <div className="pb flex animation-element appear" style={{ gap: '10px', justifyContent: 'left' }}>
                                <div className="info-item-container">
                                    <svg style={{ width: '30px', height: '30px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                    </svg>

                                </div>
                                <div>Website: your website here</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '50%', padding: "30px" }}>
                        <div style={{ padding: '40px' }}>
                            <div className="flex pb animation-element appear" style={{ width: '100%' }}>
                                <div style={{ width: '100px', textAlign: 'left' }}>Name</div>
                                <input className="input" type="text" />
                            </div>
                            <div className="flex pb animation-element appear" style={{ width: '100%' }}>
                                <div style={{ width: '100px', textAlign: 'left' }}>Email</div>
                                <input className="input" type="text" />
                            </div>
                            <div className="flex pb animation-element appear" style={{ width: '100%', alignItems: 'flex-start' }}>
                                <div style={{ width: '100px', textAlign: 'left' }}>Message</div>
                                <textarea className="input" multiple style={{ height: '150px' }} type="text" />
                            </div>
                        </div>
                        <button className="btn animation-element appear" style={{ paddingLeft: '20px', paddingRight: '20px' }}>Submit</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Contact;