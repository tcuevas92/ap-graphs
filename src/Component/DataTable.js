import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.props.data.Header.map((value) => <th>{value}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.Data.map((value, index) =>
                            <tr>
                                {value.map((inner) => <td>{inner}</td>)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default DataTable;
