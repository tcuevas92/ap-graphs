export const FILE_CHANGED = 'FILE_CHANGED';
export const SET_SELECTED_COLUMNS = 'SET_SELECTED_COLUMNS';

export function fileChanged(parsedFileData) {
    return {
        type: FILE_CHANGED,
        fileData: parsedFileData
    };
}

export function setSelectedColumns(selectedColumns) {
    return {
        type: SET_SELECTED_COLUMNS,
        selectedColumns: selectedColumns
    };
}