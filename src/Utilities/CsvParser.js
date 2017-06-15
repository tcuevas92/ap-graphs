
class CsvParser {
    constructor(fileReader, callback) {
        this.fileReader = new FileReader();
        this.callback = callback;
    }

    parse(file) {
        this.fileReader.readAsText(file);
        this.fileReader.onload = this.parseFileContents;
    }

    parseFileContents(event) {
        var fileText = event.target.result;
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