import Inventory from '../models/Inventory.js';
import Order from '../models/Order.js';

class ReportController {
    async getInventoryReport(req, res) {
        try {
            const inventory = await Inventory.find({});
            const report = inventory.map(item => ({
                name: item.name,
                quantity: item.quantity,
                reorderLevel: item.reorderLevel,
            }));
            res.status(200).json(report);
        } catch (error) {
            res.status(500).json({ message: 'Error generating inventory report', error });
        }
    }

    async getOrderReport(req, res) {
        try {
            const orders = await Order.find({});
            const report = orders.map(order => ({
                productId: order.productId,
                quantity: order.quantity,
                status: order.status,
            }));
            res.status(200).json(report);
        } catch (error) {
            res.status(500).json({ message: 'Error generating order report', error });
        }
    }
}

export default new ReportController();