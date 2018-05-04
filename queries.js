var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};


var pgp = require('pg-promise')(options);
// Dados do banco
var connectionString = {
  host: '', 
  port: 5432,
  database: '',
  user: '',
  password: ''
};

var db = pgp(connectionString);

// add query functions

function createParceiros(req, res, next) {
  var obj = req.body;

  db.none('INSERT INTO parceiro (nm_parceiro, ds_email, ds_telefone, ds_cargo, cd_uf, ds_cidade, razao_social, nm_fantasia, cnpj, site, endereco, cep, pais, parceria_em, outras_info, principais_clientes, ds_atividades, ds_especialidade) VALUES (${nm_parceiro}, ${ds_email}, ${ds_telefone}, ${ds_cargo}, ${cd_uf}, ${ds_cidade}, ${razao_social}, ${nm_fantasia}, ${cnpj}, ${site}, ${endereco}, ${cep}, ${pais}, ${parceria_em}, ${outras_info}, ${principais_clientes}, ${ds_atividades}, ${ds_especialidade})', obj)
    .then(function () {
      res.status(200)
        .json({
          status: 'success', 
          message: 'Inserted'
       
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  createParceiros: createParceiros
};