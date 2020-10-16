const { findAll } = require('../services/BookService');
const express = require('express');
const router = express.Router();

router.get('/list', async (req, res) => {
    try {
        const books = await findAll();
        res.status(200).json(books)
    }
    catch (err) {
        res.status(400).json({ message: 'Books Not found' })
    }
});

router.post('/create', async (req, res) => {
    const book = req.body;
    console.log(book);
    res.status(201).json({ message: 'Created' })
});



module.exports = router;

