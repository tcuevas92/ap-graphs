
class DataFilterer {
    filter(filters, fileData) {
        fileData = this.removeDisabledColumns(filters, fileData);
        fileData = this.applyNumericFilters(filters, fileData);
        return fileData;
    }

    removeDisabledColumns (filters, fileData) {
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

    applyNumericFilters(filters, fileData) {
        var columnIndexToFilterMap = fileData.Header.map(function(header, index) {
            return filters.find(function(filter) {
                return filter.Title === header && filter.Enabled;
            });
        });

        fileData.Data = fileData.Data.filter(function(row) {
            return row.every(function(value, index) {
                var isValid = true;
                var filter = columnIndexToFilterMap[index];

                if (filter.Max !== null && filter.Max !== undefined && filter.Max !== "") {
                    isValid = parseFloat(value) < parseFloat(filter.Max);
                }

                if (isValid && filter.Min !== null && filter.Min !== undefined && filter.Min !== "") {
                    isValid = parseFloat(value) > parseFloat(filter.Min);
                }

                return isValid;
            });
        });

        return fileData;
    }
}

export default DataFilterer;