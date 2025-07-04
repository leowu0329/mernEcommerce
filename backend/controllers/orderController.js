import orderModel from '../models/orderModel.js';

// Get all orders
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({}).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    const order = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true },
    );

    if (!order) {
      return res.json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, message: 'Order status updated successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Create new order (for frontend use)
const createOrder = async (req, res) => {
  try {
    const { items, amount, address, paymentMethod, payment } = req.body;

    const newOrder = new orderModel({
      items,
      amount,
      address,
      paymentMethod,
      payment,
    });

    await newOrder.save();
    res.json({ success: true, message: 'Order created successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { listOrders, updateOrderStatus, createOrder };
