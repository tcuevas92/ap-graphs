import React, { Component } from 'react';
import '../Styles/DataTable.css';

class DataTable extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        {this.props.filteredData.Header.map((value, index) => <th title={value} key={'header' + index}>{value}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.filteredData.Data.map((value, index) =>
                            <tr key={'row-' + index}>
                                {value.map((inner, innerIndex) => <td key={'row-' + index + '-column-' + innerIndex}>{inner}</td>)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default DataTable;
