import { connect } from 'react-redux'
import { setSelectedColumns } from '../Actions/ActionCreator.js';
import FilterForm from '../Component/FilterForm.js';

const mapStateToProps = state => {
    return {
        selectedColumns: state.SelectedColumns
    };
}

const mapDispatchToProps  = dispatch => {
    return {
        setSelectedColumns: data => {
            dispatch(setSelectedColumns(data));
        }
    };
}

const FilterFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterForm)

export default FilterFormContainer