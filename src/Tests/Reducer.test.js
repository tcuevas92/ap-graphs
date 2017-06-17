import { FILE_CHANGED, SET_SELECTED_COLUMNS } from '../Actions/ActionCreator.js';
import subject from '../Reducers/Reducer.js'

it ('should return initial state by default', () => {
    var expected = {
        FileData: null,
        Filters: {}
    };

    var result = subject(undefined, {});

    expect(result).toEqual(expected);
});

it ('should handle FILE_CHANGED', () => {
    var fileData = {
        Header: ['a','b','c'],
        Data: ['d','e','f']
    };
    var action = {
        type: FILE_CHANGED,
        fileData: fileData
    };

    var result = subject(undefined, action);

    expect(result.FileData).toEqual(fileData);
    expect(result.SelectedColumns).toEqual(fileData.Header);
});

it ('should handle SET_SELECTED_COLUMNS', () => {
    var action = {
        type: SET_SELECTED_COLUMNS,
        selectedColumns: ['e']
    };

    var result = subject(undefined, action);

    expect(result.FileData).toEqual(null);
    expect(result.SelectedColumns).toEqual(action.selectedColumns);
});