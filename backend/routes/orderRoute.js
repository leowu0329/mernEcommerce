import express from 'express';
import {
  listOrders,
  updateOrderStatus,
  createOrder,
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';

const orderRouter = express.Router();

// Get all orders (admin only)
orderRouter.post('/list', adminAuth, listOrders);

// Update order status (admin only)
orderRouter.post('/status', adminAuth, updateOrderStatus);

// Create new order (public)
orderRouter.post('/create', createOrder);

export default orderRouter;
