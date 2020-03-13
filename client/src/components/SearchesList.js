import React, { Component } from 'react';
import MaterialTable from 'material-table';
import fetchData from '../fetchdata/fetchData';

export default class SearchesList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            table: {
                columns: [
                    { title: 'Name', field: 'name' },
                    { title: 'Country', field: 'country' },
                    { title: 'Searches', field: 'searches', type: 'numeric' }
                ]
            }
        }
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ 
            ...this.state,
            data
        });
    }

    render() {
        return (
            <MaterialTable
                title="Searches List"
                columns={this.state.table.columns}
                data={this.state.data}
            />
        )
    }
}