import { FILE_CHANGED, UPDATE_FILTER } from '../Actions/ActionCreator.js';
import DataFilterer from '../Utilities/DataFilterer.js';

const initialState = {
    FileData: null,
    Filters: [],
    FilteredData: null    
}

const dataFilterer = new DataFilterer();

function app(state = initialState, action) {
    switch(action.type) {
        case FILE_CHANGED:
            return Object.assign({}, state, {
                FileData: action.fileData,
                FilteredData: action.fileData,
                Filters: action.fileData.Header.map(function(header) {
                    return {
                        Title: header,
                        Enabled: true,
                        Max: null,
                        Min: null 
                    }
                })
            });
        case UPDATE_FILTER:
            var filters = state.Filters.map(function(filter) {
                if (filter.Title === action.filter.Title) {
                    return action.filter;
                }

                return filter;
            });
            return Object.assign({}, state, {
                Filters: filters,
                FilteredData: dataFilterer.filter(filters, Object.assign({}, state.FileData))
            });
        default:
            return state;
    }
}

export default app