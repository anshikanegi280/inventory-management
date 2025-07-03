import express from 'express';
import inventoryController from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', inventoryController.getInventory.bind(inventoryController));
router.post('/', inventoryController.addInventory.bind(inventoryController));
router.put('/:id', inventoryController.updateInventory.bind(inventoryController));
router.delete('/:id', inventoryController.deleteInventory.bind(inventoryController));

export default router;