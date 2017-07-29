import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import DataTableContainer from '../Container/DataTableContainer.js';
import FilterFormContainer from '../Container/FilterFormContainer.js';
import ChartView from './ChartView.js';

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
        const { match } = this.props;

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
                    <Route path="/Results/Charts" component={ChartView} />
                </div>
            </div>
        );
    }
}

export default ResultsView;