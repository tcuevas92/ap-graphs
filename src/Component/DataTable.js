import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        {this.props.filteredData.Header.map((value) => <th>{value}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.filteredData.Data.map((value, index) =>
                            <tr>
                                {value.map((inner, innerIndex) => <td>{inner}</td>)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default DataTable;
