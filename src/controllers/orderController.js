import Order from '../models/Order.js';

class OrderController {
    async createOrder(req, res) {
        try {
            const { productId, quantity } = req.body;
            const newOrder = new Order({ productId, quantity });
            await newOrder.save();
            res.status(201).json({ message: 'Order created successfully', order: newOrder });
        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error: error.message });
        }
    }

    async getOrders(req, res) {
        try {
            const orders = await Order.find();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching orders', error: error.message });
        }
    }

    async updateOrderStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json({ message: 'Order status updated successfully', order: updatedOrder });
        } catch (error) {
            res.status(500).json({ message: 'Error updating order status', error: error.message });
        }
    }
}

export default new OrderController();