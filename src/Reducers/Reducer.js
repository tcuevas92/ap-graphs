import { FILE_CHANGED } from '../Actions/ActionCreator.js';

const initialState = {
    SelectedFile: null
}

function app(state = initialState, action) {
    switch(action.type) {
        case FILE_CHANGED:
            return Object.assign({}, state, {
                SelectedFile: action.fileData
            });
        default:
            return state;
    }
}

export default app