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
            <form className="form-horizontal" encType="multipart/formdata">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="FileInput">File</label>
                    <div className="col-sm-4">
                        <input className="form-control" type="file" accept=".csv" onChange={(event) => this.onChange(event)}/>
                    </div>
                </div>
            </form>
        );
    }
}

export default FileInputForm;
