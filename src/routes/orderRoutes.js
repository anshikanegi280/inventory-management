import express from 'express';
import orderController from '../controllers/orderController.js';

const router = express.Router();

router.post('/', orderController.createOrder.bind(orderController));
router.get('/', orderController.getOrders.bind(orderController));
router.put('/:id/status', orderController.updateOrderStatus.bind(orderController));

export default router;