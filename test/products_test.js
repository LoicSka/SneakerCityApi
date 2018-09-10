import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../app';
import * as Product from '../api/models/products';

let should = chai.should();

chai.use(chaiHttp);

describe('/products GET', () => {
    it('returns array containing products', (done) => {
        chai
        .request(server)
        .get('/products')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('result').that.deep.equal(Product.all());
            res.body.should.have.property('message').that.equal('Success');
            res.body.should.have.property('status').that.equal('22000');
            done();
        });
    });
});

describe('/products/:productId GET', () => {
    it('returns array containing the 10 latest products', (done) => {
        const productId = "001";
        chai
        .request(server)
        .get(`/products/${productId}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('result').that.deep.equal(Product.withId(productId));
            res.body.should.have.property('message').that.equal('Success');
            res.body.should.have.property('status').that.equal('22000');
            done();
        });
    });
});