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

    isChecked(headerValue) {
        return this.props.selectedColumns.indexOf(headerValue) > -1;
    }

    render() {
        return (
             <form onSubmit={(e) => this.handleSubmit(e)}>                        
                {
                    this.props.headerValues.map((header) => 
                        <div className="checkbox text-left">
                            <label>
                                <input type="checkbox" value={header} defaultChecked={() => this.isChecked(header)} />
                                {header}
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
