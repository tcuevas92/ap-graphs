import React, { Component } from 'react';

import CsvParser from '../Utilities/CsvParser.js';
import DataTable from './DataTable.js';

class FileInputForm extends Component {
    onChange(event) {
        var reactContext = this;
        var fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0]);
        fileReader.onload = function(event) {
            var data = new CsvParser().parseFileContents(event.target.result);
            reactContext.props.onFileParsed(data);
        };
    }

    render() {
        return (
            <form encType="multipart/formdata">
                <label htmlFor="FileInput">File</label>
                <input type="file" accept=".csv" onChange={(event) => this.onChange(event)}/>
            </form>
        );
    }
}

export default FileInputForm;
