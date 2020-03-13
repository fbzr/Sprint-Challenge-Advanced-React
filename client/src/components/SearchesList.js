import React, { Component } from 'react';
import fetchData from '../fetchdata/fetchData';

export default class SearchesList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
            </div>
        )
    }
}