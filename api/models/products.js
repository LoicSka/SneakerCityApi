'use strict';

import { sortBy, findLast } from 'lodash';

const data = require('../../data/products.json');

const all = (limit) => typeof(limit) === 'number' ? data.slice(1, limit) : data;

const sorted = (limit) => {
    const sortedProducts = sortBy(data, (product) => new Date(product.releaseDate));
    return typeof(limit) === 'number' ? sortedProducts.slice(1, limit) : sortedProducts;
}

const withId = (id) => findLast(data, (product) => product.id == id);

const withPermalink = (permalink) => findLast(data, (product) => product.permalink == permalink);

export { all, sorted, withId, withPermalink };




