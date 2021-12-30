const Product = require('../models/Product');
const router = require('express').Router();

//* create
router.post('/', async (req, res) => {
  try {
    const createdProduct = await Product.create(req.body);
    console.log(createdProduct);
    res.status(201).json({ createdProduct });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//* get featured products
router.get('/', async (req, res) => {
  try {
    const { featured, category } = req.query;
    const queryObject = {};
    if (featured) {
      queryObject.featured = featured === 'true' ? true : false;
    }
    if (category) {
      queryObject.category = category;
    }
    const getProducts = await Product.find(queryObject);
    res
      .status(200)
      .json({ getProducts, nbHits: getProducts.length });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

//* get product by :id
router.get('/:id', async (req, res) => {
  try {
    const { id: productID } = req.params;
    const getProduct = await Product.findOne({ _id: productID });
    if (!getProduct) {
      return res.status(404).json({ msg: 'Not Found' });
    }
    res.status(201).json({ getProduct });
  } catch (err) {
    res.status(500).json(err);
  }
});
//* get product by :id
router.get('/category/:id', async (req, res) => {
  try {
    const { id: productID } = req.params;
    const getProduct = await Product.findOne({ _id: productID });
    if (!getProduct) {
      return res.status(404).json({ msg: 'Not Found' });
    }
    res.status(201).json({ getProduct });
  } catch (err) {
    res.status(500).json(err);
  }
});

//* delete product
router.delete('/:id', async (req, res) => {
  try {
    const { id: productID } = req.params;
    const deleteProduct = await Product.findOneAndDelete({ _id: productID });
    if (!deleteProduct) {
      return res.status(404).json({ msg: 'Not Found' });
    }
    res.status(201).json({ Product: null, status: 'Success' });
  } catch (err) {
    res.status(500).json(err);
  }
});

//* get all products
router.get('/', async (req, res) => {
  try {
    const getAllProducts = await Product.find({});
    res.status(201).json({ getAllProducts });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
