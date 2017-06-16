export const FILE_CHANGED = 'FILE_CHANGED';

export function fileChanged(parsedFileData) {
    return {
        type: FILE_CHANGED,
        fileData: parsedFileData
    };
}