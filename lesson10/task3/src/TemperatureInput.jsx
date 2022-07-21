import React, { Component } from 'react';

import BoilingVerdict from './BoilingVerdict.jsx';

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <BoilingVerdict />;
    }
}
export default TemperatureInput;
