import { connect } from 'react-redux'
import App from '../App.js';

const mapStateToProps = state => {
    return {
        selectedFile: state.SelectedFile
    };
}

const AppContainer = connect(
    mapStateToProps
)(App)

export default AppContainer