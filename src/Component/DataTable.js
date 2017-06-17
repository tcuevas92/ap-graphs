import React, { Component } from 'react';

class DataTable extends Component {
    isSelected(column) {
        return this.props.selectedColumns.indexOf(column) > -1;
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        {this.props.data.Header.map((value) => this.isSelected(value) && <th>{value}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.Data.map((value, index) =>
                            <tr>
                                {value.map((inner, innerIndex) => this.isSelected(this.props.data.Header[innerIndex]) && <td>{inner}</td>)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default DataTable;
