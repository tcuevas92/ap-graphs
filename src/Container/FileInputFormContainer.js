import { connect } from 'react-redux'
import { fileChanged } from '../Actions/ActionCreator.js';
import FileInputForm from '../Component/FileInputForm.js';

const mapDispatchToProps  = dispatch => {
    return {
        onFileParsed: data => {
            dispatch(fileChanged(data));
        }
    };
}

const FileInputFormContainer = connect(
    null,
    mapDispatchToProps
)(FileInputForm)

export default FileInputFormContainer;