import React, { Component } from 'react';
import DataTableContainer from '../Container/DataTableContainer.js';
import FilterFormContainer from '../Container/FilterFormContainer.js';

class ResultsView extends Component {

    render() {
        return(
            <div className="row">
                <div className="col-md-3">
                   <FilterFormContainer headerValues={this.props.data.Header} />
                </div>
                <div className="col-md-9">
                    <DataTableContainer data={this.props.data} />
                </div>
            </div>
        );
    }
}

export default ResultsView;