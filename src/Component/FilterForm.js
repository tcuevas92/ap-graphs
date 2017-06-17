import React, { Component } from 'react';

class FilterForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        var selectedColumns = [];
        
        var inputs = e.target.elements;

        for (var i = 0; i < inputs.length - 1; i++) {
            var input = inputs[i];
            if (input.checked) {
                selectedColumns.push(input.value);
            }
        }

        this.props.setSelectedColumns(selectedColumns);
    }

    render() {
        return (
             <form onSubmit={(e) => this.handleSubmit(e)}>                        
                {
                    this.props.filters.map((filter) => 
                        <div className="checkbox text-left">
                            <label>
                                <input type="checkbox" value={filter.Title} defaultChecked={filter.Enabled} />
                                {filter.Title}
                            </label>
                        </div>
                    )
                }
                <input type="submit" value="filter columns" className="btn btn-default btn-block"/>
            </form>
        );
    }
}

export default FilterForm;
