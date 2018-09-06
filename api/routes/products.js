'use strict';

import { Router } from 'express';

import * as Product from '../models/products';

const router = Router();

router.get('/', (req, res) => {
    const products = req.query.sorted == true ? Product.sorted(Number(req.query.limit)) : Product.all(Number(req.query.limit));
    res
    .status(200)
    .json({
        'result': Product.all(),
        'status': '22000',
        'message': 'Success'
    });
});

router.get('/:productId', (req, res) => {
    const id = req.params.productId;
    const product = Product.withId(id) || Product.withPermalink(id);
    if (product) {
        res
        .status(200)
        .json({
            'result': product,
            'status': '22000',
            'message': 'Success'
        });
    } else {
        res
        .status(404)
        .json({
            'status': '22001',
            'message': 'No valid entry found for provided ID'
        });
    }
});

router.get('/latest', (req, res) => {
    const latestProducts = Product.sorted(10);
    res
    .status(200)
    .json({
        'result': latestProducts,
        'status': '22000',
        'msg': 'success'
    });
});

export default router;

