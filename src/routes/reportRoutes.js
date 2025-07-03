import express from 'express';
import reportController from '../controllers/reportController.js';

const router = express.Router();

router.get('/inventory', reportController.getInventoryReport.bind(reportController));
router.get('/orders', reportController.getOrderReport.bind(reportController));

export default router;