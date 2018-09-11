import { sortBy, findLast, reverse } from 'lodash';

const data = require('../../data/products.json');

const all = (limit) => typeof(limit) === 'number' ? data.slice(0, limit) : data;

const sorted = (limit) => {
    const productsArray = [].concat(data);
    const sortedProducts = productsArray.sort( (a,b) => a.releaseDate.localeCompare(b.releaseDate) || Number(a.id) - Number(b.id) );
    return typeof(limit) === 'number' ? sortedProducts.reverse().slice(0, limit) : sortedProducts;
}

const withId = (id) => findLast(data, (product) => product.id == id);

const withPermalink = (permalink) => findLast(data, (product) => product.permalink == permalink);

const paginate = (page_size, page_number) => {
--page_number; // because pages logically start with 1, but technically with 0
return data.slice(page_number * page_size, (page_number + 1) * page_size);
}

export { all, sorted, paginate, withId, withPermalink };




