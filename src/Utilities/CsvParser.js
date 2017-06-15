
class CsvParser {
    parseFileContents(fileText) {
        var rows = fileText.split('\n');
        var header = rows[0];
        var data = [];
        for (var i = 1; i < rows.length; i++) {
            data.push(rows[i].split(','));
        }

        return {
            Header: header.split(','),
            Data: data 
        };
    }
}

export default CsvParser;