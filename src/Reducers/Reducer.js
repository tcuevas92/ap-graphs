import { FILE_CHANGED, SET_SELECTED_COLUMNS } from '../Actions/ActionCreator.js';

const initialState = {
    FileData: null,
    Filters: {},    
}

function app(state = initialState, action) {
    switch(action.type) {
        case FILE_CHANGED:
            return Object.assign({}, state, {
                FileData: action.fileData,
                SelectedColumns: action.fileData.Header
            });
        case SET_SELECTED_COLUMNS:
            return Object.assign({}, state, {
                SelectedColumns: action.selectedColumns
            });
        default:
            return state;
    }
}

export default app