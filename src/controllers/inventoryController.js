import Inventory from '../models/Inventory.js';

class InventoryController {
    async getInventory(req, res) {
        try {
            const inventoryItems = await Inventory.find();
            res.status(200).json(inventoryItems);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving inventory', error });
        }
    }

    async addInventory(req, res) {
        const { name, quantity, reorderLevel } = req.body;
        const newInventoryItem = new Inventory({ name, quantity, reorderLevel });

        try {
            const savedItem = await newInventoryItem.save();
            res.status(201).json(savedItem);
        } catch (error) {
            res.status(400).json({ message: 'Error adding inventory item', error });
        }
    }

    async updateInventory(req, res) {
        const { id } = req.params;
        const updates = req.body;

        try {
            const updatedItem = await Inventory.findByIdAndUpdate(id, updates, { new: true });
            if (!updatedItem) {
                return res.status(404).json({ message: 'Inventory item not found' });
            }
            res.status(200).json(updatedItem);
        } catch (error) {
            res.status(400).json({ message: 'Error updating inventory item', error });
        }
    }

    async deleteInventory(req, res) {
        const { id } = req.params;

        try {
            const deletedItem = await Inventory.findByIdAndDelete(id);
            if (!deletedItem) {
                return res.status(404).json({ message: 'Inventory item not found' });
            }
            res.status(200).json({ message: 'Inventory item deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting inventory item', error });
        }
    }
}

export default new InventoryController();