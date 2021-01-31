import React from 'react';
import Dialogue from './Dialogue';

class LeftColumn extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            isOpen: false,
            url: "",
            caption: ""
        };
        this.errorMessage = this.props.errorMessage;
        this.submitHandler = this.props.submitHandler.bind(this);
      }
    
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            url: "",
            caption: ""
        });
    }

    handleInputChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({[nam]: val});
    }
    
    render() {
        return (
            <div>
            <button onClick={this.toggleModal}>
                Open photo entry dialogue
            </button>
            <div>
                <Dialogue className="dialogue"
                show={this.state.isOpen}
                onClose={this.toggleModal}
                submitHandler={this.submitHandler}
                errorMessage={this.errorMessage}
                url={this.state.handleInputChange}
                caption={this.state.handleInputChange}
                ></Dialogue>
            </div>
            </div>
        );
    }
}

export default LeftColumn;