import React from 'react'

import Card from './Card.js'
import LeftColumn from './LeftColumn.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            errorMessage: ""
        };
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = (event) => {
        event.preventDefault();
        var url = event.target['0'].value;
        var caption = event.target['1'].value;

        if (url === "" || caption === "") {
            this.setState(currState => ({
                error: "Please input both fields"
            }));
            return;
        }

        this.setState(currState => ({
            photos: [<Card url={url} caption={caption}/>, ...currState.photos],
            errorMessage: ""
        }));

        
    }
    
    render() {
        return (
        <div className="App">
            <LeftColumn 
                submitHandler={this.submitHandler}
                errorMessage={this.state.errorMessage}
            /> {console.log(this.errorMessage)}
            <div class="rightColumn">
                {this.state.photos}
            </div>
        </div>
        );
    }
}

export default App;