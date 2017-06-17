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