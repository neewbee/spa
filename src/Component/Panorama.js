import React, { Component } from 'react';


class Panorama extends Component {
    constructor() {
        super()
    }
    componentDidMount() {

        console.log(window.init)
        window.init ? window.init() : null;
        window.animate ? window.animate() : null;

    }
    render() {
        return (<div id = "panorama">

        </div>)
    }
}

export default Panorama