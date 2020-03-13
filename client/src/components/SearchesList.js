import React, { Component } from 'react';
import MaterialTable from 'material-table';
import fetchData from '../fetchdata/fetchData';

export default class SearchesList extends Component {
    _isMounted = false;
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
        this._isMounted = true;

        const data = await fetchData();
        if(this._isMounted) {
            this.setState({ 
                ...this.state,
                data: data
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div data-testid='table'>
                <MaterialTable
                    title="Searches List"
                    columns={this.state.table.columns}
                    data={this.state.data}
                />
            </div>
        )
    }
}