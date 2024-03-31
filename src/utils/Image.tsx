export function getBackgroundColor(size: number) {
    const sizeInMB = size / 1024 / 1024; // Convert size to MB
    if (sizeInMB > 8) {
        return 'bg-red-500 text-white'; // Fond rouge pour les images de plus de 8 MB
    } else if (sizeInMB >= 4 && sizeInMB <= 8) {
        return 'bg-orange-500 text-white'; // Fond orange pour les images entre 4 et 8 MB
    } else {
        return 'bg-green-500 text-white'; // Fond vert pour les images de moins de 4 MB
    }
}

export function formatFileSize(size: number) {
    if (size < 1024) {
        return `${size} B`;
    } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)} KB`;
    } else {
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    }
}

export function getFileExtension(fileName: string) {
    return fileName.split('.').pop(); // Obtient l'extension du nom de fichier
}