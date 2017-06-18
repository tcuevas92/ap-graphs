import { FILE_CHANGED, UPDATE_FILTER } from '../Actions/ActionCreator.js';
import subject from '../Reducers/Reducer.js'

it ('should return initial state by default', () => {
    var expected = {
        FileData: null,
        Filters: [],
        FilteredData: null
    };

    var result = subject(undefined, {});

    expect(result).toEqual(expected);
});

it ('should set FileData to data passed in with FILE_CHANGED action', () => {
    var fileData = {
        Header: ['a','b'],
        Data: ['d','e']
    };
    var action = {
        type: FILE_CHANGED,
        fileData: fileData
    };

    var result = subject(undefined, action);

    expect(result.FileData).toEqual(fileData);
    expect(result.FilteredData).toEqual(fileData);    
    expect(result.Filters).toEqual([
        {
            Title: 'a',
            Enabled: true,
            Max: null,
            Min: null
        },
        {
            Title: 'b',
            Enabled: true,
            Max: null,
            Min: null
        }
    ]);
});

it ('should set FilteredData to data passed in with FILE_CHANGED action', () => {
    var fileData = {
        Header: ['a','b'],
        Data: ['d','e']
    };
    var action = {
        type: FILE_CHANGED,
        fileData: fileData
    };

    var result = subject(undefined, action);

    expect(result.FilteredData).toEqual(fileData);
});

it ('should set create Filters that are enabled with data passed in with FILE_CHANGED action', () => {
    var fileData = {
        Header: ['a','b'],
        Data: ['d','e']
    };
    var action = {
        type: FILE_CHANGED,
        fileData: fileData
    };

    var result = subject(undefined, action);

    expect(result.Filters).toEqual([
        {
            Title: 'a',
            Enabled: true,
            Max: null,
            Min: null
        },
        {
            Title: 'b',
            Enabled: true,
            Max: null,
            Min: null
        }
    ]);
});

it ('should merge new filter into Filters list with UPDATE_FILTER action', () => {
    var state = {
        FileData: {
            Header: ['a','b'],
            Data: [
                [1,2],
                [3,4]
            ]
        },
        Filters: [
            {
                Title: 'a',
                Enabled: false
            },
            {
                Title: 'b',
                Enabled: true
            }
        ]
    };
    var action = {
        type: UPDATE_FILTER,
        filter: {
            Title: 'a',
            Enabled: true,
            Max: 100,
            Min: 10
        }
    };

    var result = subject(state, action);
    expect(result.Filters).toEqual([
        {
            Title: 'a',
            Enabled: true,
            Max: 100,
            Min: 10
        },
        {
            Title: 'b',
            Enabled: true
        }
    ]);
});