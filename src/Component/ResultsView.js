import React, { Component } from 'react';
import DataTableContainer from '../Container/DataTableContainer.js';
import FilterFormContainer from '../Container/FilterFormContainer.js';

class ResultsView extends Component {

    render() {
        return(
            <div className="row">
                <div className="col-md-3">
                   <FilterFormContainer />
                </div>
                <div className="col-md-9">
                    <DataTableContainer />
                </div>
            </div>
        );
    }
}

export default ResultsView;