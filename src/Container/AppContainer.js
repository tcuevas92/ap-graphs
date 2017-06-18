import { connect } from 'react-redux'
import App from '../Component/App.js';

const mapStateToProps = state => {
    return {
        fileData: state.FileData
    };
}

const AppContainer = connect(
    mapStateToProps
)(App)

export default AppContainer