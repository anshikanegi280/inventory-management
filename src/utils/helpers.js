export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
};

export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

export const validateStockLevel = (quantity, reorderLevel) => {
    return quantity < reorderLevel;
};