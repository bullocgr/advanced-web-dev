import React from 'react';

class Dialogue extends React.Component {
    constructor(props) {
        super(props);
        
        this.submitHandler = this.props.submitHandler.bind(this);
        this.errorMessage = this.props.errorMessage;
    }


    render() {
        if(!this.props.show) {
          return null;
        }

        return (
          <form onSubmit={this.submitHandler}>
              <div>
                <input type="text" value={this.props.url} name="url" onChange={this.handleInputChange}  placeholder="Enter Photo Url" />
                <input type="text" value={this.props.caption} name="caption" onChange={this.handleInputChange}  placeholder="Enter Caption" /> 
              </div>
              <div className="footer">
                {this.errorMessage && <span>{this.errorMessage}</span> } 
                <button type="submit">Accept</button>
                <button onClick={this.props.onClose}>Close</button>
              </div>
          </form>
        );
    }
}

export default Dialogue;