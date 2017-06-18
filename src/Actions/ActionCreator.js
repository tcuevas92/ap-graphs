export const FILE_CHANGED = 'FILE_CHANGED';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export function fileChanged(parsedFileData) {
    return {
        type: FILE_CHANGED,
        fileData: parsedFileData
    };
}

export function updateFilter(filter) {
    return {
        type: UPDATE_FILTER,
        filter: filter
    };
}