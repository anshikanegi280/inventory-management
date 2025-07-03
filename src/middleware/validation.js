import { body, validationResult } from 'express-validator';

const validateInventory = [
    body('name').notEmpty().withMessage('Name is required'),
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
    body('reorderLevel').isInt({ gte: 0 }).withMessage('Reorder level must be a non-negative integer'),
];

const validateOrder = [
    body('productId').notEmpty().withMessage('Product ID is required'),
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
];

const validateReportRequest = [
    body('startDate').isISO8601().withMessage('Start date must be a valid date'),
    body('endDate').isISO8601().withMessage('End date must be a valid date'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export { validateInventory, validateOrder, validateReportRequest, validate };