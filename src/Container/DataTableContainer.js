import { connect } from 'react-redux'
import DataTable from '../Component/DataTable.js';

const mapStateToProps = state => {
    return {
        selectedColumns: state.SelectedColumns
    };
}

const DataTableContainer = connect(
    mapStateToProps
)(DataTable)

export default DataTableContainer