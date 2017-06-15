import CsvParser from '../Utilities/CsvParser.js'

var subject = new CsvParser();

it ('should return the first as the header', () => {
    var testData = 'Some,Header,Text';
    var expected = ['Some', 'Header', 'Text'];

    var result = subject.parseFileContents(testData);

    expect(result.Header).toEqual(expected);
});

it ('should return additional rows as data', () => {
    var testData = 'Some,Header,Text\n1,2,3\n4,5,6';
    var expected = [
        ['1','2','3'],
        ['4','5','6'],        
    ];

    var result = subject.parseFileContents(testData);

    expect(result.Data).toEqual(expected);
});