const Token = () => {
    return (
        <div style={{ paddingTop: '50px' }}>
            <div style={{ height: '250px' }}>

                <div
                    style={{ marginBottom: '100px' }}
                    className="animation-element appear-title font-title section-title">Universal Gameing Token
                </div>
            </div>
            <div className="flex" style={{ paddingLeft: '200px', paddingRight: '200px', paddingBottom: '50px' }}>
                <div className="animation-element appear"
                    style={{ width: '50%', marginRight: '0px' }}
                >
                    <img src="/img/token.png" style={{ width: '50%' }} alt="" />
                </div>
                <div className="animation-element appear left-border"
                    style={{ textAlign: 'left', width: '50%' }}
                >
                    <div className="services-title">
                        $PEER
                    </div>
                    <div>
                        Initially, 108 million tokens will be unlocked, out of a total of 648 million. After that,there will be a monthly issuance of only 3 million tokens.                    </div>
                </div>

            </div >
        </div>

    )
}

export default Token;