import React from 'react';
import Card from './Card.js';
import Dialogue from './Dialogue.js';

class RightColumn extends React.Component {

    printVal = () => {
        console.log(this.dialogue.url);
        console.log(this.dialogue.caption);
    };

    render() { 
        return (
            <div>
                <Card>
                    {/* <Dialogue caption={this/> */}
                    {/* <img src={this.dialogue.url}></img>
                    <p>{this.dialogue.caption}</p> */}
                    
                </Card>
            </div>
        );
    }
}

export default RightColumn;