var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){

    beforeEach(function(done){
        //Que tal usar o 'node-database-cleaner'
        var conn = express.infra.connectionFactory();
        conn.query('delete from produtos', function(err, result){
            if(!err)
                done();
        });
    });

    afterEach(function(done){
        var conn = express.infra.connectionFactory();
        conn.query('delete from produtos', function(err, result){
            if(!err)
                done();
        });
    })

    it('#listagem json', function(done){
        request
            .get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200, done);
    });

    it('#listagem html', function(done){
        request
            .get('/produtos')
            .set('Accept', 'text/html')
            .expect('Content-Type',/html/)
            .expect(200, done);
    });

    it('#cadastro de novo produto com dados invalidos', function(done){
        request
            .post('/produtos')
            .send({
                titulo:'',
                descricao:'Novo livro',
                preco:150
            })
            .expect(400, done);
    });

    it('#cadastro de novo produto com dados validos', function(done){
        request
            .post('/produtos')
            .send({
                titulo:'New Book',
                descricao:'Novo livro',
                preco:150.50
            })
            .expect(302, done);
    });
})