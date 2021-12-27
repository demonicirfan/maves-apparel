const Product = require('../models/Product');
const router = require('express').Router();

//* create
router.post('/', async (req, res) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(201).json({ createdProduct });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//* get featured products
router.get('/featured', async (req, res) => {
  try {
    const getFeaturedProducts = await Product.find(req.query);
    res
      .status(201)
      .json({ getFeaturedProducts, nbHits: getFeaturedProducts.length });
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
  // const qNew = req.query.new;
  // const qCategory = req.query.category;
  // try {
  //   let products;
  //   if (qNew) {
  //     products = await Product.find().sort({ createdAt: -1 }).limit(5);
  //   } else if (qCategory) {
  //     products = await Product.find({
  //       categories: {
  //         $in: [qCategory],
  //       },
  //     });
  //   } else {
  //     products = await Product.find();
  //   }
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

module.exports = router;
