import { connect } from 'react-redux'
import ChartView from '../Component/ChartView.js';

const mapStateToProps = state => {
    return {
        filteredData: state.FilteredData
    };
}

const ChartViewContainer = connect(
    mapStateToProps
)(ChartView)

export default ChartViewContainer