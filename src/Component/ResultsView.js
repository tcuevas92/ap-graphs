import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import DataTableContainer from '../Container/DataTableContainer.js';
import FilterFormContainer from '../Container/FilterFormContainer.js';
import ChartViewContainer from '../Container/ChartViewContainer.js';
import '../Styles/ResultsView.css';

class ResultsView extends Component {
    buildTab(path, title) {
        const isActive = this.props.location.pathname === path;
        const cssClasses = isActive ? 'active' : '';

        return (
            <li role="presentation" className={cssClasses}>
                <Link to={path}>{title}</Link>
            </li>
        );
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-3">
                   <FilterFormContainer />
                </div>
                <div className="col-md-9">
                    <ul className="nav nav-pills">
                        { this.buildTab("/Results/Table", "Table") }
                        { this.buildTab("/Results/Charts", "Charts") }                        
                    </ul>

                    <Route path="/Results/Table" component={DataTableContainer} />
                    <Route path="/Results/Charts" component={ChartViewContainer} />
                </div>
            </div>
        );
    }
}

export default ResultsView;