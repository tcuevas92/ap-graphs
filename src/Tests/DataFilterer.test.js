import DataFilterer from '../Utilities/DataFilterer.js'

var subject = new DataFilterer();

it ('should remove columns that are disabled', function() {
    var filters = [
        {
            Title: 'a',
            Enabled: true
        },
        {
            Title: 'b',
            Enabled: false
        },
        {
            Title: 'c',
            Enabled: true
        }
    ];
    var fileData = {
        Header: ['a','b','c'],
        Data: [
            [1,2,3],
            [4,5,6]
        ]
    }

    var result = subject.filter(filters, fileData);

    expect(result).toEqual({
        Header: ['a', 'c'],
        Data: [
            [1,3],
            [4,6]
        ]
    });
});

it ('should remove entire row when value is greater than max', function() {
    var filters = [
        {
            Title: 'a',
            Enabled: true,
            Max: 100
        }
    ];
    var fileData = {
        Header: ['a'],
        Data: [
            [101],
            [3],
            [6]
        ]
    }

    var result = subject.filter(filters, fileData);

    expect(result).toEqual({
        Header: ['a'],
        Data: [
            [3],
            [6]
        ]
    });
});


it ('should remove entire row when value is less than min', function() {
    var filters = [
        {
            Title: 'a',
            Enabled: true,
            Min: 100
        }
    ];
    var fileData = {
        Header: ['a'],
        Data: [
            [101],
            [3],
            [6]
        ]
    }

    var result = subject.filter(filters, fileData);

    expect(result).toEqual({
        Header: ['a'],
        Data: [
            [101]
        ]
    });
});

it ('should remove rows that are outside of both max and min', function() {
    var filters = [
        {
            Title: 'a',
            Enabled: true,
            Max: 100,
            Min: 50
        },
        {
            Title: 'b',
            Enabled: true,
            Min: 10
        }
    ];
    var fileData = {
        Header: ['a'],
        Data: [
            [101],
            [12],
            [75]
        ]
    }

    var result = subject.filter(filters, fileData);

    expect(result).toEqual({
        Header: ['a'],
        Data: [
            [75]
        ]
    });
});