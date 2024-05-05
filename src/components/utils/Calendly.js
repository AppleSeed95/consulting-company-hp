import React from "react";
import { PopupModal } from "react-calendly";

class Calendly extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        return (
            <div>
                <button
                    className="calendly-btn"
                // onClick={() => this.setState({ isOpen: true })}
                >
                    <img src="/discord-icon-svgrepo-com.svg" style={{
                        width: '40px',
                        height: '40px'
                    }} alt="" />
                </button>
                <PopupModal
                    url="https://calendly.com/acmesales"
                    pageSettings={this.props.pageSettings}
                    utm={this.props.utm}
                    prefill={this.props.prefill}
                    onModalClose={() => this.setState({ isOpen: false })}
                    open={this.state.isOpen}
                    /*
                     * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                     * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                     */
                    rootElement={document.getElementById("root")}
                />
            </div>
        );
    }
}
export default Calendly;