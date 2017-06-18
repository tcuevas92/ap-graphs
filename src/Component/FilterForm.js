import React, { Component } from 'react';

class FilterForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        
        var inputs = Array.from(e.target.elements);
        var checkbox = inputs.find(function(input) {
            return input.name === 'enabled';
        });

        var max = inputs.find(function(input) {
            return input.name === 'max';
        });
        var min = inputs.find(function(input) {
            return input.name === 'min';
        });

        var filter = {
            Title: checkbox.value,
            Enabled: checkbox.checked,
            Max: isNaN(max.value) ? null : max.value,
            Min: isNaN(min.value) ? null : min.value            
        };

        this.props.updateFilter(filter);
    }

    render() {
        return (
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                {this.props.filters.map((filter, index) => 
                    <div key={'filter-' + index} className="panel panel-default">
                        <div className="panel-heading" role="tab" id={"heading-" + index}>
                            <h4 className="panel-title text-left">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse-" + index} aria-expanded="true" aria-controls="collapseOne">
                                    {filter.Title}
                                </a>
                            </h4>
                        </div>
                        <div id={"collapse-" + index} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading-" + index}>
                            <div className="panel-body">
                                <form className="text-left" onSubmit={(e) => this.handleSubmit(e)}>                        
                                    {
                                        <div>
                                            <div className="checkbox text-left">
                                                <label>
                                                    <input type="checkbox" name="enabled" value={filter.Title} defaultChecked={filter.Enabled} />
                                                    Show data points
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="min">Greater than</label>
                                                <input type="number" step="any" name="min" className="form-control" placeholder="Min" defaultValue={filter.Min || ""} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="max">Less than</label>
                                                <input type="number" step="any" name="max" className="form-control" placeholder="Max" defaultValue={filter.Max || ""} />
                                            </div>
                                        </div>
                                    }
                                    <input type="submit" value="Filter" className="btn btn-default btn-block"/>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default FilterForm;
