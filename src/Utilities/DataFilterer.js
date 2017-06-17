
class DataFilterer {
    filter(filters, fileData) {
        var enabledColumnIndices = [];
        fileData.Header.forEach(function(header, index) {
            var filter = filters.find(function(f) {
                return f.Title === header && f.Enabled;
            });

            if (filter) {
                enabledColumnIndices.push(index);
            }
        });

        fileData.Header = fileData.Header.filter(function(h, index) {
            return enabledColumnIndices.indexOf(index) > -1;
        });

        fileData.Data = fileData.Data.map(function(subData) {
            return subData.filter(function(d, index) {
                return enabledColumnIndices.indexOf(index) > -1;
            });
        });

        return fileData;
    }

    removeDisabledColumns (value, index) {
        
    }
}

export default DataFilterer;