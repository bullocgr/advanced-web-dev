import React from 'react';

import './index.css';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.url = this.props.url;
        this.caption = this.props.caption;
    }
    render() {
        return (
            <div class="card">
                <img src={this.props.url} />
                <p>{this.props.caption}</p>
            </div>
        );
    }
}

export default Card;