const express = require('express');
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');
const BrandController = require('../controllers/BrandController');
const ProductController = require('../controllers/ProductController');
const ProductReviewController = require('../controllers/ProductReviewController');
const CartController = require('../controllers/CartController');
const OrderItemController = require('../controllers/OrderItemController');
const OrderController = require('../controllers/OrderController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello Sujith");
})

// Authentication and Users
router.post('/api/register', UserController.create);
router.get('/api/login', UserController.get);
router.patch('/api/users/:id', UserController.update);

// Categories
router.post('/api/category', CategoryController.create);
router.get('/api/categories', CategoryController.getAll);

// Brands
router.post('/api/brand', BrandController.create);

// Product Reviews
router.post('/api/product/review', ProductReviewController.create);
router.get('/api/product/reviews', ProductReviewController.getAll);

// Products
router.post('/api/product', ProductController.create);
router.post('/api/productDetail', ProductController.createProductDetail);
router.get('/api/products', ProductController.getAll);
router.get('/api/productsByName', ProductController.getAllByName);
router.get('/api/category/products', ProductController.getAllByCategory);
router.get('/api/product/:id', ProductController.get);
router.patch('/api/product/:id', ProductController.update);

// Cart
router.post('/api/cart', CartController.create);
router.get('/api/carts', CartController.getAll);
router.get('/api/cart', CartController.get);
router.delete('/api/cart/:id', CartController.destroy);
router.patch('/api/cart/:id', CartController.update);

// OrderItems
router.post('/api/orderItems', OrderItemController.create);
router.get('/api/orderItems/:id', OrderItemController.getAll);

// Orders
router.post('/api/orders', OrderController.create);
router.get('/api/orders/:id', OrderController.getAll);

module.exports = router;
