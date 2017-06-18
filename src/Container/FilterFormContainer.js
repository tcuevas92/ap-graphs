import { connect } from 'react-redux'
import { updateFilter } from '../Actions/ActionCreator.js';
import FilterForm from '../Component/FilterForm.js';

const mapStateToProps = state => {
    return {
        filters: state.Filters
    };
}

const mapDispatchToProps  = dispatch => {
    return {
        updateFilter: data => {
            dispatch(updateFilter(data));
        }
    };
}

const FilterFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterForm)

export default FilterFormContainer