import React, { Component } from 'react';

import CsvParser from '../Utilities/CsvParser.js';
import DataTable from './DataTable.js';

class FileInputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: null
        };
    }

    onChange(event) {
        var that = this;
        var fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0]);
        fileReader.onload = function(event) {
            var fileText = event.target.result;
            var rows = fileText.split('\n');
            var header = rows[0];
            var data = [];
            for (var i = 1; i < rows.length; i++) {
                data.push(rows[i].split(','));
            }

            that.setState({
                Data: {
                    Header: header.split(','),
                    Data: data
                }
            });
        };
    }

    render() {
        var needsData = !this.state.Data;

        return (
            <div>
                {
                    needsData && 
                        <form encType="multipart/formdata">
                        <label htmlFor="FileInput">File</label>
                        <input type="file" accept=".csv" onChange={(event) => this.onChange(event)}/>
                    </form>
                }

                {
                    !needsData &&
                    <DataTable data={this.state.Data} />
                }
            </div>
           
        );
    }
}

export default FileInputForm;
